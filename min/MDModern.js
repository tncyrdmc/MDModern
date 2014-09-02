/*! MDModern by Philipp Miller */
var debug=false;function User(a,b,c){"use strict";this.name=a,this.gecos=b,this.loggedIn=c,this.home="file:///home/"+a}User.prototype.toString=function(){return this.name},function(a,b){"use strict";function c(a,b){debug&&debug.log("EVENT: "+a+(b?"	"+debug.formatString(b):"")),e.triggerHandler(a,b)}var d={},e=a(d),f=[],g=!1;b.mdm=d,d.on=e.on.bind(e),d.one=e.one.bind(e),d.on("userAdded",function(a,b){f.push(b.name)}).one("userSelected",function(){g=!0}),d.login=function(a,b,c){return c&&d.selectSession(c),d.selectUser(a).sendPassword(b)},d.userExists=function(a){return-1!==f.indexOf(a)},d.selectUser=function(a){return"string"!=typeof a&&(a=a.name),d.userExists(a)?(debug&&debug.log("MDM: sending username"),alert("USER###"+a),g=!0):c("error",'User "'+a+"\" doesn't exist!"),d},d.sendPassword=function(a){return g?d.one("passwordPrompt",function(){debug&&debug.log("MDM: sending password"),alert("LOGIN###"+a)}):c("error","No user selected!"),d},d.selectSession=function(a){return debug&&debug.log("MDM: sending session info"),alert("SESSION###"+a.name+"###"+a.file),d},d.shutdown=function(){return debug&&debug.log("MDM: sending force-shutdown request"),alert("FORCE-SHUTDOWN###"),d},d.restart=function(){return debug&&debug.log("MDM: sending force-restart request"),alert("FORCE-RESTART###"),d},d.suspend=function(){return debug&&debug.log("MDM: sending force-suspend request"),alert("FORCE-SUSPEND###"),d},d.quit=function(){return debug&&debug.log("MDM: sending quit request"),alert("QUIT###"),d},b.mdm_enable=function(){c("enabled")},b.mdm_disable=function(){c("disabled")},b.mdm_prompt=function(){c("usernamePrompt")},b.mdm_noecho=function(){c("passwordPrompt")},b.mdm_add_user=function(a,b,d){c("userAdded",new User(a,b,!!d))},b.mdm_add_session=function(a,b){c("sessionAdded",{name:a,file:b})},b.mdm_add_language=function(a,b){c("languageAdded",{name:a,code:b})},b.mdm_set_current_user=function(a){c("userSelected",a)},b.mdm_set_current_session=function(a,b){c("sessionSelected",{name:a,file:b})},b.mdm_set_current_language=function(a,b){c("languageSelected",{name:a,code:b})},b.mdm_error=function(a){c("error",a)},b.mdm_msg=function(a){c("message",a)},b.mdm_timed=function(a){c("timedMessage",a),c("loginCountdown",+a.match(/[0-9]+/)[0])},b.set_welcome_message=function(a){c("welcomeMessage",a)},b.set_clock=function(a){c("clockUpdate",a)},b.mdm_hide_shutdown=function(){c("shutdownHidden")},b.mdm_hide_restart=function(){c("restartHidden")},b.mdm_hide_suspend=function(){c("suspendHidden")},b.mdm_hide_quit=function(){c("quitHidden")},b.mdm_hide_xdmcp=function(){c("xdmcpHidden")}}(jQuery,window),function(a){"use strict";function b(a){if("function"==typeof a)return a;switch(a){case"lines":return c;case"properties":return d;case"json":if(JSON)return JSON.parse;break;case"plain":return function(a){return a}}throw new Error('Config: Unknown parser "'+a+"'")}function c(a){return _(a.split("\n").map(e)).without("")}function d(a){var b,c,d={};return a.split("\n").map(e).forEach(function(a,e){if(""!==a)if(c=a.match(/^(\S+)\s*=\s*(.*)$/))d[c[1]]=JSON?JSON.parse(c[2]):c[2];else if(c=a.match(/^\[(\S+)\]$/))b=c[1],d.hasOwnProperty(b)||(d[b]=[]);else{if(!b)throw new Error("Config: Syntax error on line "+(e+1));d[b].push(a)}}),d}function e(a){var b=a.indexOf("#");return(b>=0?a.slice(0,b):a).trim()}var f={},g={};window.config=f,f.require=function(c,d,e){if(e||(e=d,d="properties"),g.hasOwnProperty(c)){var h;return"string"==typeof d?(h=g[c][d])||(h=g[c][d]=b(d)(g[c].plain)):h=d(g[c].plain),e&&e(h),f}return a.ajax({url:c,type:"GET",dataType:"text",mimeType:"text/plain"}).done(function(a){if(debug&&debug.log("LOADED: "+c),g[c]={plain:a},e&&"plain"===d)e(a);else{var f=b(d)(a);"string"==typeof d&&(g[c][d]=f),e&&e(f)}}),f}}(jQuery),function(a){"use strict";function b(a){a.preventDefault(),mdm.login(r.val(),s.val(),n)}function c(b,c){var d=a(document.createElement("li")),e=a(document.createElement("a")),h=a(document.createElement("i")),i=new Image;u.append(d.append(e.append(h.addClass("fa fa-user")).append(c.name))),c.loggedIn&&d.addClass("loggedIn"),e.click(function(a){f(a,c)}),i.loaded=!1,i.src=c.home+"/.face",a(i).one("load",function(){h.remove(),e.prepend(i),i.loaded=!0}),c.li=d,c.img=i,v.push(c),1===v.length&&q.one("click",g)}function d(a){for(var b=0,c=v.length;c>b;++b)if(v[b].name===a)return v[b];return{name:a}}function e(a,b){f(a,d(b))}function f(a,b){m=b,r.is(a.target)||r.val(b.name),v.forEach(function(a){a.name==b.name?a.li.addClass("selected"):a.li.removeClass("selected")}),h(b)}function g(a){u.expanded?(o.off("click",g),q.one("click",g)):(o.click(g),a.stopPropagation()),u.toggleClass("expanded"),u.expanded=!u.expanded}function h(b){p.removeClass("hasface"),mdm.userExists(b.name)&&(b.img.loaded?(t.attr("src",b.img.src),p.addClass("hasface")):a(b.img).one("load",function(){b==m&&t.attr("src",b.img.src),p.addClass("hasface")}))}function i(b,c){var d=a(document.createElement("a")).html(c.name);c.li=a(document.createElement("li")).append(d),x.append(c.li),y.push(c),d.click(function(){j(null,c)}),n||j(null,c)}function j(a,b){n=b,w.html(b.name),y.forEach(function(a){a.name===b.name?a.li.addClass("selected"):a.li.removeClass("selected")})}function k(a,b){z.text(b)}function l(a,b){b&&("error"==a.namespace?A.addClass("error"):A.removeClass("error"),A.html(b).fadeIn())}var m,n,o=a(document.body),p=a("#loginbox"),q=a("#userlist-toggle",p),r=a("#username",p),s=a("#password",p),t=a("#face",p),u=a("#users",p),v=[],w=a("#session"),x=a("#sessions"),y=[],z=a("#countdown"),A=a("#msg");debug&&debug.logElem(a("#log"),!0).log('Theme init on "'+navigator.userAgent+'"'),mdm.on("userAdded",c).on("userSelected",e).on("sessionAdded",i).on("sessionSelected",j).on("usernamePrompt",function(){r.select()}).on("passwordPrompt",function(){s.select()}).on("shutdownHidden",function(){a("#shutdown").hide()}).on("restartHidden",function(){a("#restart").hide()}).on("suspendHidden",function(){a("#suspend").hide()}).on("quitHidden",function(){a("#quit").hide()}).on("loginCountdown",k).on("error",l),r.on("propertychange input paste",function(b){e(b,a(this).val())}),a("form",p).submit(b),a("#shutdown a").click(mdm.shutdown),a("#restart a").click(mdm.restart),a("#suspend a").click(mdm.suspend),a("#quit a").click(mdm.quit),A.click(function(){a(this).fadeOut()})}(jQuery),function(a){"use strict";function b(b){return e=a.extend(j,b),f=e.backgrounds,debug&&debug.log("Starting slideshow with "+f.length+" images"),1==f.length?(c(0),void a("#slideshowControls").hide()):(e.shuffle&&i.shuffle(),e.show_filename&&(k[0].filenameElem=a(".filename",k[0]),k[1].filenameElem=a(".filename",k[1])),c(0),i.start(),void(e.show_controlls?(a("#cycleBg").click(i.next),a("#cycleBgBack").click(i.prev),a("#shuffleSlideshow").click(i.shuffle),a("#cycleToggle").click(function(){h===!1?(i.start(),a(this).children().removeClass("fa-play").addClass("fa-pause")):(i.stop(),a(this).children().removeClass("fa-pause").addClass("fa-play"))})):a("#slideshowControls").hide()))}function c(a){g=a,m.src=f[g]}function d(){l=+!l,k[l].hide().css({"z-index":1,"background-image":'url("'+f[g]+'")'}),k[+!l].css({"z-index":0}),k[l].fadeIn(1e3*e.fade_seconds),e.show_filename&&k[l].filenameElem.text(f[g]),debug&&debug.log(f[g])}var e,f,g,h,i={},j={interval_seconds:10,fade_seconds:2,shuffle:!0,show_controlls:!0,show_filename:!0},k=[a("#bg0"),a("#bg1")],l=0,m=new Image;window.slideshow=i,a(m).on("load",d),config.require("slideshow.conf",b),i.next=function(){return c((g+1)%f.length),i},i.prev=function(){return c((g+f.length-1)%f.length),i},i.start=function(){return h=window.setInterval(i.next,1e3*e.interval_seconds),i},i.stop=function(){return window.clearInterval(h),h=!1,i},i.shuffle=function(){return f=_.shuffle(f),i}}(jQuery),function(a){"use strict";function b(a){debug&&debug.log(debug.formatString(a)),d.map(function(b){a.hasOwnProperty(b.key)&&b.elems.html(b.val=a[b.key])})}function c(a){var b={};return a.split("\n").forEach(function(a){if(a){var c=a.split("=");b[c[0]]=c[1].replace(/"/g,"")}}),b}var d=[{key:"DISTRIB_ID"},{key:"DISTRIB_RELEASE"},{key:"DISTRIB_CODENAME"},{key:"DISTRIB_DESCRIPTION"}];d.map(function(b){b.elems=a(".lsb_"+b.key.toLowerCase())});var e,f;for(e=0,f=d.length;f>e;e++)if(d[e].elems.length){config.require("file:///etc/lsb-release",c,b);break}}(jQuery);