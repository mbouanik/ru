if (self.CavalryLogger) { CavalryLogger.start_js(["ghim6"]); }

__d("MessengerMQTTPayloadPreprocessor",[],(function(a,b,c,d,e,f){"use strict";a={process:function(a,b,c){var d=parseInt(c.irisSeqId.toString(),10);return{seqID:d,obj:{queue:a,iseq:d,delta:c,seqID:d,type:b}}}};e.exports=a}),null);