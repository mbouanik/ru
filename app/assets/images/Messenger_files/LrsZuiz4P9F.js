if (self.CavalryLogger) { CavalryLogger.start_js(["EQVO4"]); }

__d("BanzaiOld",["BanzaiAdapter","BanzaiStreamPayloads","CurrentUser","ErrorUtils","ExecutionEnvironment","FBJSON","FBLogger","NavigationMetrics","SetIdleTimeoutAcrossTransitions","TimeSlice","Visibility","WebStorage","emptyFunction","isInIframe","lowerFacebookDomain","onAfterDisplay","pageID","performanceAbsoluteNow","WebStorageMutex"],(function(a,b,c,d,e,f){__p&&__p();var g={adapter:b("BanzaiAdapter")},h=g.adapter,i=b("isInIframe")(),j="bz:",k="ods:banzai",l="send_via_beacon_failure",m=0,n=1,o=2,p,q,r=[],s=null,t=[];function u(a){return a[2]>=b("performanceAbsoluteNow")()-(h.config.EXPIRY||g.EXPIRY)}function v(a,b){a.__meta.status=m,a[3]=(a[3]||0)+1,!a.__meta.retry&&b>=400&&b<600&&r.push(a)}function w(a,c,d,e){a=[a,c,d,0];a.__meta={retry:e===!0,pageID:b("pageID"),userID:b("CurrentUser").getID(),status:m};return a}function x(){__p&&__p();var a=[];t.forEach(function(c){var d=c.cb();d.forEach(function(d){var e=c.route;if(e){e=w(e,d,b("performanceAbsoluteNow")());e.__meta.onSuccess=c.onSuccess;e.__meta.onFailure=c.onFailure;a.push(e)}})});t=[];var c=[],d=[];C(c,d,!0,a);if(c.length>0){c[0].send_method="beacon";c.map(h.prepWadForTransit);c=new Blob([h.addRequestAuthData(h.prepForTransit(c))],{type:"application/x-www-form-urlencoded"});c=navigator.sendBeacon(g.adapter.endpoint,c);c?d.forEach(function(b){return a.__meta&&b.__meta.onSuccess&&b.__meta.onSuccess()}):d.forEach(function(b){return a.__meta&&b.__meta.onFailure&&b.__meta.onFailure()})}}function y(a){__p&&__p();var c=b("performanceAbsoluteNow")()+a;if(!q||c<q){q=c;b("SetIdleTimeoutAcrossTransitions").clear(p);c=function(){p=b("SetIdleTimeoutAcrossTransitions").start(z,a)};c();return!0}return!1}var z=b("TimeSlice").guard(function(){A(null,null)},"Banzai.send",{propagationType:b("TimeSlice").PropagationType.ORPHAN});function A(a,b){__p&&__p();q=null;y(g.BASIC.delay);if(!h.readyToSend()){b&&b();return}h.inform(g.SEND);var c=[],d=[];r=C(c,d,!0,r);if(c.length<=0){h.inform(g.OK);a&&a();return}c[0].trigger=s;s=null;c[0].send_method="ajax";c.map(h.prepWadForTransit);h.send(c,function(){d.forEach(function(a){a.__meta.status=o,a.__meta.callback&&a.__meta.callback()}),a&&a()},function(a){d.forEach(function(b){v(b,a)}),b&&b()})}function B(){__p&&__p();if(!(navigator&&navigator.sendBeacon&&h.isOkToSendViaBeacon()))return!1;var a=[],c=[];r=C(a,c,!1,r);if(a.length<=0)return!1;a[0].send_method="beacon";a.map(h.prepWadForTransit);a=new Blob([h.addRequestAuthData(h.prepForTransit(a))],{type:"application/x-www-form-urlencoded"});a=navigator.sendBeacon(g.adapter.endpoint,a);if(!a){c.forEach(function(a){r.push(a)});r.push(w(k,(a={},a[l]=[1],a),b("performanceAbsoluteNow")()));return!1}return!0}function C(a,b,c,d){__p&&__p();var e={};return d.filter(function(d){__p&&__p();var f=d.__meta;if(f.status>=o||!u(d))return!1;if(f.status>=n)return!0;var g=f.compress!=null?f.compress:!0,h=f.pageID+f.userID+(g?"compress":""),i=e[h];i||(i={user:f.userID,page_id:f.pageID,posts:[],snappy:g},e[h]=i,a.push(i));f.status=n;i.posts.push(d);b.push(d);return c&&f.retry})}var D,E,F=!1;function G(){F||(F=!0,E=b("WebStorage").getLocalStorage());return E}function H(){__p&&__p();D||(!i?D={store:function(){var a=G();if(!a||r.length<=0)return;var c=r.map(function(a){return[a[0],a[1],a[2],a[3]||0,a.__meta]});r=[];a.setItem(j+b("pageID")+"."+b("performanceAbsoluteNow")(),b("FBJSON").stringify(c))},restore:function(){__p&&__p();var a=G();if(!a)return;var c=b("WebStorageMutex");new c("banzai").lock(function(c){__p&&__p();var d=[];for(var f=0;f<a.length;f++){var g=a.key(f);g.indexOf(j)===0&&g.indexOf("bz:__")!==0&&d.push(g)}d.forEach(function(c){__p&&__p();var d=a.getItem(c);a.removeItem(c);if(!d)return;c=b("FBJSON").parse(d,e.id);c.forEach(function(a){if(!a)return;var c=a.__meta=a.pop(),d=u(a);if(!d)return;d=b("CurrentUser").getID();(c.userID===d||d==="0")&&(c.status=m,r.push(a))})});c.unlock()})}}:D={store:b("emptyFunction"),restore:b("emptyFunction")})}g.SEND="Banzai:SEND";g.OK="Banzai:OK";g.ERROR="Banzai:ERROR";g.SHUTDOWN="Banzai:SHUTDOWN";g.VITAL_WAIT=1e3;g.BASIC_WAIT=6e4;g.EXPIRY=30*6e4;g.VITAL={delay:h.config.MIN_WAIT||g.VITAL_WAIT};g.BASIC={delay:h.config.MAX_WAIT||g.BASIC_WAIT};g.isEnabled=function(a){return h.config.gks&&h.config.gks[a]};g.post=function(c,d,e){__p&&__p();c||b("FBLogger")("banzai").mustfix("Banzai.post called without specifying a route");e=e||{};var f=e.retry;if(h.config.disabled)return;if(!b("ExecutionEnvironment").canUseDOM)return;var j=h.config.blacklist;if(j&&(j.indexOf&&(typeof j.indexOf==="function"&&j.indexOf(c)!=-1)))return;if(i&&b("lowerFacebookDomain").isValidDocumentDomain()){var k;try{k=a.top.require("Banzai")}catch(a){k=null}if(k){k.post.apply(k,arguments);return}}var l=w(c,d,b("performanceAbsoluteNow")(),f);e.callback&&(l.__meta.callback=e.callback);e.compress!=null&&(l.__meta.compress=e.compress);var m=e.delay;m==null&&(m=g.BASIC_WAIT);if(e.signal){l.__meta.status=n;var p=[{user:b("CurrentUser").getID(),page_id:b("pageID"),posts:[l],trigger:c}];h.send(p,function(){l.__meta.status=o,l.__meta.callback&&l.__meta.callback()},function(a){v(l,a)},!0);if(!f)return}r.push(l);(y(m)||!s)&&(s=c)};g.registerToSendWithBeacon=function(a,c,d,e){if(!(navigator&&navigator.sendBeacon&&h.isOkToSendViaBeacon()))return!1;if(!a){b("FBLogger")("banzai").mustfix("Banzai.registerToSendWithBeacon called without specifying a route");return!1}t.push({cb:c,route:a,onSuccess:d,onFailure:e});return!0};g.flush=function(a,c){b("SetIdleTimeoutAcrossTransitions").clear(p),p=0,A(a,c)};g.subscribe=h.subscribe;g.canUseNavigatorBeacon=function(){return navigator&&navigator.sendBeacon&&h.isOkToSendViaBeacon()};g._schedule=y;g._store=function(a){H(),b("ErrorUtils").applyWithGuard(D.store,D)};g._restore=function(a){H(),b("ErrorUtils").applyWithGuard(D.restore,D),y(h.config.RESTORE_WAIT||g.VITAL_WAIT)};g._unload=function(){b("BanzaiStreamPayloads").unload(g.post),navigator&&navigator.sendBeacon&&h.isOkToSendViaBeacon()&&x(),h.cleanup(),h.inform(g.SHUTDOWN),r.length>0&&((!g.isEnabled("beacon_hailmary")||!B())&&(H(),b("ErrorUtils").applyWithGuard(D.store,D)))};g._testState=function(){return{postBuffer:r,triggerRoute:s}};(g._initialize=function(){b("ExecutionEnvironment").canUseDOM&&(g.isEnabled("beacon_hailmary")&&b("Visibility").isSupported()?b("Visibility").addListener(b("Visibility").HIDDEN,function(){r.length>0&&(B()||(H(),b("ErrorUtils").applyWithGuard(D.store,D)))}):h.setHooks(g),h.setUnloadHook(g),b("NavigationMetrics").addListener(b("NavigationMetrics").Events.NAVIGATION_DONE,function(a,c){if(c.pageType!=="normal")return;g._restore();b("NavigationMetrics").removeCurrentListener()}))})();e.exports=g}),18);