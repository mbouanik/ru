if (self.CavalryLogger) { CavalryLogger.start_js(["t7tVr"]); }

__d("MessengerCommerceTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:MessengerCommerceLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:MessengerCommerceLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MessengerCommerceLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAppOrPagePerm=function(a){this.$1.app_or_page_perm=a;return this};a.prototype.setAttachmentIds=function(a){this.$1.attachment_ids=a;return this};a.prototype.setBatchSize=function(a){this.$1.batch_size=a;return this};a.prototype.setBrandAppID=function(a){this.$1.brand_app_id=a;return this};a.prototype.setBroadcastID=function(a){this.$1.broadcast_id=a;return this};a.prototype.setCallSite=function(a){this.$1.call_site=a;return this};a.prototype.setCellNum=function(a){this.$1.cell_num=a;return this};a.prototype.setCtaExtraData=function(a){this.$1.cta_extra_data=a;return this};a.prototype.setCtaExtraStats=function(a){this.$1.cta_extra_stats=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setCtaID=function(a){this.$1.cta_id=a;return this};a.prototype.setCtaKind=function(a){this.$1.cta_kind=a;return this};a.prototype.setCtaKindStats=function(a){this.$1.cta_kind_stats=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setCtaTypeStats=function(a){this.$1.cta_type_stats=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setCustomLabelID=function(a){this.$1.custom_label_id=a;return this};a.prototype.setDebugData=function(a){this.$1.debug_data=a;return this};a.prototype.setEntityID=function(a){this.$1.entity_id=a;return this};a.prototype.setErrorType=function(a){this.$1.error_type=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setException=function(a){this.$1.exception=a;return this};a.prototype.setFirstSeqID=function(a){this.$1.first_seq_id=a;return this};a.prototype.setHasImplicitSubscriptionPerm=function(a){this.$1.has_implicit_subscription_perm=a;return this};a.prototype.setHasSubscriptionPerm=function(a){this.$1.has_subscription_perm=a;return this};a.prototype.setIsProd=function(a){this.$1.is_prod=a;return this};a.prototype.setIsTestPayment=function(a){this.$1.is_test_payment=a;return this};a.prototype.setLastSeqID=function(a){this.$1.last_seq_id=a;return this};a.prototype.setLatency=function(a){this.$1.latency=a;return this};a.prototype.setMessageBody=function(a){this.$1.message_body=a;return this};a.prototype.setMessageClassification=function(a){this.$1.message_classification=a;return this};a.prototype.setMessageFolder=function(a){this.$1.message_folder=a;return this};a.prototype.setMessageID=function(a){this.$1.message_id=a;return this};a.prototype.setMessageTrigger=function(a){this.$1.message_trigger=a;return this};a.prototype.setMessageType=function(a){this.$1.message_type=a;return this};a.prototype.setNmorOrderType=function(a){this.$1.nmor_order_type=a;return this};a.prototype.setNumQuickReplies=function(a){this.$1.num_quick_replies=a;return this};a.prototype.setPageID=function(a){this.$1.page_id=a;return this};a.prototype.setPixelID=function(a){this.$1.pixel_id=a;return this};a.prototype.setPrometheusLag=function(a){this.$1.prometheus_lag=a;return this};a.prototype.setQuickReplyContentTypeStats=function(a){this.$1.quick_reply_content_type_stats=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setRating=function(a){this.$1.rating=a;return this};a.prototype.setRecipientID=function(a){this.$1.recipient_id=a;return this};a.prototype.setSenderID=function(a){this.$1.sender_id=a;return this};a.prototype.setSubscriptionID=function(a){this.$1.subscription_id=a;return this};a.prototype.setSyncToken=function(a){this.$1.sync_token=a;return this};a.prototype.setTargetSpecID=function(a){this.$1.target_spec_id=a;return this};a.prototype.setThreadID=function(a){this.$1.thread_id=a;return this};a.prototype.setTotalRatingSum=function(a){this.$1.total_rating_sum=a;return this};a.prototype.setTotalReviewCount=function(a){this.$1.total_review_count=a;return this};a.prototype.setUserFbid=function(a){this.$1.user_fbid=a;return this};a.prototype.setUserPhoneNumber=function(a){this.$1.user_phone_number=a;return this};a.prototype.setUserPsid=function(a){this.$1.user_psid=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWaterfallLogID=function(a){this.$1.waterfall_log_id=a;return this};a.prototype.setWebhookURL=function(a){this.$1.webhook_url=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={app_or_page_perm:!0,attachment_ids:!0,batch_size:!0,brand_app_id:!0,broadcast_id:!0,call_site:!0,cell_num:!0,cta_extra_data:!0,cta_extra_stats:!0,cta_id:!0,cta_kind:!0,cta_kind_stats:!0,cta_type_stats:!0,custom_label_id:!0,debug_data:!0,entity_id:!0,error_type:!0,event:!0,exception:!0,first_seq_id:!0,has_implicit_subscription_perm:!0,has_subscription_perm:!0,is_prod:!0,is_test_payment:!0,last_seq_id:!0,latency:!0,message_body:!0,message_classification:!0,message_folder:!0,message_id:!0,message_trigger:!0,message_type:!0,nmor_order_type:!0,num_quick_replies:!0,page_id:!0,pixel_id:!0,prometheus_lag:!0,quick_reply_content_type_stats:!0,rating:!0,recipient_id:!0,sender_id:!0,subscription_id:!0,sync_token:!0,target_spec_id:!0,thread_id:!0,total_rating_sum:!0,total_review_count:!0,user_fbid:!0,user_phone_number:!0,user_psid:!0,vc:!0,waterfall_log_id:!0,webhook_url:!0};e.exports=a}),null);
__d("MessengerMenuReact.bs",["ReasonReact.bs","bs_js_null_undefined","MessengerMenu.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){return b("ReasonReact.bs").wrapJsForReason(b("MessengerMenu.react"),{},a)}e=[a];function c(a,c,d,e,f){return b("ReasonReact.bs").wrapJsForReason(b("MessengerMenu.react").Item,{href:b("bs_js_null_undefined").fromOption(a),label:c,onclick:b("bs_js_null_undefined").fromOption(d),target:b("bs_js_null_undefined").fromOption(e)},f)}a=[c];function d(a){return b("ReasonReact.bs").wrapJsForReason(b("MessengerMenu.react").Separator,{},a)}c=[d];f.Menu=e;f.MenuItem=a;f.MenuSeparator=c}),null);
__d("MessengerDomIDs.bs",["uniqueID"],(function(a,b,c,d,e,f){"use strict";a={COMPOSER_INPUT_DESCRIPTION:b("uniqueID")(),CONVERSATION:b("uniqueID")(),MAIN_LABEL:b("uniqueID")(),MUTE_DIALOG_TITLE:b("uniqueID")(),THREAD_INFO_PANEL:b("uniqueID")(),THREAD_TITLE:b("uniqueID")()};f.ids=a}),null);
__d("MessengerRadioList.bs",["ReasonReact.bs","bs_js_null_undefined","MessengerRadioList.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d,e){return b("ReasonReact.bs").wrapJsForReason(b("MessengerRadioList.react"),{name:b("bs_js_null_undefined").fromOption(a),onValueChange:c,selectedValue:d},e)}d=[a];function c(a,c,d,e,f,g,h){a=a?a[0]:!1;return b("ReasonReact.bs").wrapJsForReason(b("MessengerRadioList.react").Item,{disabled:a,className:b("bs_js_null_undefined").fromOption(c),name:b("bs_js_null_undefined").fromOption(d),onSelect:b("bs_js_null_undefined").fromOption(e),selectedValue:b("bs_js_null_undefined").fromOption(f),value:g},h)}e=[c];f.List=d;f.Item=e}),null);
__d("MessengerMuteDialogReact.bs",["cx","fbt","bs_block","bs_curry","React","ReasonReact.bs","MessengerDomIDs.bs","MessengerRadioList.bs","MessengerDialogReact.bs","MessengerDialogBodyReact.bs"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();function i(a){if(typeof a==="number")return-1;else if(a.tag)return a[0]*3600;else return a[0]*60}var j=b("bs_block").__(0,[30]),k=b("bs_block").__(1,[1]),l=b("bs_block").__(1,[8]),m=b("bs_block").__(1,[24]),n=b("ReasonReact.bs").reducerComponent("MessengerMuteDialogReact");function a(a,c){__p&&__p();return[n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],function(a){var c=a[1];return b("ReasonReact.bs").element(0,0,b("MessengerDialogReact.bs").Dialog[0](0,0,0,[c[1]],[b("MessengerDomIDs.bs").ids.MUTE_DIALOG_TITLE],0,0,[b("ReasonReact.bs").element(0,0,b("MessengerDialogReact.bs").Header[0](0,0,h._("Mute Conversation"))),b("ReasonReact.bs").element(0,0,b("MessengerDialogBodyReact.bs").make(0,[b("React").createElement("div",{className:"_3-96"},h._("You will continue to receive \u0040mention notifications while muted.")),b("ReasonReact.bs").element(0,0,b("MessengerRadioList.bs").List[0](["messengerMuteOptions"],function(c){return b("bs_curry")._1(a[3],[c])},c[0],[b("ReasonReact.bs").element(0,0,b("MessengerRadioList.bs").Item[0](0,0,0,0,0,j,[h._("For 30 minutes")])),b("ReasonReact.bs").element(0,0,b("MessengerRadioList.bs").Item[0](0,0,0,0,0,k,[h._("For 1 hour")])),b("ReasonReact.bs").element(0,0,b("MessengerRadioList.bs").Item[0](0,0,0,0,0,l,[h._("For 8 hours")])),b("ReasonReact.bs").element(0,0,b("MessengerRadioList.bs").Item[0](0,0,0,0,0,m,[h._("For 24 hours")])),b("ReasonReact.bs").element(0,0,b("MessengerRadioList.bs").Item[0](0,0,0,0,0,0,[h._("Until I turn it back on")]))]))])),b("ReasonReact.bs").element(0,0,b("MessengerDialogReact.bs").Footer[0](0,0,[b("ReasonReact.bs").element(0,0,b("MessengerDialogReact.bs").CancelButton[0](0,[])),b("ReasonReact.bs").element(0,0,b("MessengerDialogReact.bs").Button[0](0,[h._("Mute")],0,0,[function(){return b("bs_curry")._1(a[3],0)}],[0],0,0,[]))]))]))},function(){return[j,!0]},n[10],function(c,d){if(c)return b("bs_block").__(0,[[c[0],d[1]]]);else return b("bs_block").__(2,[[d[0],!1],function(c){return b("bs_curry")._1(a,i(c[1][0]))}])},n[12]]}c=0;f.convertMuteToSeconds=i;f.thirtyMinutes=j;f.oneHour=k;f.eightHours=l;f.twentyFourHours=m;f.always=c;f.component=n;f.make=a}),null);
__d("MessengerPopoverMenuReact.bs",["ReasonReact.bs","bs_js_null_undefined","MessengerPopoverMenu.react"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d,e,f,g,h){return b("ReasonReact.bs").wrapJsForReason(b("MessengerPopoverMenu.react"),{className:b("bs_js_null_undefined").fromOption(a),disableArrowKeyActivation:b("bs_js_null_undefined").fromOption(c),isOpen:b("bs_js_null_undefined").fromOption(d),menu:e,onHide:b("bs_js_null_undefined").fromOption(f),onShow:b("bs_js_null_undefined").fromOption(g)},h)}f.make=a}),null);
__d("MessengerUserControlsButtonReact.bs",["ix","fbt","LinkReact.bs","ImageReact.bs","MercuryIDs","ReasonReact.bs","AsyncRequest","MessengerDialogs.bs","MessengerMenuReact.bs","MercuryThreadActions","MessengerParticipants.bs","MessengerMuteDialogReact.bs","MessengerPopoverMenuReact.bs","MessengerCommerceTypedLogger","MercuryServerPayloadPreprocessor"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=h._("Mute Notifications"),j=h._("Unmute Notifications"),k=h._("Turn Off Messages"),l=h._("Turn On Messages"),m=g("464335"),n=g("464334"),o=b("ReasonReact.bs").statelessComponent("MessengerUserControlsButton");function a(a,c,d){new(b("AsyncRequest"))(a.getURI(c)).setMethod("POST").setData(c).setHandler(d).send();return 0}function c(a,c,d,e,f,g,h){__p&&__p();var p=function(a){var c=b("MercuryIDs").getParticipantIDFromUserID(e);c=b("MessengerParticipants.bs").getNow(c);if(c==null)return 0;else{c=Object.assign({},c);b("MercuryServerPayloadPreprocessor").getForFBID(g).handleUpdate(Object.assign({},{participants:[Object.assign(c,{is_messenger_blocked:a})]}));return 0}},q=function(a){a=new(b("MessengerCommerceTypedLogger"))().setEvent(a).setUserFbid(g).setPageID(e).setDebugData("www_messenger");a.log();return 0},r=function(){if(d){b("MercuryThreadActions").getForFBID(g).unblockOnMessengerDotCom(f);p(!1);return q("user_control_v2_unblocked")}else{b("MercuryThreadActions").getForFBID(g).blockOnMessengerDotCom(f);p(!0);return q("user_control_v2_blocked")}},s=function(a){b("MercuryThreadActions").getForFBID(g).updateMuteSetting(f,a);return q("user_control_v2_muted")},t=function(){return q("user_control_menu_clicked")},u=function(){if(c){b("MercuryThreadActions").getForFBID(g).unmute(f);return q("user_control_v2_unmuted")}else return b("MessengerDialogs.bs").showDialog(function(){return b("ReasonReact.bs").element(0,0,b("MessengerMuteDialogReact.bs").make(s,[]))})};return[o[0],o[1],o[2],o[3],function(){return q("user_control_v2_impression")},o[5],o[6],o[7],function(){var e=c?j:i;e=b("ReasonReact.bs").element(0,0,b("MessengerMenuReact.bs").MenuItem[0](0,e,[u],0,[]));var f=d?l:k;f=b("ReasonReact.bs").element(0,0,b("MessengerMenuReact.bs").MenuItem[0](0,f,[r],0,[]));e=b("ReasonReact.bs").element(0,0,b("MessengerMenuReact.bs").Menu[0]([e,f]));f=d?n:m;return b("ReasonReact.bs").element(0,0,b("MessengerPopoverMenuReact.bs").make([a],0,0,e,0,[t],[b("ReasonReact.bs").element(0,0,b("LinkReact.bs").make(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[b("ReasonReact.bs").element(0,0,b("ImageReact.bs").make(0,0,0,0,[f],[32],0,[40],0,[]))]))]))},o[9],o[10],o[11],o[12]]}f.mute=i;f.unmute=j;f.block=k;f.unblock=l;f.unblocked_button_image_path=m;f.blocked_button_image_path=n;f.component=o;f.sendSubscriptionAction=a;f.make=c}),null);
__d("BootloadableMessengerUserControlsButtonReact.bs",["MessengerUserControlsButtonReact.bs"],(function(a,b,c,d,e,f){"use strict";a=[b("MessengerUserControlsButtonReact.bs").mute,b("MessengerUserControlsButtonReact.bs").unmute,b("MessengerUserControlsButtonReact.bs").block,b("MessengerUserControlsButtonReact.bs").unblock,b("MessengerUserControlsButtonReact.bs").unblocked_button_image_path,b("MessengerUserControlsButtonReact.bs").blocked_button_image_path,b("MessengerUserControlsButtonReact.bs").component,b("MessengerUserControlsButtonReact.bs").sendSubscriptionAction,b("MessengerUserControlsButtonReact.bs").make];f.bootloadable=a}),null);