if (self.CavalryLogger) { CavalryLogger.start_js(["7vw8h"]); }

__d("UnicodeCJK",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();f="a-zA-Z";var g="\uff21-\uff3a\uff41-\uff5a",h=f+g;f="\u3040-\u309f";g="\u30a0-\u30ff";var i="\u31f0-\u31ff",j="\uff65-\uff9f";g=g+i+j;var k=f+g,l=[12352,12447];i=[12448,12543];var m=i[0]-l[0];j="\u4e00-\u9fcf";f="\u3400-\u4dbf";var n=j+f;g="\uac00-\ud7af";var o=n+k+g,p=null,q=null,r=null,s=null;function t(a){q=q||new RegExp("["+k+"]");return q.test(a)}function a(a){p=p||new RegExp("["+n+"]");return p.test(a)}function b(a){r=r||new RegExp("["+o+"]");return r.test(a)}function u(a){a=a.charCodeAt(0);return String.fromCharCode(a<l[0]||a>l[1]?a:a+m)}function c(a){return!t(a)?a:a.split("").map(u).join("")}function v(a){s=s||new RegExp("^["+k+"]+["+h+"]$");return s.test(a)}function d(a){return v(a)?a.substr(0,a.length-1):a}i={hasKana:t,hasIdeograph:a,hasIdeoOrSyll:b,hiraganaToKatakana:c,isKanaWithTrailingLatin:v,kanaRemoveTrailingLatin:d};e.exports=i}),null);