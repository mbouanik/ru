if (self.CavalryLogger) { CavalryLogger.start_js(["cDE6z"]); }

__d("MessengerBanner.react",["MessengerNotificationBanner.react","MessengerPromotionDataDispatcher","MessengerPromotionDataStore","MessengerRefreshPrompt","React","SubscriptionsHandler","WorkplaceChatUpsellBanner.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").PureComponent);g=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.state={promotionData:b("MessengerPromotionDataStore").getPromotionData()},this.subscriptions=new(b("SubscriptionsHandler"))(),c}a.prototype.componentDidMount=function(){b("MessengerRefreshPrompt")(),b("MessengerPromotionDataDispatcher").explicitlyRegisterStores([b("MessengerPromotionDataStore")]),this.subscriptions.addSubscriptions(b("MessengerPromotionDataStore").addListener(function(){this.setState({promotionData:b("MessengerPromotionDataStore").getPromotionData()})}.bind(this)))};a.prototype.componentWillUnmount=function(){this.subscriptions.release()};a.prototype.render=function(){var a=this.state.promotionData;if(this.props.showWorkchatUpsellBanner)return b("React").createElement(b("WorkplaceChatUpsellBanner.react"),null);return a?b("React").createElement(b("MessengerNotificationBanner.react"),{promotionID:a.promotionID,promotionContent:a.promotionContent,primaryActionTitle:a.primaryActionTitle,primaryActionType:a.primaryActionType,primaryActionURI:a.primaryActionURI,primaryActionCallback:a.primaryActionCallback,instanceLogData:a.instanceLogData}):null};a.propTypes={showWorkchatUpsellBanner:c.bool,isFirstRedirect:c.bool};e.exports=a}),null);