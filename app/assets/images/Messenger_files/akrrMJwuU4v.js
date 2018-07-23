if (self.CavalryLogger) { CavalryLogger.start_js(["pfw2K"]); }

__d("MessengerMQTTTypingDataPreProcessor",[],(function(a,b,c,d,e,f){"use strict";a={process:function(a,b){var c=b.thread;a=c==null?{from:b.sender_fbid,st:b.state,to:a,type:"typ"}:{from:b.sender_fbid,st:b.state,thread:c,thread_fbid:c,type:"ttyp"};return{obj:a}}};e.exports=a}),null);