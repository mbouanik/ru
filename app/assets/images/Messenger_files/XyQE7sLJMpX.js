if (self.CavalryLogger) { CavalryLogger.start_js(["Fj4oq"]); }

__d("MessengerPromotionDataStore",["FluxStore","MessengerPromotionDataDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("FluxStore"));g=c&&c.prototype;function a(){g.constructor.call(this,b("MessengerPromotionDataDispatcher")),this.$MessengerPromotionDataStore1=null}a.prototype.getPromotionData=function(){return this.$MessengerPromotionDataStore1};a.prototype.__onDispatch=function(a){switch(a.type){case"SET_PROMOTION_DATA":this.$MessengerPromotionDataStore1!==a.promotionData&&(this.$MessengerPromotionDataStore1=a.promotionData,this.__emitChange());break}};a.__moduleID=e.id;e.exports=new a()}),null);