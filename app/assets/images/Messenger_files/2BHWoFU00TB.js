if (self.CavalryLogger) { CavalryLogger.start_js(["Q9w2e"]); }

__d("P2PPendingPushFailJewelBanner.react",["fbt","P2PJewelBanner.react","P2PLinkConstants","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.getActionText=function(){return g._("Learn More")},this.getBodyText=function(){var a=this.props.transfer;return g._("{currency}{amount} from {sender_name} couldn't be deposited using your debit card.",[g._param("currency",a.currency),g._param("amount",a.amount),g._param("sender_name",a.sender.name)])}.bind(this),b}a.prototype.render=function(){return b("React").createElement(b("P2PJewelBanner.react"),{bodyText:this.getBodyText(),primaryActionConfig:{text:this.getActionText(),uri:b("P2PLinkConstants").helpTransferPushFailURI},titleText:g._("Update Your Card")})};a.propTypes={transfer:c.object.isRequired};e.exports=a}),null);