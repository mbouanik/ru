if (self.CavalryLogger) { CavalryLogger.start_js(["PBbHr"]); }

__d("P2PPendingRecipientVerificationJewelBanner.react",["fbt","P2PJewelBanner.react","P2PTransferParam","P2PVerificationFlowHelper","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.handleClick=function(){b("P2PVerificationFlowHelper").startVerificationFlow(this.props.transfer[b("P2PTransferParam").TRANSFER_ID],!1)}.bind(this),c}a.prototype.render=function(){return b("React").createElement(b("P2PJewelBanner.react"),{bodyText:g._("To accept the money {sender_name} sent you, please confirm your information.",[g._param("sender_name",this.props.transfer.sender.name)]),primaryActionConfig:{onClick:this.handleClick,text:g._("Confirm Info")},titleText:g._("Please Confirm Your Info")})};a.propTypes={transfer:c.object.isRequired};e.exports=a}),null);