/**
 * Simple module to extract lsb_release info
 * and display it in html.
 * 
 * Reads /etc/lsb-release
 * 
 * 
 * 
 * globals: jQuery config
 * 
 * @author  Philipp Miller
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 * 
 */

import $ from 'jQuery';
import * as config from 'config';

const elems = $(".lsb-release");

if (elems.length) {
   config.require("file:///etc/lsb-release", parser)
     .then(init)
     .catch($.noop);
}

function init(cfg) {
  console.log("lsb-release", cfg);
  
  const keyRegex = /lsb-(distrib[_-]\w+)/i;
  
  elems.each(function(i, elem) {
    const match = keyRegex.exec(elem.className);
    if (match.length) {
      const key = match[1].toUpperCase().replace('-', '_');
      if (cfg.hasOwnProperty(key)) {
        elem.innerHTML = cfg[key];
      }
    }
  });
}

function parser(text) {
  const props = {};
  text.split("\n").forEach(function(line) {
    if (line) {
      const keyVal = line.split("=");
      props[keyVal[0]] = keyVal[1].replace(/"/g, "");
    }
  });
  return props;
}
