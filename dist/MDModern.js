!function(e,t,n,s,i){"use strict";function r(e,t){e in Z?Z[e].push(t):Z[e]=[t]}function o(e,t){if(e in Z)if(t)for(var n=Z[e],s=0,i=n.length;i>s;++s){var r=n[s];if(r===t||r._fn===t){1===n.length?delete Z[e]:n.splice(s,1);break}}else delete Z[e]}function a(e,t){function n(e){o(e,n),t.call(this,e)}n._fn=t,r(e,n)}function l(e){for(var t,n=arguments.length,s=Array(n>1?n-1:0),i=1;n>i;i++)s[i-1]=arguments[i];if((t=console).log.apply(t,[e].concat(s)),e in Z)for(var r=Z[e].slice(),o=0,a=r.length;a>o;++o)r[o].apply(r,[e].concat(s))}function c(e,t){ee[e]=t}function u(e){delete ee[e]}function d(e){for(var t=arguments.length,n=Array(t>1?t-1:0),s=1;t>s;s++)n[s-1]=arguments[s];if(e in ee){var i=ee[e];if(u(e),!i.apply(W,[e].concat(n)))return}l.apply(W,[e].concat(n))}function h(e,t,n,s){this.id=e,this.name=e,this.gecos=t,this.loggedIn=n||!1,this.facefile=s||"file:///home/"+e+"/.face"}function f(e,t){this.id=t,this.name=e,this.file=t}function g(e,t){this.id=t,this.name=e,this.code=t}function m(){this._items=[],this._running=!1}function p(e,t,n,s){return n&&(w(n),s&&_(s)),ie.user&&ie.user===(e.id||e)||y(e),v(t)}function v(e){if(!e)return Promise.reject("Password required!");if(!ie.user)return Promise.reject("Please chose a login name!");var t=le(ie);return oe.push(function(){var n=X.asyncToGenerator(regeneratorRuntime.mark(function s(n){var i,r;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(t.user===re.user&&ae){s.next=3;break}return s.next=3,y(t.user);case 3:"session"in t&&t.session!==re.session&&(i=S(t.session),alert("SESSION###"+i.name+"###"+i.file)),"language"in t&&t.language!==re.language&&(r=C(t.language),alert("LANGUAGE###"+r.code)),c("passwordPrompt",function(){return n("Login attempt failed"),!0}),ae=!1,alert("LOGIN###"+e);case 8:case"end":return s.stop()}},s,this)}));return function(e){return n.apply(this,arguments)}}())}function y(e){return e=b(e),ie.user=e.id,oe.push(function(t){c("userSelected",function(){c("passwordPrompt",function(){return t(e),!0})}),alert("USER###"+e.name)})}function w(e){return e=S(e),ie.session=e.id,l("sessionSelected",e),Promise.resolve(e)}function _(e){return e=C(e),ie.language=e.id,l("languageSelected",e),Promise.resolve(e)}function b(e){return e=e.id||e,te.find(function(t){return t.id===e})}function S(e){return e=e.id||e,ne.find(function(t){return t.id===e})}function C(e){return e=e.id||e,se.find(function(t){return t.id===e})}function E(){return alert("FORCE-SHUTDOWN###"),this}function I(){return alert("FORCE-RESTART###"),this}function x(){return alert("FORCE-SUSPEND###"),this}function P(){return alert("QUIT###"),this}function O(){t.setTimeout(function(){var e=n("#fade-in-cover");e.addClass("ready"),t.setTimeout(function(){e.remove()},1e3),t.clearTimeout(ue),o("ready",O)},1500)}function L(e,t){if(t){var s=n('<li class="message">'+t+"</li>");de.append(s.fadeIn()).animate({scrollTop:de.height()},500)}}function k(e,t){he.text(t)}function M(e,t){t>ge&&(ge=t,fe.addClass("running")),fe.css({width:100*t/ge+"%"})}function j(e){e.preventDefault(),p(ve[0].value,ye[0].value),ye.select()}function T(e,t){var s=n("<li>"),i=n("<a>"+t.name+"</a>"),r=n('<i class="fa fa-user">'),o=new Image;Se.append(s.append(i.prepend(r))),t.loggedIn&&s.addClass("loggedIn"),i.click(function(e){N(e,t)}),o.loaded=!1,o.src=t.facefile,n(o).one("load",function(){r.remove(),i.prepend(o),o.loaded=!0}),t.$li=s,t.img=o,_e.push(t),1===_e.length&&be.one("click",A),Ee||(Ee=t)}function N(e,t){Ee.$li.removeClass("selected"),$(t),t&&t.$li&&(ve.is(e.target)||t.name===ve[0].value||ve.val(t.name),t.$li&&t.$li.addClass("selected"),Ee=t)}function $(e){pe.removeClass("hasface"),e&&e.img&&(e.img.loaded?(we.src=e.img.src,pe.addClass("hasface")):n(e.img).one("load",function(){e===Ee&&(we.src=e.img.src,pe.addClass("hasface"))}))}function A(e){Ce?(me.off("click",A),be.one("click",A)):(me.click(A),e.stopPropagation()),Se.toggleClass("expanded"),Ce=!Ce}function D(e,t){t.$li=n("<li>").append(n("<a>"+t.name+"</a>").click(t.select.bind(t))),xe.append(t.$li),Pe||(Pe=t)}function H(e,t){Pe.$li.removeClass("selected"),Ie.html(t.name),t.$li.addClass("selected"),Pe=t}function R(e,t){t.$li=n("<li>").append(n('<a>\n          <span class="code">'+t.countryCode()+'</span>\n          <span class="name">'+t.name+"</span>\n        </a>").click(t.select.bind(t))),Le.append(t.$li),ke||(ke=t)}function z(e,t){ke.$li.removeClass("selected"),Oe.html(t.shortCode()),t.$li.addClass("selected"),ke=t}function U(e,t,n){if(e in je)return je[e];if("boolean"==typeof t&&(n=t,t=W),n=Me&&(n===W||n),n&&Me.hasOwnProperty(e))return s.log("Config: Found config file '"+e+"' in storage"),je[e]=Promise.resolve(JSON.parse(Me.getItem(e)));var i=!1,r=function(t){return function(n){throw i||(s.log("Config: Error while "+t+" config file '"+e+"': "+n),i=!0),n}};return je[e]=new Promise(function(t,n){s.log("Config: Loading config file '"+e+"'...");var i=new XMLHttpRequest;i.open("GET",e),i.responseType="text",i.addEventListener("load",function(){i.status<400?t(i.responseText):n(Error(i.statusText))}),i.send()})["catch"](r("loading")).then(G(t))["catch"](r("parsing")).then(function(t){return n&&Me.setItem(e,JSON.stringify(t)),t})["catch"](r("storing"))}function G(e){if("function"==typeof e)return e;switch(e){case W:case null:case"properties":return q;case"plain":return He;case"lines":return Ae;case"json":return JSON.parse}throw Error('Config: Unknown parser "'+e+"'")}function q(e){var t={},n=void 0,s=void 0;return e.split("\n").map(De).forEach(function(e,i){if(""!==e)if(s=Te.exec(e))t[s[1]]=JSON?JSON.parse(s[2]):s[2];else if(s=Ne.exec(e))n=s[1],t.hasOwnProperty(n)||(t[n]=[]);else{if(!n)throw Error("Config: Syntax error on line "+(i+1)+" '"+e+"'");t[n].push(e)}}),t}function B(e){var n=i.getElementsByClassName("slideshow"),r=n.length?n[0]:i.body;e.grid&&"1x1"!==e.grid&&/^\d+x\d+$/.test(e.grid)?(s.log("initializing slideshow grid "+e.grid),t.slideshow=new Q(r,e)):(s.log("initializing slideshow"),t.slideshow=new J(r,e))}function J(e,t){this.parent=e,this.parent.insertAdjacentHTML("afterbegin",Re);var n=this.parent.getElementsByClassName("slideshow-layer"),s=this.parent.getElementsByClassName("slideshow-filename");this.layers=[];for(var i=0,r=n.length;r>i;++i)this.layers[i]=new F(this,n[i],s[i]);this.currentLayer=0,this.loader=new Image,this.loader.addEventListener("load",this._showCurrent.bind(this)),this.ctrlsElem=this.parent.getElementsByClassName("slideshow-controls")[0],t&&this.init(t),this._btn("next"),this._btn("prev"),this._btn("toggle")}function F(e,t,n){this.ss=e,this.elem=t,this.elemStyle=t.style,this.filenameElem=n}function Q(e,t){var s=t.grid.split("x"),r=s[0],o=s[1],a=void 0;this.slideshows=[];for(var l=0;r>l;++l)for(var c=0;o>c;++c)a=i.createElement("div"),a.style.position="absolute",a.style.left=c/o*100+"%",a.style.top=l/r*100+"%",a.style.width=1/o*100+"%",a.style.height=1/r*100+"%",e.appendChild(a),this.slideshows.push(new J(a,n.extend(t,{interval_seconds:Math.round(1e3*(2.5+Math.random()*(2*(t.interval_seconds||ze.interval_seconds)-5)))/1e3})))}t="default"in t?t["default"]:t,n="default"in n?n["default"]:n,s="default"in s?s["default"]:s,i="default"in i?i["default"]:i;var W,X={};X.asyncToGenerator=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function s(i,r){try{var o=t[i](r),a=o.value}catch(l){return void n(l)}return o.done?void e(a):Promise.resolve(a).then(function(e){return s("next",e)},function(e){return s("throw",e)})}return s("next")})}};var K="MDModern",V="0.2.0",Y="GPL-3.0+",Z=Object.create(null),ee=Object.create(null);h.prototype={select:function(){return y(this),this}},f.prototype={select:function(){return w(this),this}},g.prototype={select:function(){return _(this),this},countryCode:function(){return this.code.split(".")[0]},shortCode:function(){return this.code.split("_")[0]},charset:function(){return this.code.split(".")[1]}},m.prototype={push:function(e){var t=this,n=new Promise(function(n,s){return t._items.push({callback:e,resolve:n,reject:s})});return this._start(),n},_start:function(){this._running||(this._running=!0,this._next())},_next:function(){if(!this._items.length)return void(this._running=!1);var e=this._items.shift(),t=this;new Promise(e.callback).then(function(){e.resolve.apply(e,arguments),t._next()},function(){e.reject.apply(e,arguments),t._next()})}};var te=[],ne=[],se=[],ie=Object.create(null),re=Object.create(null),oe=new m,ae=!1,le=function(e){return Object.assign(Object.create(Object.getPrototypeOf(e)),e)};t.mdm_add_user=function(e,t,n,s){var i=new h(e,t,n,s);te.push(i),d("userAdded",i)},t.mdm_add_session=function(e,t){var n=new f(e,t);ne.push(n),d("sessionAdded",n)},t.mdm_add_language=function(e,t){var n=new g(e,t);se.push(n),d("languageAdded",n)},t.mdm_set_current_user=function(e){if(!e&&ie.user)return c("usernamePrompt",function(){return!1}),c("prompt",function(){return!1}),void alert("USER###"+ie.user);var t=b(e)||new h(e);re.user=t.id,d("userSelected",t)},t.mdm_set_current_session=function(e,t){var n=S(t)||new f(e,t);re.session=n.id,d("sessionSelected",n)},t.mdm_set_current_language=function(e,t){var n=C(t)||new g(e,t);re.language=n.id,d("languageSelected",n)},t.mdm_prompt=function(e){ae=!1,d("prompt",e),d("usernamePrompt",e)},t.mdm_noecho=function(e){ae=!0,d("prompt",e),d("passwordPrompt",e)},t.mdm_enable=function(){d("enabled")},t.mdm_disable=function(){d("disabled")},t.mdm_error=function(e){e&&d("error",e)},t.mdm_hide_shutdown=function(){l("shutdownHidden")},t.mdm_hide_restart=function(){l("restartHidden")},t.mdm_hide_suspend=function(){l("suspendHidden")},t.mdm_hide_quit=function(){l("quitHidden")},t.mdm_hide_xdmcp=function(){l("xdmcpHidden")},t.mdm_msg=function(e){e&&l("message",e)},t.mdm_timed=function(e){l("timedMessage",e),l("loginCountdown",+e.match(/[0-9]+/)[0])},t.set_welcome_message=function(e){e&&l("welcomeMessage",e)},t.set_clock=function(e){l("clockUpdate",e)},a("prompt",function(){return l("ready")});var ce=Object.freeze({addEventListener:r,on:r,removeEventListener:o,off:o,once:a,one:a,login:p,sendPassword:v,selectUser:y,selectSession:w,selectLanguage:_,getUser:b,getSession:S,getLanguage:C,shutdown:E,restart:I,suspend:x,quit:P});r("ready",O);var ue=t.setTimeout(function(){console.log("MDM ready timeout"),O()},3e3);["shutdown","restart","suspend","quit"].forEach(function(e){var t=n("#"+e);t.length&&(r(e+"Hidden",function(){t.hide()}),t.find("a").click(ce[e]))});var de=n("#messages");r("error",L);var he=n("#countdown"),fe=n("#countdown-bar"),ge=-1;he.length&&r("loginCountdown",k),fe.length&&r("loginCountdown",M);var me=n(document.body),pe=n("#login"),ve=n("#username",pe),ye=n("#password",pe),we=n("#face",pe)[0],_e=[],be=n("#userlist-toggle",pe),Se=n("#users",pe),Ce=!1,Ee=void 0;r("userAdded",T),r("userSelected",N),a("passwordPrompt",function(){ye.select()}),ve.on("propertychange input paste",function(e){N(e,b(this.value))}),pe.submit(j);var Ie=n("#session"),xe=n("#sessions"),Pe=void 0;r("sessionAdded",D),r("sessionSelected",H);var Oe=n("#language"),Le=n("#languages"),ke=void 0;r("languageAdded",R),r("languageSelected",z);var Me=t.localStorage,je=Object.create(null),Te=/^(\S+)\s*=\s*(.*)$/,Ne=/^\[(\S+)\]$/,$e=/^[^#"]*(:?"[^"]*"[^#"]*)*/,Ae=function(e){return e.split("\n").map(De).filter(He)},De=function(e){return $e.exec(e)[0]},He=function(e){return e},Re='<div class="slideshow-layer"><span class="slideshow-filename"></span></div><div class="slideshow-layer"><span class="slideshow-filename"></span></div><span class="slideshow-controls"><a class="slideshow-prev"><i class="fa fa-chevron-left"></i></a><a class="slideshow-toggle"><i class="fa fa-play"></i></a><a class="slideshow-next"><i class="fa fa-chevron-right"></i></a></span>',ze={interval_seconds:10,fade_seconds:2,shuffle:!0,show_controls:!0,show_filename:!1,grid:null,fill_style:null,background_style:"#222"};J.prototype={init:function(e){return this.cfg=e=n.extend(ze,e),this.sources=e.backgrounds.slice(0),this.currentId=0,this.intervalId&&this.stop(),1===this.sources.length?(this.setImage(this.sources[0]),void(this.ctrlsElem.style.display="none")):(e.shuffle&&this.shuffle(),this.setImage(this.sources[0]).start(),e.show_controls?this.ctrlsElem.style.display=null:this.ctrlsElem.style.display="none",this)},_btn:function(e){var t=this.ctrlsElem.getElementsByClassName("slideshow-"+e);return t.length?(t[0].addEventListener("click",this[e].bind(this)),t[0]):void 0},setImage:function(e){return this.loader.src=e,this},_showCurrent:function(){return this.layers[this.currentLayer].hide(),this.currentLayer=(this.currentLayer+1)%this.layers.length,this.layers[this.currentLayer].show(this.loader),this},next:function(e){return e&&(e.defaultPrevented||e.preventDefault())||(this.currentId=(this.currentId+1)%this.sources.length,this.setImage(this.sources[this.currentId])),this},prev:function(e){return e&&(e.defaultPrevented||e.preventDefault())||(this.currentId=(this.currentId+this.sources.length-1)%this.sources.length,this.setImage(this.sources[this.currentId])),this},start:function(e){return e&&(e.defaultPrevented||e.preventDefault())||this.intervalId||(this.intervalId=t.setInterval(this.next.bind(this),1e3*this.cfg.interval_seconds),this.ctrlsElem.classList.add("slideshow-running")),this},stop:function(e){return e&&(e.defaultPrevented||e.preventDefault())||this.intervalId&&(t.clearInterval(this.intervalId),this.intervalId=!1,this.ctrlsElem.classList.remove("slideshow-running")),this},toggle:function(e){return this.intervalId?this.stop(e):this.start(e)},shuffle:function(){for(var e=this.sources,t=e.length,n=void 0,s=void 0;t--;)s=Math.floor(Math.random()*t),n=e[t],e[t]=e[s],e[s]=n;return this},openCurrent:function(){t.open(this.sources[this.currentId])}},F.prototype={show:function(e){var t=this.ss.cfg.fill_style?this.ss.cfg.fill_style:"50% 50% / "+this._getCssSizing(e)+" no-repeat";return this.elemStyle.background='url("'+e.src+'") '+t+","+this.ss.cfg.background_style,this.elemStyle.transition="z-index 0s "+this.ss.cfg.fade_seconds+"s",this.elemStyle.zIndex=1,this.elemStyle.opacity=1,this.elemStyle.visibility="visible",this.ss.cfg.show_filename&&(this.filenameElem.innerHTML=e.src),this},hide:function(){var e=this.ss.cfg.fade_seconds;return this.elemStyle.transition="opacity "+e+"s,z-index 0s "+e+"s,visibility 0s "+e+"s",this.elemStyle.zIndex=0,this.elemStyle.opacity=0,this.elemStyle.visibility="hidden",this},_getCssSizing:function(e){var t=this.elem.getBoundingClientRect(),n=t.bottom-t.top,s=t.right-t.left,i=e.naturalHeight,r=e.naturalWidth;return.6*n>i&&.6*s>r?"auto":i>=n&&r>=s?"cover":.7*n>i||.7*s>r||Math.abs(n/s-i/r)>.5?"contain":"cover"}},Q.prototype={},Object.getOwnPropertyNames(J.prototype).forEach(function(e){"_"!==e[0]&&(Q.prototype[e]=function(){for(var t=0,n=this.slideshows.length;n>t;++t)this.slideshows[t][e]();return this})}),U("slideshow.conf",!1).then(B)["catch"](function(){s.log("failed to initialize slideshow")}),e.name=K,e.version=V,e.license=Y}(this.MDModern=this.MDModern||{},window,jQuery,console,document);
//# sourceMappingURL=MDModern.js.map