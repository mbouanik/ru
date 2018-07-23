if (self.CavalryLogger) { CavalryLogger.start_js(["qIFIc"]); }

__d("ChatproxyPresence",["Arbiter","AvailableListConstants","AvailableListInitialData","BanzaiODS","ChannelConstants","LastActiveTimes","PresenceStatus","debounceAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this.$1=a,this.$2=!1,this.$3=b("AvailableListInitialData").chatNotif,this.$4=!1}a.prototype.subscribe=function(){"use strict";__p&&__p();b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("chatproxy-presence"),this.updatePresenceInfo.bind(this)),b("Arbiter").subscribe(b("ChannelConstants").ON_INVALID_HISTORY,function(){this.$2=!0}.bind(this)),b("Arbiter").subscribe(b("ChannelConstants").RTI_SESSION,function(a,b){b&&(this.$4=b)}.bind(this)),b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("get_debug_presence"),function(a,c){a=b("PresenceStatus").getAllDebugInfo();c=b("LastActiveTimes").getDebugData();for(var d in c){var e=a[d];e===undefined&&(e={},a[d]=e);e.l=Math.floor(c[d])}this.$4.issueRequest("/debug_presence",{},a,function(){b("BanzaiODS").bumpEntityKey("ChatproxyPresence","debug_presence.sucess")})}.bind(this))};a.prototype.getRTISession=function(){"use strict";return this.$4};a.prototype.updatePresenceInfo=function(a,c){"use strict";__p&&__p();this.$2&&(this.$2=!1,b("PresenceStatus").resetPresenceData());c=c.obj;a=c.buddyList;b("PresenceStatus").setMultiChatproxy(a);a=!1;c.chatNotif!==undefined&&(a=this.$3!==c.chatNotif);a&&(this.$3=c.chatNotif);c.gamers&&b("PresenceStatus").setPlayingCanvasGameFriends(c.gamers);a&&this.$1(b("AvailableListConstants").ON_CHAT_NOTIFICATION_CHANGED,this.$3);b("debounceAcrossTransitions")(function(){this.$1(b("AvailableListConstants").ON_AVAILABILITY_CHANGED)}.bind(this),0)()};a.prototype.getWebChatNotification=function(){"use strict";return this.$3};e.exports=a}),null);
__d("AvailableList",["Arbiter","ArbiterMixin","AsyncRequest","AvailableListConstants","BanzaiODS","Bootloader","ChannelConstants","ChatConfig","ChatDispatcher","ChatproxyPresence","ChatReliabilityInstrumentation","ChatVisibility","CurrentUser","FBIDCheck","FBLogger","JSLogger","LastActiveTimes","PresencePrivacy","PresenceStatus","PresenceStatusActionTypes","Run","ServerTime","TypingStates","debounceAcrossTransitions","emptyFunction","requireWeak"],(function(a,b,c,d,e,f){"use strict";__p&&__p();b("BanzaiODS").setEntitySample("presence",1e-4);var g=babelHelpers["extends"]({},b("AvailableListConstants"),b("ArbiterMixin")),h=/\D/;g.subscribe([b("AvailableListConstants").ON_AVAILABILITY_CHANGED,b("AvailableListConstants").ON_UPDATE_ERROR],function(a,c){b("Arbiter").inform(a,c)});b("PresenceStatus").subscribe("change",b("debounceAcrossTransitions")(function(){g.inform(b("AvailableListConstants").ON_AVAILABILITY_CHANGED)},0));var i=b("debounceAcrossTransitions")(function(){g.inform(b("AvailableListConstants").ON_AVAILABILITY_CHANGED),b("ChatDispatcher").dispatch({type:b("PresenceStatusActionTypes").AVAILABILITY_CHANGED})},0);function j(a,c,d,e,f){if(a===b("CurrentUser").getID())return;c=b("PresenceStatus").set(a,c,d,e,f);if(c){d=b("debounceAcrossTransitions")(function(){g.inform(b("AvailableListConstants").ON_AVAILABILITY_CHANGED,a),b("ChatDispatcher").dispatch({type:b("PresenceStatusActionTypes").AVAILABILITY_CHANGED,id:a})},0);d()}}function k(a){a=a.payload.availability||{};for(var b in a)j(b&&b.toString(),a[b].a,!0,"mercury_tabs",a[b].c)}function l(a){if(!a||a==="0"||h.test(a)){b("ChatReliabilityInstrumentation").logERROR("bad id for available list: "+a);return}new(b("AsyncRequest"))("/ajax/mercury/tabs_presence.php").setData({target_id:a}).setHandler(k).setErrorHandler(b("emptyFunction")).setAllowCrossPageTransition(!0).send()}function a(a,c){c.chat_config=b("ChatConfig").getDebugInfo(),c.available_list_debug_info={count:b("PresenceStatus").getOnlineIDs().length}}var m=undefined;try{m=new(b("ChatproxyPresence"))(function(event){g.inform(event)}),m.subscribe()}catch(a){b("FBLogger")("chat").catching(a).mustfix("Failed to subscribe to chat proxy presence"),b("ChatReliabilityInstrumentation").logERROR(a.getMessage())}Object.assign(g,{getChatproxyPresenceObject:function(){return m},get:function(a){return b("PresenceStatus").get(a)},updateForID:function(a){if(b("ChatConfig").get("presence_page_green_dot_sub")&&!b("FBIDCheck").isUser_deprecated(a))return;l(a);b("PresencePrivacy").getVisibility()==b("PresencePrivacy").ONLINE&&b("Run").onAfterLoad(function(){return b("Bootloader").loadModules(["ChannelManager","ChannelTransport"],function(b,c){b.startChannelManager(),c.sendAdditionalBuddyRequest(b.getCompleteConfig(),a)},"AvailableList")})},getWebChatNotification:function(){return m&&m.getWebChatNotification()},isReady:function(){return!!m},set:function(a,b,c,d){j(a,b,!0,c,d)}});b("Arbiter").subscribe(b("JSLogger").DUMP_EVENT,a);b("PresencePrivacy").subscribe(["privacy-changed","privacy-availability-changed","privacy-user-presence-response"],i);b("requireWeak")("ChannelConnection",function(a){return a.subscribe([a.CONNECTED,a.RECONNECTING,a.SHUTDOWN,a.MUTE_WARNING,a.UNMUTE_WARNING],i)});b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("buddylist_overlay"),function(a,c){a={};c=c.obj.overlay;for(var d in c)g.set(d,c[d].a,c[d].s||"channel",c[d].vc),c[d].la&&(a[d]=c[d].la);b("LastActiveTimes").update(a)});b("Arbiter").subscribe([b("ChannelConstants").getArbiterType("typ"),b("ChannelConstants").getArbiterType("ttyp")],function(a,c){__p&&__p();a=c.obj;if(a.st===b("TypingStates").TYPING){c=a.from;if(b("ChatVisibility").isOnline()){b("BanzaiODS").bumpEntityKey("presence","stale_presence_check_typing");a=b("PresenceStatus").get(c);if(a!=b("AvailableListConstants").ACTIVE){a=b("LastActiveTimes").get(c)*1e3;var d=b("ServerTime").get();if(!a)b("BanzaiODS").bumpEntityKey("presence","no_detailed_presence_typing");else if(d-a>5*60*1e3){var e="stale_presence_typing";d=d-a;d<10*60*1e3?e+="600":d<60*60*1e3&&(e+="3600");b("BanzaiODS").bumpEntityKey("presence",e)}}}g.set(c&&c.toString(),b("AvailableListConstants").ACTIVE,"channel-typing")}});b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("messaging"),function(a,c){__p&&__p();if(!b("ChatVisibility").isOnline())return;a=c.obj;if(a.message&&a.message.timestamp&&a.message.sender_fbid){c=b("ServerTime").get();var d=a.message.timestamp;if(c-d<2*60*1e3){b("BanzaiODS").bumpEntityKey("presence","stale_presence_check");c=a.message.sender_fbid;a=b("PresenceStatus").get(c);if(a==b("AvailableListConstants").ACTIVE)return;a=b("LastActiveTimes").get(c)*1e3;if(!a)b("BanzaiODS").bumpEntityKey("presence","no_detailed_presence");else if(d-a>5*60*1e3){c="stale_presence";d=d-a;d<10*60*1e3?c+="600":d<60*60*1e3&&(c+="3600");b("BanzaiODS").bumpEntityKey("presence",c)}}}});e.exports=g}),null);
__d("ChatNotificationConstants",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NORMAL:0,NO_USER_MESSAGE_NOTIFICATION:1})}),null);
__d("ChatBehavior",["Arbiter","ArbiterMixin","AvailableList","AvailableListConstants","ChatNotificationConstants","mixin"],(function(a,b,c,d,e,f){__p&&__p();var g;c=!1;var h=b("AvailableList").getWebChatNotification&&b("AvailableList").getWebChatNotification(),i=c,j=!0;d=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));g=d&&d.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.ON_CHANGED="changed",b}a.prototype.notifiesUserMessages=function(){"use strict";return h!==b("ChatNotificationConstants").NO_USER_MESSAGE_NOTIFICATION};a.prototype.ignoresRemoteTabRaise=function(){"use strict";return i};a.prototype.showsTabUnreadUI=function(){"use strict";return j};var k=new a();function l(){k.inform(k.ON_CHANGED)}b("AvailableList").subscribe&&b("AvailableList").subscribe(b("AvailableListConstants").ON_CHAT_NOTIFICATION_CHANGED,function(){var a=h,c=b("AvailableList").getWebChatNotification();h=c;a!=c&&l()});b("Arbiter").subscribe("chat/set_does_page_occlude_tabs",function(a,b){i=!!b,l()});b("Arbiter").subscribe("chat/set_show_tab_unread_ui",function(a,b){j=!!b,l()});e.exports=k}),null);
__d("ChatSidebarSheetChatOffline.react",["fbt","Link.react","React","gkx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").PureComponent);h&&h.prototype;a.prototype.render=function(){var a=b("gkx")("AT78v4PambQ_cdAE80SQ2u-PEF080LOtbyF0clYPG1BZ0oKWtBk3yYmPrq0iSUUgoNhwXsFBRIZTASSteonhNi4R")?g._("Turn on Active Status"):g._("Turn on chat");return b("React").createElement("div",null,g._("{=Go online} to see who's available.",[g._param("=Go online",b("React").createElement(b("Link.react"),{className:"fbChatGoOnlineLink",onClick:this.props.onGoOnlineClick},a))]))};function a(){h.apply(this,arguments)}a.propTypes={onGoOnlineClick:c.func.isRequired};e.exports=a}),null);
__d("ChatSidebarSheetChatReconnectMsg.react",["fbt","ChannelConstants","Link.react","MessengerSpinner.react","Network","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").PureComponent);h&&h.prototype;a.prototype.render=function(){__p&&__p();var a=this.props,c=a.isMessenger;a=a.msecs;var d=b("React").createElement(b("Link.react"),{className:"fbChatReconnectLink",onClick:this.props.onManuallyConnectClick},g._("No Internet Connection"));if(a==null||!b("Network").isOnline())return c?d:b("React").createElement("div",null,g._("Unable to connect to chat. Check your Internet connection."));else if(a>b("ChannelConstants").WARNING_COUNTDOWN_THRESHOLD_MSEC)return c?d:b("React").createElement("div",null,g._("Unable to connect to chat. {try-again-link}",[g._param("try-again-link",b("React").createElement(b("Link.react"),{className:"fbChatReconnectLink",onClick:this.props.onManuallyConnectClick},g._("Try again")))]));else if(a>1e3)return c?d:b("React").createElement("div",null,g._("Unable to connect to chat. Reconnecting in {seconds}",[g._param("seconds",Math.floor(a/1e3))]));else return c?b("React").createElement("div",null,b("React").createElement(b("MessengerSpinner.react"),{color:"grey"}),g._("Connecting...")):b("React").createElement("div",null,g._("Unable to connect to chat. Reconnecting..."))};function a(){h.apply(this,arguments)}a.propTypes={isMessenger:c.bool,msecs:c.number,onManuallyConnectClick:c.func};e.exports=a}),null);
__d("ChatSidebarSheetChatShutdownMsg.react",["fbt","ChannelConstants","CurrentUser","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").PureComponent);h&&h.prototype;a.prototype.render=function(){__p&&__p();var a=this.props,c=a.hint;a=a.isMessenger;switch(c){case b("ChannelConstants").HINT_AUTH:return b("React").createElement("div",null,g._("Your session has timed out. Please log in."));case b("ChannelConstants").HINT_MAINT:return a?b("React").createElement("div",null,g._("Messenger is currently down for maintenance.")):b("React").createElement("div",null,g._("{Chat} is currently down for maintenance.",[g._param("Chat",g._("Chat"))]));case b("ChannelConstants").HINT_CONN:default:if(!a)return b("React").createElement("div",null,g._("{Chat} is currently unavailable.",[g._param("Chat",g._("Chat"))]));else if(b("CurrentUser").isWorkUser())return b("React").createElement("div",null,g._("Workplace Chat is currently unavailable."));else return b("React").createElement("div",null,g._("Messenger is currently unavailable."))}};function a(){h.apply(this,arguments)}a.propTypes={hint:c.string,isMessenger:c.bool};e.exports=a}),null);
__d("ChatSidebarSheet.react",["fbt","Arbiter","Bootloader","ChannelConnection","ChatBehavior","ChatSidebarSheetChatOffline.react","ChatSidebarSheetChatReconnectMsg.react","ChatSidebarSheetChatShutdownMsg.react","ChatVisibility","LogHistory","MercurySyncConstants","MercurySyncEventsProxy","MessengerEnvironment","MessengerMQTTGating","PresencePrivacy","React","SubscriptionsHandler","clearTimeout","gkx","joinClasses","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("LogHistory").getInstance("sidebar_sheet");c=babelHelpers.inherits(a,b("React").PureComponent);h=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$3=b("MercurySyncEventsProxy").getForFBID(this.props.viewer),this.state={connectionStatus:null,channelData:null,isConnected:!b("ChannelConnection").disconnected(),isOnline:b("ChatVisibility").isOnline(),notifiesUserMessages:b("ChatBehavior").notifiesUserMessages(),syncStateInvalid:!1,syncStateReconnecting:!1},this.$5=function(a,c){var d=b("ChannelConnection").CONNECTED;switch(a){case this.$3.getArbiterType(b("MercurySyncEventsProxy").Events.SHUTDOWN):d=b("ChannelConnection").SHUTDOWN;break;case this.$3.getArbiterType(b("MercurySyncEventsProxy").Events.RECONNECTING):d=b("ChannelConnection").RECONNECTING;break}this.setState({connectionStatus:d,channelData:c});this.$6()}.bind(this),this.$6=function(){this.setState({isConnected:!b("ChannelConnection").disconnected(),isOnline:b("ChatVisibility").isOnline(),notifiesUserMessages:b("ChatBehavior").notifiesUserMessages()})}.bind(this),c}a.prototype.$4=function(){this.$1=new(b("SubscriptionsHandler"))(),this.$1.addSubscriptions(b("Arbiter").subscribe([this.$3.getArbiterType(b("MercurySyncEventsProxy").Events.CONNECTED),this.$3.getArbiterType(b("MercurySyncEventsProxy").Events.SHUTDOWN),this.$3.getArbiterType(b("MercurySyncEventsProxy").Events.RECONNECTING)],this.$5),b("ChannelConnection").subscribe([b("ChannelConnection").MUTE_WARNING,b("ChannelConnection").UNMUTE_WARNING],this.$6),b("PresencePrivacy").subscribe("privacy-user-presence-changed",this.$6),b("ChatBehavior").subscribe(b("ChatBehavior").ON_CHANGED,this.$6),b("Arbiter").subscribe(b("MercurySyncConstants").ARBITER_EVENT_INVALID_STATE,function(){i.log("invalid state fatal","{}"),this.setState({syncStateInvalid:!0,syncStateReconnecting:!1})}.bind(this)),b("Arbiter").subscribe(b("MercurySyncConstants").ARBITER_EVENT_INVALID_STATE_RETRY,function(){i.log("retry from invalid state","{}"),this.$7()}.bind(this)),b("Arbiter").subscribe(b("MercurySyncConstants").ARBITER_EVENT_INVALID_STATE_RECOVER,function(){i.log("recover from invalid state","{}"),this.$8()}.bind(this)),b("Arbiter").subscribe("messenger-mqtt-drop-down-to-channel",function(){this.$1.release(),this.$4()}.bind(this)))};a.prototype.componentDidMount=function(){this.$4()};a.prototype.componentDidUpdate=function(){this.$2&&(b("clearTimeout")(this.$2),this.$2=null)};a.prototype.componentWillUnmount=function(){this.$1&&this.$1.release(),b("clearTimeout")(this.$2)};a.prototype.render=function(){var a=b("MessengerEnvironment").messengerui,c,d;!this.state.isOnline&&!a?(c="offline",d=this.$9()):this.$10()?(c="error",d=this.$11(a)):!this.state.notifiesUserMessages&&!a&&(c="notice",d=this.$12());(this.state.connectionStatus===b("ChannelConnection").RECONNECTING&&this.state.channelData<1e3||this.state.syncStateReconnecting)&&(c=b("joinClasses")(c,"reconnecting"));return c==="offline"&&this.$13()?null:b("React").createElement("div",{className:b("joinClasses")(this.props.className,c)},a?null:b("React").createElement("div",{className:"img"}),b("React").createElement("div",{className:"message"},d))};a.prototype.$13=function(){return b("gkx")("AT4aq0gj3KFvuyn5ouzkcinNuxrDXZY6HPjnRXCVXzOigsSLEws96b2T0YYtUZg_IxPxKREPJvW4RS6GeFXjfiRr")&&!this.props.isSidebar};a.prototype.$10=function(){var a=this.state.connectionStatus;if(b("MessengerMQTTGating").isEnabled())return a&&(a===b("ChannelConnection").SHUTDOWN||a===b("ChannelConnection").RECONNECTING&&this.state.channelData!==undefined)||this.state.syncStateInvalid||this.state.syncStateReconnecting;else return!this.state.isConnected||this.state.syncStateInvalid||this.state.syncStateReconnecting};a.prototype.$11=function(a){__p&&__p();if(this.state.connectionStatus===b("ChannelConnection").SHUTDOWN||this.state.syncStateInvalid)return b("React").createElement(b("ChatSidebarSheetChatShutdownMsg.react"),{hint:this.state.syncStateInvalid?undefined:this.state.channelData,isMessenger:a});else if(this.state.connectionStatus===b("ChannelConnection").RECONNECTING||this.state.syncStateReconnecting){var c=this.state.channelData;if(c===undefined&&!this.state.syncStateReconnecting)return null;c=this.state.syncStateReconnecting?1:c;c>1e3&&(this.$2=b("setTimeoutAcrossTransitions")(this.$5.bind(this,this.$3.getArbiterType(b("MercurySyncEventsProxy").Events.RECONNECTING),c-1e3),1e3));return b("React").createElement(b("ChatSidebarSheetChatReconnectMsg.react"),{isMessenger:a,msecs:c,onManuallyConnectClick:function(){this.state.syncStateReconnecting||b("ChannelConnection").reconnect()}.bind(this)})}return null};a.prototype.$9=function(){return b("React").createElement(b("ChatSidebarSheetChatOffline.react"),{onGoOnlineClick:function(a){this.$14(),i.log("sidebar_go_online"),b("ChatVisibility").goOnline()}.bind(this)})};a.prototype.$14=function(){b("Bootloader").loadModules(["FunnelLogger"],function(a){a.startFunnel("WWW_PRESENCE_FUNNEL"),a.appendActionWithTag("WWW_PRESENCE_FUNNEL","sidebar_turn_on_chat",b("PresencePrivacy").getOnlinePolicyStr()),a.endFunnel("WWW_PRESENCE_FUNNEL")},"ChatSidebarSheet.react")};a.prototype.$12=function(){return b("React").createElement("div",null,g._("Alerts are off while you use another client to chat."))};a.prototype.$7=function(){this.setState({syncStateReconnecting:!0})};a.prototype.$8=function(){this.setState({syncStateInvalid:!1,syncStateReconnecting:!1})};e.exports=a}),null);