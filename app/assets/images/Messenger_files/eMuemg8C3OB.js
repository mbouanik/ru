if (self.CavalryLogger) { CavalryLogger.start_js(["LWBkr"]); }

__d("PageNotifInlineLikeButton.react",["fbt","AsyncRequest","FanFBPageActionOrigin","FDSButton.react","PageFanning","PageFanningInviteInlineNotif.react","React","ReactDOM","XPagesPageInviteInlineActionAsyncController"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").PureComponent);h=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={liked:!1,rendered:!1,declined:!1},this.$1=function(a){a.preventDefault(),this.state.liked||(this.setState({liked:!0}),b("PageFanning").setFanStatus(b("ReactDOM").findDOMNode(this),this.props.pageID,!0,!1,this.$2,this.$3,{fan_origin:b("FanFBPageActionOrigin").PAGE_INVITE_NOTIF_INLINE_ACCEPT}))}.bind(this),this.$4=function(a){a.preventDefault(),this.state.liked||(this.setState({declined:!0}),b("PageFanningInviteInlineNotif.react").setFanStatus(this.props.pageID,!1,this.$5,this.$6,{fan_origin:this.props.origin,fan_source:this.props.origin}))}.bind(this),this.$2=function(){this.setState({liked:!0})}.bind(this),this.$3=function(){this.setState({liked:!1})}.bind(this),this.$5=function(){this.setState({declined:!0})}.bind(this),this.$6=function(){this.setState({declined:!1})}.bind(this),c}a.prototype.$7=function(){var a=b("XPagesPageInviteInlineActionAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(a).setMethod("POST").setData({page_id:this.props.pageID}).setHandler(function(a){this.setState({rendered:a.payload.see_inline_actions,liked:a.payload.invite_status==="LIKED",declined:a.payload.invite_status==="DECLINED"})}.bind(this)).setErrorHandler(function(a){this.setState({rendered:!1})}.bind(this)).send()};a.prototype.render=function(){!this.state.liked&&!this.state.declined&&this.$7();if(!this.state.rendered)return null;var a=this.state.liked?g._("Liked"):g._("Like Page"),c=this.state.declined?g._("Declined"):g._("Decline");return b("React").createElement("div",null,b("React").createElement(b("FDSButton.react"),{isDisabled:this.state.liked||this.state.declined,label:a,labelIsHidden:this.state.declined,onClick:this.$1,size:"small",use:"flat"})," ",b("React").createElement(b("FDSButton.react"),{isDisabled:this.state.liked||this.state.declined,label:c,labelIsHidden:this.state.liked,onClick:this.$4,size:"small",use:"flat"}))};e.exports=a}),null);