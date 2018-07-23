if (self.CavalryLogger) { CavalryLogger.start_js(["5SR7F"]); }

__d("ChatPrivacyActionController",["ChatVisibility","JSLogger","PresencePrivacy"],(function(a,b,c,d,e,f){__p&&__p();a=function a(c,d){__p&&__p();this._userID=c;this._logger=b("JSLogger").create("blackbird");this._getState=function(){return b("ChatVisibility").isOnline()?b("PresencePrivacy").allows(this._userID)?a.NORMAL:a.BLOCKED:a.OFFLINE};this._togglePrivacy=function(){__p&&__p();this._getState();switch(this._getState()){case a.OFFLINE:if(b("ChatVisibility").isOnline()){this._logger.error("tabs_already_online");break}this._logger.log("tabs_go_online",{tab_id:this._userID});b("ChatVisibility").goOnline(function(){b("PresencePrivacy").allows(this._userID)||(this._getState()!==a.BLOCKED&&this._logger.error("privacy_action_controller_blocked_inconsistency"),this._togglePrivacy())}.bind(this));break;case a.BLOCKED:b("PresencePrivacy").allow(this._userID);this._logger.log("tabs_unblock",{tab_id:this._userID});break;case a.NORMAL:b("PresencePrivacy").disallow(this._userID);this._logger.log("tabs_block",{tab_id:this._userID});break}};c=function(){d&&d(this._getState())}.bind(this);c();this._subscribeToken=b("PresencePrivacy").subscribe("privacy-changed",c)};a.OFFLINE="offline";a.BLOCKED="blocked";a.NORMAL="normal";Object.assign(a.prototype,{togglePrivacy:function(){this._logger.log("gear_menu_toggle_privacy",{tab_id:this._userID}),this._togglePrivacy()},destroy:function(){this._subscribeToken&&b("PresencePrivacy").unsubscribe(this._subscribeToken)}});e.exports=a}),null);
__d("MercuryCanonicalGroupThreadManager",["Bootloader","KeyedCallbackManager","MercuryIDs","MercuryPayloadSource","MercuryServerDispatcher","MercuryServerPayloadPreprocessor","MercurySingletonProvider","MessengerServerPayloadTransformer.bs","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){this.$1=a,this.$2=new(b("KeyedCallbackManager"))(),this.$3=b("MercuryServerPayloadPreprocessor").getForFBID(this.$1),this.$4={},this.$7(),this.$8(),this.$6={}}a.getForFBID=function(a){return g.getForFBID(a)};a.get=function(){return g.get()};a.prototype.getCanonicalGroupThreadIDForParticipants=function(a,b){a=this.$9(a);var c=this.$10(a);c=this.$2.executeOrEnqueue(c,b);this.$11(a);return c};a.prototype.unsubscribe=function(a){a&&this.$2.unsubscribe(a)};a.prototype.$10=function(a){return a.sort().join(",")};a.prototype.$12=function(a,c){c=b("MercuryIDs").getThreadIDFromThreadFBID(c);this.$2.setResource(a,c);this.$4[c]=a};a.prototype.$11=function(a){var c=this.$10(a);c={canonical_group_key:c,participants:a};b("MercuryServerDispatcher").trySend("/ajax/mercury/search_canonical_groups.php",c,null,this.$1)};a.prototype.$7=function(){b("MercuryServerDispatcher").registerEndpoints({"/ajax/mercury/search_canonical_groups.php":{request_user_id:this.$1,mode:b("MercuryServerDispatcher").IMMEDIATE,handler:function(a){this.handleUpdate(a)}.bind(this)}})};a.prototype.$9=function(a){a.indexOf(this.$1)===-1&&a.push(this.$1);return a};a.prototype.handleUpdate=function(a){if(a.graphql_payload){var c=b("MessengerServerPayloadTransformer.bs").transformThread(a.viewer,a.graphql_payload,a.for_page);this.$3.handleUpdate({threads:[c],payload_source:b("MercuryPayloadSource").SERVER_SEARCH})}c=a.canonical_group;if(c)for(var d in c)this.$12(d,c[d])};a.prototype.getNow=function(a){a=this.$10(this.$9(a));return this.$2.getResource(a)};a.prototype.$8=function(){b("Bootloader").loadModules(["MercuryThreadInformer"],function(a){a=a.getForFBID(this.$1);var c=new(b("SubscriptionsHandler"))();c.addSubscriptions(a.subscribe("threads-deleted",function(a,b){for(var c in b)this.$4[c]&&(this.$2.setResource(this.$4[c],undefined),delete this.$4[c])}.bind(this)));this.$5=c}.bind(this),"MercuryCanonicalGroupThreadManager")};var g=new(b("MercurySingletonProvider"))(a);e.exports=a}),null);
__d("FantaGetMessageActions",["FantaDispatcher","MercuryCanonicalGroupThreadManager","MercuryIDs","MercuryTypeaheadConstants","keyMirror","requireWeak"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;b("requireWeak")("FantaAppStore",function(a){return g=a});var h=b("keyMirror")({ADD_PARTICIPANTS:null,CLEAR_PARTICIPANTS:null,CLEAR_PREVIEW:null,FETCH_MORE_MESSAGES:null,ON_BOOTLOAD_TYPEAHEAD:null,ON_GET_PARTICIPANT_RESPONSE:null,ON_GET_THREAD_PREVIEW_RESPONSE:null,ON_GET_THREAD_RESPONSE:null,ON_MESSAGE_STORE_RESPONSE:null,ON_PAGE_NULL_RESPONSE:null,ON_PRIVACY_STATE_CHANGE:null,ON_SHOW_CONTEXT_BANNER_TIMER:null,ON_GET_THREAD_HREF_RESPONSE:null,REFRESH_THREAD:null,THREADS_UPDATED:null});a={Types:h,addParticipants:function(a,c){__p&&__p();var d=c.length===1&&c[0].getInfo().render_type===b("MercuryTypeaheadConstants").THREAD_TYPE,e;if(d){d=c[0].getInfo().mercury_thread;d&&(e=b("MercuryIDs").getThreadIDFromThreadFBID(d.thread_fbid))}else if(c.length===1){d=c[0].info&&c[0].info.uid;d&&(e=b("MercuryIDs").getThreadIDFromUserID(d))}else if(c.length===0){b("FantaDispatcher").dispatch({type:h.CLEAR_PARTICIPANTS,tabID:a});return}else{var f=b("MercuryCanonicalGroupThreadManager").get();d=c.map(function(a){return a.info.uid});b("FantaDispatcher").dispatch({type:h.CLEAR_PREVIEW,tabID:a,tokens:c});var i=f.getCanonicalGroupThreadIDForParticipants(Array.from(d),function(d){f.unsubscribe(i);if(g){var e=g.getState();if(!e.tabGroup.tabs.get(a))return}d&&b("FantaDispatcher").dispatch({type:h.ADD_PARTICIPANTS,previewTabID:d,tabID:a,tokens:c})})}e&&b("FantaDispatcher").dispatch({type:h.ADD_PARTICIPANTS,previewTabID:e,tabID:a,tokens:c})},onBootloadTypeahead:function(a,c){b("FantaDispatcher").dispatch({type:h.ON_BOOTLOAD_TYPEAHEAD,tabID:a,thread:c})},fetchMoreMessages:function(a){b("FantaDispatcher").dispatch({type:h.FETCH_MORE_MESSAGES,threadID:a})},refreshThread:function(a){b("FantaDispatcher").dispatch({type:h.REFRESH_THREAD,threadID:a})},onGetThreadResponse:function(a){b("FantaDispatcher").dispatch({type:h.ON_GET_THREAD_RESPONSE,thread:a})},onGetThreadPreviewResponse:function(a,c){b("FantaDispatcher").dispatch({type:h.ON_GET_THREAD_PREVIEW_RESPONSE,tabID:a,thread:c})},onParticipantResponse:function(a){b("FantaDispatcher").dispatch({type:h.ON_GET_PARTICIPANT_RESPONSE,tabID:a})},onShowContextBannerTimer:function(a){b("FantaDispatcher").dispatch({type:h.ON_SHOW_CONTEXT_BANNER_TIMER,threadID:a})},onMessageStoreResponse:function(a,c){b("FantaDispatcher").dispatch({type:h.ON_MESSAGE_STORE_RESPONSE,messages:a,tabID:c})},threadsUpdated:function(a){b("FantaDispatcher").dispatch({type:h.THREADS_UPDATED,threads:a})},onPrivacyStateChange:function(a,c){b("FantaDispatcher").dispatch({type:h.ON_PRIVACY_STATE_CHANGE,threadID:a,privacyState:c})},onPageNullResponse:function(a,c){b("FantaDispatcher").dispatch({type:h.ON_PAGE_NULL_RESPONSE,threadID:a,nullStateCTA:c})},onGetThreadHrefResponse:function(a,c){b("FantaDispatcher").dispatch({type:h.ON_GET_THREAD_HREF_RESPONSE,tabID:a,href:c})}};e.exports=a}),null);
__d("FantaTypeComposer",["FantaTypeFileUploader","FantaTypeSharePreview","immutable"],(function(a,b,c,d,e,f){"use strict";var g,h=0;c={fileUploader:new(b("FantaTypeFileUploader"))(),sharePreview:new(b("FantaTypeSharePreview"))(),text:"",replyingToMessage:null,version:h};d=babelHelpers.inherits(a,b("immutable").Record(c));g=d&&d.prototype;function a(){g.constructor.call(this,{version:++h})}e.exports=a}),null);
__d("FantaMessageActions",["Bootloader","FantaDispatcher","FantaTypeComposer","MercuryConfig","emptyFunction","ifRequired","keyMirror","setImmediate"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("keyMirror")({CANCEL_FILE_UPLOAD:null,COMPOSER_TEXT_UPDATE:null,LINK_PREVIEW:null,LOADED_SHARE_DATA:null,LOADING_SHARE_DATA:null,PREPARE_FILES_FOR_SEND:null,RECEIVED_NEW_MESSAGE:null,REMOVE_SHARE_PREVIEW:null,SEND_GROUP_MESSAGE:null,SEND_HOT_LIKE:null,SEND_MESSAGE:null,SEND_PHOTO:null,SEND_STICKER:null,UPDATE_GROUP_NAME:null,UPLOAD_FILE_FAILED:null,UPLOADED_FILE:null,REPLY_TO_MESSAGE:null,CANCEL_REPLY_TO_MESSAGE:null});function h(){var a=document.createElement("form");a.action=b("MercuryConfig").upload_url;a.method="post";return a}function i(a,b){var c=document.createElement("input");c.type="file";c.name="attachment[]";c.multiple=!0;b&&(c.onchange=b);a.appendChild(c);return c}var j={Types:g,prepareFilesForSend:function(a,c,d,e){this.dispatchOrBootloadUploader(function(){b("FantaDispatcher").dispatch({type:g.PREPARE_FILES_FOR_SEND,tabID:a,files:c,composer:d}),e&&e()})},openUploadFilePicker:function(a,b){var c=h();c=i(c,function(){j.prepareFilesForSend(a,this.files,b)});c.click()},uploadedFile:function(a,c,d){this.dispatchOrBootloadUploader(function(){b("FantaDispatcher").dispatch({type:g.UPLOADED_FILE,tabID:a,uploadID:c,payload:d})})},uploadFileFailed:function(a,c){this.dispatchOrBootloadUploader(function(){b("FantaDispatcher").dispatch({type:g.UPLOAD_FILE_FAILED,tabID:a,uploadID:c})})},replyToMessage:function(a,c){b("FantaDispatcher").dispatch({type:g.REPLY_TO_MESSAGE,threadID:c,message:a})},cancelReplyToMessage:function(a){b("FantaDispatcher").dispatch({type:g.CANCEL_REPLY_TO_MESSAGE,threadID:a})},cancelFileUpload:function(a,c){this.dispatchOrBootloadUploader(function(){b("FantaDispatcher").dispatch({type:g.CANCEL_FILE_UPLOAD,tabID:a,uploadID:c})})},linkPreview:function(a,c){this.dispatchOrBootloadSharePreview(function(){b("FantaDispatcher").dispatch({type:g.LINK_PREVIEW,tabID:a,uri:c})})},loadedShareData:function(a,c,d){this.dispatchOrBootloadSharePreview(function(){b("FantaDispatcher").dispatch({type:g.LOADED_SHARE_DATA,tabID:a,attachmentData:c,composer:d})})},loadingShareData:function(a,c){this.dispatchOrBootloadSharePreview(function(){b("FantaDispatcher").dispatch({type:g.LOADING_SHARE_DATA,composer:c,tabID:a})})},removeSharePreview:function(a,c){this.dispatchOrBootloadSharePreview(function(){b("FantaDispatcher").dispatch({type:g.REMOVE_SHARE_PREVIEW,tabID:a,composer:c})})},receivedNewMessage:function(a,c){b("FantaDispatcher").dispatch({type:g.RECEIVED_NEW_MESSAGE,tabID:a,message:c})},updateGroupName:function(a,c){this.dispatchOrBootloadSendMessages(function(){b("FantaDispatcher").dispatch({type:g.UPDATE_GROUP_NAME,threadID:a,newName:c})})},sendGroupMessage:function(a,c){this.dispatchOrBootloadSendMessages(function(){b("FantaDispatcher").dispatch({type:g.SEND_GROUP_MESSAGE,threadID:a,onSendSuccess:c})})},sendMessage:function(a,c,d,e){this.dispatchOrBootloadSendMessages(function(){b("FantaDispatcher").dispatch({type:g.SEND_MESSAGE,threadID:a,message:c,composer:d,onSendSuccess:e})})},sendPhoto:function(a,c,d){this.dispatchOrBootloadSendMessages(function(){b("FantaDispatcher").dispatch({type:g.SEND_PHOTO,onSendSuccess:d,photoData:c,threadID:a})})},sendHotLike:function(a,c,d,e,f){this.dispatchOrBootloadSendMessages(function(){b("FantaDispatcher").dispatch({type:g.SEND_HOT_LIKE,emoji:c,onSendSuccess:f,size:d,source:e,threadID:a})})},sendSticker:function(a,c,d){this.dispatchOrBootloadSendMessages(function(){b("FantaDispatcher").dispatch({type:g.SEND_STICKER,threadID:a,stickerID:c,onSendSuccess:d})})},composerTextUpdate:function(a,c,d){c.length>0&&b("ifRequired")("FantaReducersSendMessages",b("emptyFunction"),function(){return this.dispatchOrBootloadSendMessages(b("emptyFunction"))}.bind(this)),this.dispatchOrBootloadSharePreview(function(){b("FantaDispatcher").dispatch({type:g.COMPOSER_TEXT_UPDATE,composer:d,message:c,threadID:a})})},dispatchOrBootloadSendMessages:function(a){b("ifRequired")("FantaReducersSendMessages",function(){b("setImmediate")(a)},function(){b("Bootloader").loadModules(["FantaAppStore","FantaReducersSendMessages"],function(c,d){c.addReducers(d),b("setImmediate")(a)},"FantaMessageActions")})},dispatchOrBootloadUploader:function(a){b("ifRequired")("FantaReducersFileUploader",function(){a()},function(){b("Bootloader").loadModules(["FantaAppStore","FantaReducersFileUploader"],function(b,c){b.addReducers(c),a()},"FantaMessageActions")})},dispatchOrBootloadSharePreview:function(a){b("ifRequired")("FantaReducersSharePreview",function(){a()},function(){b("Bootloader").loadModules(["FantaAppStore","FantaReducersSharePreview"],function(b,c){b.addReducers(c),a()},"FantaMessageActions")})}};e.exports=j}),null);
__d("FantaTabSheetActions",["FantaDispatcher","LogHistory","keyMirror"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("keyMirror")({CLOSE_ADD_FRIENDS_SHEET:null,CLOSE_ADD_MORE_FRIENDS_SHEET:null,CLOSE_EMPLOYEE_PERSONAL_USER_SHEET:null,CLOSE_EMPLOYEE_WORK_USER_SHEET:null,CLOSE_NAME_CONVERSATION_TAB_SHEET:null,CLOSE_READ_ONLY_PERMANENT_SHEET:null,CLOSE_READ_ONLY_SHEET:null,CLOSE_USER_FOCUS_AND_BYPASS_SHEET:null,ON_BOOTLOAD_EVENT_REMINDER:null,ON_WORK_DO_NOT_DISTURB_RESPONSE:null,ON_MENTORSHIP_PROGRAM_RESPONSE:null,ON_IS_PAGE_TAB:null,OPEN_ADD_MORE_FRIENDS_SHEET:null,OPEN_APPOINTMENT_SHEET:null,OPEN_BYPASS_FOCUS_SHEET:null,OPEN_EMPLOYEE_AWAY_SHEET:null,OPEN_EMPLOYEE_PERSONAL_USER_SHEET:null,OPEN_EMPLOYEE_WORK_USER_SHEET:null,OPEN_NAME_CONVERSATION_TAB_SHEET:null,OPEN_READ_ONLY_PERMANENT_SHEET:null,OPEN_READ_ONLY_SHEET:null,OPEN_USER_FOCUS_SHEET:null,OPEN_MENTORSHIP_PROGRAM_SHEET:null}),h=b("LogHistory").getInstance("fanta_sheets");function i(a){b("FantaDispatcher").dispatch(a),h.log(a.type,a.tabID)}a={Types:g,openUserFocusSheet:function(a){i({type:g.OPEN_USER_FOCUS_SHEET,tabID:a})},openBypassFocusSheet:function(a){i({type:g.OPEN_BYPASS_FOCUS_SHEET,tabID:a})},closeUserFocusAndBypassSheet:function(a){i({type:g.CLOSE_USER_FOCUS_AND_BYPASS_SHEET,tabID:a})},openAddMoreFriendsSheet:function(a){i({type:g.OPEN_ADD_MORE_FRIENDS_SHEET,tabID:a})},closeAddMoreFriendsSheet:function(a){i({type:g.CLOSE_ADD_MORE_FRIENDS_SHEET,tabID:a})},closeAddFriendsSheet:function(a){i({type:g.CLOSE_ADD_FRIENDS_SHEET,tabID:a})},openNameConversationSheet:function(a){i({type:g.OPEN_NAME_CONVERSATION_TAB_SHEET,tabID:a})},closeNameConversationSheet:function(a){i({type:g.CLOSE_NAME_CONVERSATION_TAB_SHEET,tabID:a})},openReadOnlySheet:function(a){i({type:g.OPEN_READ_ONLY_SHEET,tabID:a})},closeReadOnlySheet:function(a){i({type:g.CLOSE_READ_ONLY_SHEET,tabID:a})},openReadOnlyPermanentSheet:function(a){i({type:g.OPEN_READ_ONLY_PERMANENT_SHEET,tabID:a})},closeReadOnlyPermanentSheet:function(a){i({type:g.CLOSE_READ_ONLY_PERMANENT_SHEET,tabID:a})},openEmployeeAwaySheet:function(a){i({type:g.OPEN_EMPLOYEE_AWAY_SHEET,tabID:a})},openEmployeePersonalUserSheet:function(a){i({type:g.OPEN_EMPLOYEE_PERSONAL_USER_SHEET,tabID:a})},closeEmployeePersonalUserSheet:function(a){i({type:g.CLOSE_EMPLOYEE_PERSONAL_USER_SHEET,tabID:a})},openEmployeeWorkUserSheet:function(a){i({type:g.OPEN_EMPLOYEE_WORK_USER_SHEET,tabID:a})},closeEmployeeWorkUserSheet:function(a){i({type:g.CLOSE_EMPLOYEE_WORK_USER_SHEET,tabID:a})},openMentorshipProgramSheet:function(a){i({type:g.OPEN_MENTORSHIP_PROGRAM_SHEET,tabID:a})},onIsPageTab:function(a,b){i({type:g.ON_IS_PAGE_TAB,pageIndicator:b,tabID:a})},onBootloadEventReminder:function(a){i({type:g.ON_BOOTLOAD_EVENT_REMINDER,tabID:a})},openAppointmentBannerSheet:function(a){i({type:g.OPEN_APPOINTMENT_SHEET,tabID:a})},onWorkDoNotDisturbResponse:function(a,b,c){i({type:g.ON_WORK_DO_NOT_DISTURB_RESPONSE,tabID:a,status:b,description:c})},onMentorshipProgramResponse:function(a,b,c){i({type:g.ON_MENTORSHIP_PROGRAM_RESPONSE,tabID:a,groupID:c,programName:b})}};e.exports=a}),null);
__d("MercurySheetPolicy",["keyMirror"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={ChatThreadIsMutedTabSheet:{isPermanent:!1,isSheetWithInput:!1},ChatUserFocusSheet:{isPermanent:!0,isSheetWithInput:!0},ChatUserFocusBypassSheet:{isPermanent:!0,isSheetWithInput:!0},ChatUserBlockedTabSheet:{isPermanent:!0,isSheetWithInput:!1},ChatUploadWarningTabSheet:{isPermanent:!1,isSheetWithInput:!1},ChatThreadIsMessageBlockedSheet:{isPermanent:!0,isSheetWithInput:!1},ChatReadOnlyTabSheet:{isPermanent:!1,isSheetWithInput:!1},ChatReadOnlyPermanentTabSheet:{isPermanent:!0,isSheetWithInput:!1},ChatOfflineTabSheet:{isPermanent:!0,isSheetWithInput:!1},ChatNoRecipientsTabSheet:{isPermanent:!0,isSheetWithInput:!1},ChatNewMessagesTabSheet:{isPermanent:!0,isSheetWithInput:!0},ChatNameConversationTabSheet:{isPermanent:!0,isSheetWithInput:!0},ChatEmployeeAwaySheet:{isPermanent:!0,isSheetWithInput:!1},ChatEventReminderTabSheet:{isPermanent:!0,isSheetWithInput:!1},ChatAppointmentBanner:{isPermanent:!0,isSheetWithInput:!1},ChatMontageSheet:{isPermanent:!1,isSheetWithInput:!1},ChatJoinCallSheet:{isPermanent:!0,isSheetWithInput:!1},FantaAddFriendsSheet:{isPermanent:!0,isSheetWithInput:!0},FantaAddMoreFriendsSheet:{isPermanent:!0,isSheetWithInput:!0},ChatRoomAssociatedObjectSheet:{isPermanent:!1,isSheetWithInput:!1},ChatMentorshipProgramSheet:{isPermanent:!1,isSheetWithInput:!1},ChatGroupsSyncTabSheet:{isPermanent:!0,isSheetWithInput:!1}};a={canReplaceOpenSheet:function(a,b){var c=this.getType(b),d=this.isPermanent(b);b=this.isSheetWithInput(b);var e=this.getType(a),f=this.isPermanent(a);a=this.isSheetWithInput(a);if(a)return!!(c!==e&&b);if(f&&!d)return!1;return e===this.sheets.ChatThreadIsMessageBlockedSheet?!1:!0},getType:function(a){var b=a.getType||a.type&&a.type.getType||function(){return a};b=b.call(a);return b},isPermanent:function(a){if(typeof a==="string"&&g[a])return g[a].isPermanent;var b=a.isPermanent||a.type&&a.type.isPermanent||function(){return!1};b=b.call(a);return b},isSheetWithInput:function(a){if(typeof a==="string"&&g[a])return g[a].isSheetWithInput;var b=a.isSheetWithInput||a.type&&a.type.isSheetWithInput||function(){return!1};b=b.call(a);return b},sheets:b("keyMirror")(g)};e.exports=a}),null);