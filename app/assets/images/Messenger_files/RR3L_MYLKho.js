if (self.CavalryLogger) { CavalryLogger.start_js(["1Vjvz"]); }

__d("BanzaiStreamPayloads",[],(function(a,b,c,d,e,f){"use strict";var g={};a={addPayload:function(a,b){g[a]=b},removePayload:function(a){delete g[a]},unload:function(a){Object.keys(g).forEach(function(b){b=g[b];a(b.route,b.payload)})}};e.exports=a}),null);
__d("BanzaiStream",["Promise","Banzai","BanzaiStreamPayloads","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=4294967296,h="banzai_stream_route",i=250*1e3;a={post:function(a,c,d){__p&&__p();var e=JSON.stringify({stream_route:a,payload:c});if(e.length<i){b("Banzai").post(a,c,d);return}var f=Math.floor(Math.random()*g)+"_"+Date.now();b("BanzaiStreamPayloads").addPayload(f,{route:a,payload:c});a=[];var j=Math.ceil(e.length/i);for(var c=0;c<j;c++)a.push(e.substr(c*i,i));b("promiseDone")(a.reduce(function(a,c,e){var g={id:f,index:e,count:j,chunk_data:c};return a.then(function(){return new(b("Promise"))(function(a,c){return b("Banzai").post(h,g,babelHelpers["extends"]({},d||{},{callback:a}))})})},b("Promise").resolve()),function(){b("BanzaiStreamPayloads").removePayload(f)})}};e.exports=a}),null);
__d("ResourceTimingMetricsEnumJS",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({START_TIME:"startTime",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",SECURE_CONNECTION_START:"secureConnectionStart",CONNECT_END:"connectEnd",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd"})}),null);
__d("sourceMetaToString",[],(function(a,b,c,d,e,f){function a(a,b){var c;a.name?(c=a.name,a.module&&(c=a.module+"."+c)):a.module&&(c=a.module+".<anonymous>");b&&a.line&&(c=(c?c:"<anonymous>")+":"+a.line,a.column&&(c+=":"+a.column));return c}e.exports=a}),null);
__d("ImageTimingHelper",["Arbiter","BigPipe","URI"],(function(a,b,c,d,e,f){__p&&__p();var g={},h={};function i(a){__p&&__p();var c=a.lid,d=a.pagelet,e=a.images,f=a.timeslice,i=a.ts,j=g[c];j||(j=g[c]=[]);e.forEach(function(a){try{var c=new(b("URI"))(a);a=c.setFragment("").toString()}catch(a){return}if(h[a])return;h[a]=!0;j.push({pagelet:d,timeslice:f,ts:i,uri:a})})}b("Arbiter").subscribe(b("BigPipe").Events.init,function(a,b){b.lid&&b.lid!=="0"&&b.arbiter.subscribe("images_displayed",function(a,b){i(b)})});b("Arbiter").subscribe("MRenderingScheduler/images_displayed",function(a,b){i(b)});e.exports.getImageTimings=function(a){return g[a]||[]}}),null);
__d("ResourceTimingBootloaderHelper",["Bootloader","ErrorUtils","ImageTimingHelper","ResourceTimingMetricsEnumJS","ResourceTimingsStore","ResourceTypes","URI","forEachObject","isEmpty","performance"],(function(a,b,c,d,e,f){__p&&__p();var g=500,h=[],i={},j={},k={},l=[".mp4",".m4v",".mpd","m4a"],m=new Set(["bootload","js_exec","start_bootload","tag_bootload"]);function n(a){for(var b=0;b<l.length;b++){var c=l[b];if(a.endsWith(c))return!0}return!1}function o(a){__p&&__p();var c=new Map();b("ResourceTimingsStore").getMapFor(a).forEach(function(a){if(a.requestSent!=null){var b=c.get(a.uri);b!=null?b.push(a):c.set(a.uri,[a])}});c.forEach(function(a){return a.sort(function(a,b){return a.requestSent-b.requestSent})});return c}function p(a,b,c,d){__p&&__p();var e=a.get(b);if(e==null){var f=b.indexOf("?");if(f!==-1){b=b.substring(0,f);e=a.get(b)}}if(e!=null)for(var f=0;f<e.length;f++){a=e[f];b=a.requestSent;a=a.responseReceived;if((c==null||b!=null&&b<=c)&&(d==null||a!=null&&a>=d))return e.splice(f,1)[0]}return null}function q(a,c,d,e,f,g,h){__p&&__p();if(!b("performance").timing||!b("performance").getEntriesByType)return null;var i={},l=b("performance").timing.navigationStart;d&&(i=b("ImageTimingHelper").getImageTimings(e).sort(function(a,b){return a.ts-b.ts}).reduce(function(a,b){if(a[b.uri])return a;a[b.uri]=b.pagelet;return a},{}));d=Array.from(b("performance").getEntriesByType("resource"));e=d.filter(function(a){return a.duration>=0&&a.startTime!=null&&a.startTime+l>c&&(f==null||a.responseEnd==null||a.responseEnd+l<f)});e.sort(function(a,b){return a.startTime-b.startTime});d=e.length;var m=0,q=0,u=0,v=0,w=0,x=o(b("ResourceTypes").XHR),y=o(b("ResourceTypes").CSS),z=o(b("ResourceTypes").JS);for(var A=0;A<e.length;A++){var B=e[A],C="",D="",E=void 0,F=B.initiatorType;switch(F){case"css":case"link":case"script":F=b("ResourceTimingsStore").parseMakeHasteURL(B.name);if(!F)continue;var G=F[0];F=F[1];if(F==="css"||F==="js"){var H=F==="css"?y:z;E=p(H,B.name,B.startTime+l,B.responseEnd+l);if(E!=null&&h){D=F;C=E.uid;break}else{D=F;H=k[B.name]||u++;C=H+"_"+G}}else{F=t(B.name);H=F[0];D=F[1];C=q+++"_"+H}break;case"img":C=q+++"_"+r(B.name);D="img";break;case"iframe":C=v+++"_"+r(B.name)+s(B.name);D="iframe";break;case"xmlhttprequest":if(g){G=r(B.name);F=s(B.name);if(n(F)){C=w+++"_"+G+F;D="video";break}else{E=p(x,B.name,B.startTime+l,B.responseEnd+l);if(E!=null){D=b("ResourceTypes").XHR;C=E.uid;break}}}default:continue}H={};G=Object.keys(b("ResourceTimingMetricsEnumJS"));for(var F=0;F<G.length;F++){var I=b("ResourceTimingMetricsEnumJS")[G[F]],J=B[I];J&&(H[I]=J+b("performance").timing.navigationStart)}if(E!=null){I=E;J=I.requestSent;F=I.responseReceived;if(c!=null&&J!=null&&J<c||f!=null&&F!=null&&F>f)continue;H.requestSent=J;H.responseReceived=F}H.type=D;H.desc=C;if(E!=null&&(D===b("ResourceTypes").JS||D===b("ResourceTypes").CSS||D===b("ResourceTypes").XHR)){G=b("ResourceTimingsStore").getAnnotationsFor(D,E.uid);G!=null&&(H.annotations=G)}D=="img"&&Object.prototype.hasOwnProperty.call(i,B.name)&&(H.pagelet=i[B.name]);H.transferSize=B.transferSize;H.encodedBodySize=B.encodedBodySize;a[B.name]==undefined&&(a[B.name]=[]);m++;a[B.name].push(H)}return h?{numValidEntries:d,numSuccessfulMetrics:m}:null}function r(a){a=new(b("URI"))(a).getDomain();return a}function s(a){a=new(b("URI"))(a).getPath();return a}function t(a){return[r(a),"img"]}function u(a){__p&&__p();var b=Object.keys(a).filter(function(a){return a.startsWith("start_bootload/")}).sort(function(b,c){return a[b]-a[c]}).map(function(a){return a.substring(a.indexOf("/")+1)});b.forEach(function(b){return m.forEach(function(c){c=c+"/"+b;a[c]!=null&&(i[c]=a[c])})});h=h.concat(b);if(h.length>g){b=h.splice(0,h.length-g);b.forEach(function(a){return m.forEach(function(b){i[b+"/"+a]&&delete i[b+"/"+a]})})}}a={addPastBootloaderMetricsToResourceTimings:function(c,d){__p&&__p();c===void 0&&(c={});d===void 0&&(d={});var a=b("Bootloader").getURLToHashMap();b("forEachObject")(c,function(b,c){__p&&__p();var e=a[c];if(!e)return;var f=new Map();f.set("bootloader_hash",e);m.forEach(function(a){var b=a+"/"+e;b=d[b]||i[b];b!=null&&f.set(a,b)});f.size>0&&b.forEach(function(a){if(a.requestSent||a.responseReceived)return;f.forEach(function(b,c){return a[c]=b})})})},mergeBootloaderMetricsAndResourceTimings:function(a,c,d){__p&&__p();a===void 0&&(a={});c===void 0&&(c={});d===void 0&&(d=!0);b("isEmpty")(k)&&(k=b("Bootloader").getURLToHashMap());var e=new Map();b("forEachObject")(k,function(a,b){e.set(a,b)});var f=[];b("forEachObject")(c,function(b,c){__p&&__p();var d=c.indexOf("/");if(d===-1)return;var g=c.substring(0,d);if(!m.has(g))return;f.push(c);var h=c.substring(d+1);c=e.get(h);if(!c){c=h;h=k[c];if(!h)return}c.startsWith("data:")&&(c="inlined resource: "+h);a[c]==null&&(a[c]=[{}]);a[c].forEach(function(a){a.bootloader_hash=h,a[g]=b})});d||(u(c),f.forEach(function(a){return delete c[a]}));return a},getLastTTIAndE2EImageResponseEnds:function(a,c,d){__p&&__p();var e={TTI:a,E2E:c};if(!b("performance").timing)return e;var f=d.filter(function(b){return b.ts<=a}).map(function(a){return a.uri}).reduce(function(b,a){b[a]=!0;return b},{}),g=d.map(function(a){return a.uri}).reduce(function(b,a){b[a]=!0;return b},{});for(var h in j)j[h].forEach(function(a){a.type==="img"&&(f[h]&&(e.TTI=Math.max(e.TTI,a.responseEnd)),g[h]&&(e.E2E=Math.max(e.E2E,a.responseEnd)))});return e},getMetrics:function(a,c,d,e,f,g){j={};b("isEmpty")(k)&&(k=b("Bootloader").getURLToHashMap());a=q(j,a,c,d,e,f,g);return{data:j,diagnostics:a}}};e.exports=a}),null);
__d("TimeSliceHelper",["LogBuffer","ProfilingCounters","ProfilingCountersStore","sourceMetaToString"],(function(a,b,c,d,e,f){__p&&__p();var g=function(a,b){return Math.round((a-b)*1e3)},h={counterFunction:function(a){return b("ProfilingCountersStore").getNestedTotals(a)}};function i(a,c,d,e){__p&&__p();c=c.counterFunction;if(d.guard){var f=b("sourceMetaToString")(d),g=d.guard.toString();f=f?g+" at "+f:g}else f=d.desc;g=e!=null?c(e):null;c={begin:d.begin,end:d.end,name:f,id:d.id,counters:g,isEdgeContinuation:d.isEdgeContinuation};d.parentID&&d.parentID!==d.id&&(c.parentID=d.parentID);a.push(c)}function j(a,c,d){c=c.counterFunction;c={begin:d.begin,end:d.end,name:"JS["+d.count+"]",counters:c(b("ProfilingCounters").wrapInSingleContext(d.contextsToBeMerged))};a.push(c)}function k(a,b){var c=b.indirectParentID,d=b.id;b=b.isEdgeContinuation;if(c!=null){var e=a.get(c);b=b;e!=null?e={indirectParentID:e.indirectParentID,isEdgeContinuation:b&&e.isEdgeContinuation}:e={indirectParentID:c,isEdgeContinuation:b};a.set(d,e)}}function l(a,b){var c=b.indirectParentID,d=b.isEdgeContinuation,e=b.id;if(c!=null&&c!==e){e=a.get(c);e!=null&&(c=e.indirectParentID,d=e.isEdgeContinuation&&d);return babelHelpers["extends"]({},b,{parentID:c,isEdgeContinuation:d})}return b}a={formatMetricsForTransport:function(a){__p&&__p();var b=[],c=[],d=[],e=new Map(),f=new Map(),h=0,i=function(a,b,c){var d;b.has(a)?d=b.get(a):(d=c.length,b.set(a,d),c.push(a));return d},j=[];a!=null&&a.forEach(function(a){__p&&__p();var k=a.begin,l=a.end,m=a.name,n=a.id,o=a.counters,p=a.parentID;a=a.isEdgeContinuation;var q=g(k,h);k=g(l,k);h=l;l=i(m,e,b);m=[q,k,l];var r=o||{};q=Object.keys(r).filter(function(a){return r[a]!==0}).sort();if(q.length>0){k=q.join();l=i(k,f,d);o=q.map(function(a){return r[a]});o.unshift(l)}else o=[];n&&m.push(n);p&&(m.push(p),m.push(a));j.push(m);c.push(o)});return{version:"compact",items:j,names:b,counters:c,counterSchemas:d}},getMetrics:function(a,b,c,d,e,f,g){var h=function(a,b){var e=b.end-b.begin<c;b=a&&b.begin-a.end<d&&e;return{shouldMergeIntoCurrentMerge:b,shouldFlushCurrentThenNewMerge:e}};return this.getCustomMergeMetrics(a,b,h,e,f,g)},getCustomMergeMetrics:function(a,c,d,e,f,g){__p&&__p();g==null?g=h:g=babelHelpers["extends"]({},h,g);var m=function(a){a=a.id;return a&&f[a]?f[a]:null},n=[],o=i.bind(undefined,n,g),p=j.bind(undefined,n,g);g=b("LogBuffer").read("time_slice_heartbeat");if(e.length>0){var q=Math.max.apply(null,e.map(function(a){return a.id}));g.forEach(function(a){return a.id+=q})}e=e.concat(g);var r;g=new Map();var s=k.bind(undefined,g),t=l.bind(undefined,g),u=function(){r&&(r.count>1?p(r):o(t(r.first),m(r.first))),r=null};g=e.sort(function(a,b){if(a.begin!==b.begin)return a.begin-b.begin;else if(a.end!==b.end)return a.end-b.end;else return 0}).filter(function(b){return(a==null||b.end>=a)&&(c==null||b.begin<=c)});if(g.length>0&&!g[0].representsExecution&&g[0].begin<a){e=g[0];g[0]=babelHelpers["extends"]({},e,{begin:a})}g.forEach(function(a){__p&&__p();var b=d(r,a),c=b.shouldMergeIntoCurrentMerge;b=b.shouldFlushCurrentThenNewMerge;var e=m(a);if(r&&c)r.end=a.end,r.count++,e&&r.contextsToBeMerged.push(e),r.count===2&&s(r.first),s(a);else if(b){u();c=[];e&&c.push(e);r={begin:a.begin,end:a.end,count:1,first:a,contextsToBeMerged:c}}else b||(u(),o(t(a),e))});u();return n}};e.exports=a}),null);