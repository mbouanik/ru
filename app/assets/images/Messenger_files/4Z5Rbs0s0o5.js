if (self.CavalryLogger) { CavalryLogger.start_js(["Ni3lC"]); }

__d("ClickRefLogger",["Arbiter","Banzai","ClickRefUtils","Cookie","Env","ScriptPath","SessionName","Vector","$","collectDataAttributes","ge","pageID"],(function(a,b,c,d,e,f){__p&&__p();var g={delay:0,retry:!0};function h(a){if(!b("ge")("content"))return[0,0,0,0];b("$")("content");a=b("Vector").getEventPosition(a);return[a.x,a.y,0,0]}function i(c,d,event,e){__p&&__p();var f="r",g=[0,0,0,0],i,j;if(event){i=event.type;i=="click"&&b("ge")("content")&&(g=h(event));var k=0;event.ctrlKey&&(k+=1);event.shiftKey&&(k+=2);event.altKey&&(k+=4);event.metaKey&&(k+=8);k&&(i+=k)}d&&(j=b("ClickRefUtils").get_href(d));k=b("collectDataAttributes")(event?event.target||event.srcElement:d,["ft","gt"]);Object.assign(k.ft,e.ft);Object.assign(k.gt,e.gt);typeof k.ft.ei==="string"&&delete k.ft.ei;e=[c._ue_ts,c._ue_count,j||"-",c._context,i||"-",b("ClickRefUtils").get_intern_ref(d),f,a.URI?a.URI.getRequestURI(!0,!0).getUnqualifiedURI().toString():location.pathname+location.search+location.hash,k].concat(g).concat(b("pageID")).concat(b("ScriptPath").getScriptPath());return e}b("Arbiter").subscribe("ClickRefAction/new",function(a,c){if(b("ClickRefUtils").should_report(c.node,c.mode)){a=i(c.cfa,c.node,c.event,c.extra_data);b("Cookie").set("act",c.cfa.ue);c=[b("SessionName").getName(),Date.now(),"act"];b("Banzai").post("click_ref_logger",Array.prototype.concat(c,a),g)}});function c(a){__p&&__p();function c(a){var b="";for(var c=0;c<a.length;c++)b+=String.fromCharCode(1^a.charCodeAt(c));return b}function d(a,b,c,e){__p&&__p();var f=b[c];if(f&&a&&f in a)if(c+1<b.length)d(a[f],b,c+1,e);else{var g=a[f];b=function(){setTimeout(e.bind(null,arguments));return g.apply(this,arguments)};b.toString=g.toString.bind(g);Object.defineProperty(a,f,{configurable:!1,writable:!0,value:b})}}var e={},f={},g=!1;function h(a,b){if(f[a])return;f[a]=e[a]=1}a=a[c("jiri")];if(a){var i=[];c(a).split(",").map(function(a,f){__p&&__p();var j=a.substring(1).split(":"),k;switch(a.charAt(0)){case"1":i.push(function(a){window[j[0]]&&h(f,j[0])});break;case"2":k=new RegExp(j[0]);d(window,j,2,function(b){b=b[j[1]];typeof b==="string"&&k.test(b)&&h(f,a)});break;case"3":d(window,j,0,function(){for(var a=i.length;a--;)i[a]();a=Object.keys(e);a.length&&(e={},setTimeout(b("Banzai")[c("qnru")].bind(b("Banzai"),c("islg"),{m:""+a}),5e3))});break;case"4":g=!0;break}})}}try{c(b("Env"))}catch(a){}}),null);