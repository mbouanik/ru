if (self.CavalryLogger) { CavalryLogger.start_js(["WFg2k"]); }

__d("MessengerBotsWebTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:MessengerBotsWebLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:MessengerBotsWebLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MessengerBotsWebLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setCount=function(a){this.$1.count=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setIndex=function(a){this.$1.index=a;return this};a.prototype.setPageID=function(a){this.$1.page_id=a;return this};a.prototype.setPayload=function(a){this.$1.payload=a;return this};a.prototype.setQrContentType=function(a){this.$1.qr_content_type=a;return this};a.prototype.setTitle=function(a){this.$1.title=a;return this};a.prototype.setTitles=function(a){this.$1.titles=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setType=function(a){this.$1.type=a;return this};a.prototype.setURL=function(a){this.$1.url=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={count:!0,event:!0,index:!0,page_id:!0,payload:!0,qr_content_type:!0,title:!0,titles:!0,type:!0,url:!0,vc:!0};e.exports=a}),null);
__d("LeafletMarker.react",["GeoCoordinates","LeafletLayer.react","LeafletUtils","React","areEqual","leaflet","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.$1=function(a,c,d){__p&&__p();var e=d.options||{},f=e.opacity,g=e.zIndex;e=babelHelpers.objectWithoutProperties(e,["opacity","zIndex"]);var h=c.options||{},i=h.opacity,j=h.zIndex;h=babelHelpers.objectWithoutProperties(h,["opacity","zIndex"]);if(!b("areEqual")(h,e))return!1;i!==f&&a.setOpacity(i);j!==g&&a.setZIndex(j);c.coordinates!==d.coordinates&&a.setLatLng(b("LeafletUtils").toLatLng(c.coordinates));h=c.popup;if(h){e=h.type.mutate(a.getPopup(),h.props,b("nullthrows")(d.popup).props);e||(a.unbindPopup(),a.bindPopup(h.type.toLayer(h.props,a)))}else!h&&d.popup&&a.unbindPopup();b("LeafletLayer.react").mutateEventHandlers(a,c.eventHandlers,d.eventHandlers);return!0};a.prototype.$2=function(a){var c=b("leaflet").marker(b("LeafletUtils").toLatLng(a.coordinates),a.options);a.popup&&c.bindPopup(a.popup.type.toLayer(a.popup.props,c));b("LeafletLayer.react").addEventHandlers(c,a.eventHandlers);return c};a.prototype.render=function(){return b("React").createElement(b("LeafletLayer.react"),babelHelpers["extends"]({},this.props,{onCreateLayer:this.$2,onUpdateLayer:this.$1}))};function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("MessengerDynamicMap.react",["CurrentLocale","GeoCoordinates","LeafletMap.react","LeafletMarker.react","LeafletTileLayer.react","LeafletUtils","LeafletView","React","TilesMapUtils","leaflet"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=b("React").PropTypes;var h={tap:!1},i={icon:b("leaflet").icon({iconUrl:"https://www.facebook.com/images/places/map/bright-pink-pin.png",iconSize:[20,27],iconAnchor:[9,24]}),draggable:!0};d=babelHelpers.inherits(a,b("React").PureComponent);g=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=new(b("LeafletView"))({center:new(b("GeoCoordinates"))(this.props.lat,this.props["long"]),zoom:this.props.zoom}),this.$2=function(event){var a=event.target&&event.target.getLatLng();a=b("LeafletUtils").fromLatLng(a);this.props.onMarkerDragEnd(a&&a.latitude,a&&a.longitude)}.bind(this),c}a.prototype.render=function(){var a=b("TilesMapUtils").getTileURLTemplate(b("CurrentLocale").get());return b("React").createElement(b("LeafletMap.react"),{defaultOptions:h,defaultView:this.$1,style:{height:this.props.height+"px",width:this.props.width+"px"}},b("React").createElement(b("LeafletTileLayer.react"),{urlTemplate:a}),b("React").createElement(b("LeafletMarker.react"),{coordinates:new(b("GeoCoordinates"))(this.props.lat,this.props["long"]),eventHandlers:{dragstart:this.props.onMarkerDragStart,dragend:this.$2},options:i}))};a.defaultProps={zoom:15};a.propTypes={lat:c.number.isRequired,"long":c.number.isRequired,height:c.number.isRequired,width:c.number.isRequired,onMarkerDragEnd:c.func.isRequired,onMarkerDragStart:c.func.isRequired,zoom:c.number.isRequired};e.exports=a}),null);
__d("MessengerBotsQuickReplyButton.react",["cx","fbt","ix","Image.react","MessengerEnvironment","React","ShimButton.react","Tooltip","joinClasses","validateImageSrcPropType"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l,m,n;c=b("React").PropTypes;j=babelHelpers.inherits(a,b("React").Component);j&&j.prototype;a.prototype.render=function(){return b("React").createElement("div",{className:"_56n2"},this.$1())};a.prototype.$1=function(){switch(this.props.option.content_type){case"text":return b("React").createElement(o,babelHelpers["extends"]({imageUrl:this.$2()},this.props));case"location":case"p2p_payment":case"open_camera":case"record_audio":return b("React").createElement(p,babelHelpers["extends"]({imageUrl:this.$2()},this.props));case"user_phone_number":return b("React").createElement(o,babelHelpers["extends"]({imageUrl:this.$2()},this.props));case"user_email":return b("React").createElement(o,babelHelpers["extends"]({imageUrl:this.$2()},this.props));case"ride_service":case"sticker":case"branded_camera":return b("React").createElement(p,babelHelpers["extends"]({imageUrl:this.$2()},this.props));default:return null}};a.prototype.$2=function(){var a=this.props.option,c=b("MessengerEnvironment").messengerui;switch(a.content_type){case"branded_camera":return c?i("602289"):i("602290");case"location":return c?i("87219"):i("87222");case"p2p_payment":return c?i("87227"):i("87226");case"open_camera":return c?i("87289"):i("87288");case"record_audio":return c?i("87219"):i("87222");default:return a.image_url}};function a(){j.apply(this,arguments)}a.propTypes={className:c.string,isMessengerAdPreview:c.bool,option:c.object.isRequired,onClick:c.func.isRequired,userData:c.string};k=babelHelpers.inherits(o,b("React").Component);k&&k.prototype;o.prototype.render=function(){var a=this.props,c=a.option,d=a.onClick,e=a.imageUrl;a=a.userData;var f=b("MessengerEnvironment").messengerui,g=!!e,h=c&&c.title;(c.content_type==="user_email"||c.content_type==="user_phone_number")&&(h=a);if(h)return b("React").createElement(b("ShimButton.react"),{className:b("joinClasses")(this.props.className,"_3u69"+(f?" _36wf":"")+(f&&!g?" _2pi9":"")+(f?"":" _-lq")+(!f&&!g?" _2pi8":"")),onClick:this.props.isMessengerAdPreview?null:d},g&&e?b("React").createElement(q,{imageUrl:e}):null,b("React").createElement(r,{hasIcon:g,title:h}));else return null};function o(){k.apply(this,arguments)}o.propTypes={option:c.object.isRequired,imageUrl:b("validateImageSrcPropType"),isMessengerAdPreview:c.bool,onClick:c.func.isRequired};l=babelHelpers.inherits(p,b("React").Component);l&&l.prototype;p.prototype.render=function(){var a=this.props,c=a.option,d=a.onClick;a=a.imageUrl;var e=b("MessengerEnvironment").messengerui,f=this.$1(),g=f?h._("To use this feature, use the Messenger app."):null;return b("React").createElement(b("ShimButton.react"),babelHelpers["extends"]({className:b("joinClasses")(this.props.className,"_3u69"+(f?"":" _5pdw")+(e?" _10-b":"")+(e&&f?" _5pdx":"")+(e?"":" _-lq")+(!e&&f?" _5pdy":"")),onClick:d},b("Tooltip").propsFor(g),{"data-tooltip-alignh":"center","data-tooltip-position":"above"}),a?b("React").createElement(q,{imageUrl:a}):null,b("React").createElement(r,{hasIcon:!!a,title:c&&c.title}))};p.prototype.$1=function(){switch(this.props.option.content_type){case"p2p_payment":case"location":case"open_camera":return!1;case"branded_camera":case"ride_service":case"sticker":return!0;case"record_audio":var a=navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return!a;default:return!1}};function p(){l.apply(this,arguments)}p.propTypes={option:c.object.isRequired,imageUrl:b("validateImageSrcPropType"),onClick:c.func.isRequired};m=babelHelpers.inherits(q,b("React").Component);m&&m.prototype;q.prototype.render=function(){var a=this.props.imageUrl,c=b("MessengerEnvironment").messengerui;return b("React").createElement(b("Image.react"),{src:a,className:(c?"_10-a":"")+(c?"":" _10-9")+(c?"":" _3-8h")})};function q(){m.apply(this,arguments)}q.propTypes={imageUrl:b("validateImageSrcPropType")};n=babelHelpers.inherits(r,b("React").Component);n&&n.prototype;r.prototype.render=function(){var a=this.props,c=a.hasIcon;a=a.title;var d=b("MessengerEnvironment").messengerui;return b("React").createElement("div",{className:(d?"_10-e":"")+(d&&c?" _10-f":"")+(d&&c?" _3-91":"")+(d?"":" _10-c")+(!d&&c?" _10-d":"")+(!d&&c?" _3-90":"")},a)};function r(){n.apply(this,arguments)}r.propTypes={hasIcon:c.bool.isRequired,title:c.string.isRequired};e.exports=a}),null);
__d("MessengerDynamicMapReact.bs",["bs_curry","ReasonReact.bs","MessengerDynamicMap.react"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d,e,f,g,h){return b("ReasonReact.bs").wrapJsForReason(b("MessengerDynamicMap.react"),{lat:a,"long":c,onMarkerDragEnd:function(a,c){return b("bs_curry")._1(d,[a,c])},onMarkerDragStart:e,height:f,width:g},h)}f.make=a}),null);
__d("MessengerSendLocationDialogReact.bs",["cx","fbt","bs_block","bs_curry","React","Utils.bs","CurrentUser","ReasonReact.bs","PhotosUploadID","MessengerDialogs.bs","MercuryMessageObject","MessengerDialogReact.bs","MercuryAttachmentType","MercuryMessageActions","MessengerSpinnerReact.bs","MercuryTriodeSourceUtil","MessengerDialogBodyReact.bs","MessengerDynamicMapReact.bs"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i={enableHighAccuracy:!0,timeout:6e4,maximumAge:12e4};function j(){return b("Utils.bs").isTruthy(navigator&&"geolocation"in navigator)}function k(a,b){a=j(0);b=b[1][4][0];if(a&&b){navigator.geolocation.clearWatch(b[0]);return 0}else return 0}function l(a){return b("Utils.bs").$pipe$unknown(a[1],h._("Your Location"))}function m(a,c){__p&&__p();var d=c[3],e=c[1],f=e[0],g=e[2];e=e[3];if(f)return f[0];else{if(g&&e)return b("ReasonReact.bs").element(0,0,b("MessengerDynamicMapReact.bs").make(g[0],e[0],function(a){return b("bs_curry")._1(d,b("bs_block").__(0,[a]))},b("bs_curry")._1(c[0],k),500,500,[]));else f=1;if(f===1)return b("React").createElement("div",{className:"_j4g"},a)}}function n(a){return k(0,a)}function o(a){var c=a[3];if(j(0)){a[1][4][0]=[navigator.geolocation.watchPosition(function(a){return b("bs_curry")._1(c,b("bs_block").__(1,[a]))},function(a){return b("bs_curry")._1(c,b("bs_block").__(2,[a]))},i)];return 0}else return b("bs_curry")._1(c,b("bs_block").__(3,[0]))}function p(){return[0,0,0,0,[0]]}var q=b("ReasonReact.bs").reducerComponent("MessengerSendLocationDialogReact");function r(a,c,d){__p&&__p();var e=function(d,e){__p&&__p();d=e[1];b("MessengerDialogs.bs").removeDialog(0);e=b("CurrentUser").getID();var f=b("MercuryMessageObject").getForFBID(e),g=b("MercuryMessageActions").getForFBID(e),h="upload_"+b("PhotosUploadID").getNewID();e=f.constructAttachmentMessageObject(b("MercuryTriodeSourceUtil").getMercuryTriodeSource(),a);f=d[2];d=d[3];f&&(d&&(e.location_attachment={coordinates:{latitude:f[0],longitude:d[0]},is_current_location:!0}));f={upload_id:h,preview_attachments:[{upload_id:h,attach_type:b("MercuryAttachmentType").PHOTO,preview_uploading:!0}]};g.addAttachmentPlaceholder(e,h,f);g.send(e,function(){g.confirmAttachmentPlaceholder(h,{upload_id:h});return 0},undefined);return b("bs_curry")._1(c,0)},f=function(a){var c=a[1],d=c[0],f=c[2];c=c[3];if(d||!(f&&c))return null;else return b("ReasonReact.bs").element(0,0,b("MessengerDialogReact.bs").Button[0](0,[h._("Send Location")],0,0,[b("bs_curry")._1(a[0],e)],[0],0,0,[]))};return[q[0],q[1],q[2],q[3],o,q[5],n,q[7],function(a){return b("ReasonReact.bs").element(0,0,b("MessengerDialogReact.bs").Dialog[0](0,0,0,0,0,0,[548],[b("ReasonReact.bs").element(0,0,b("MessengerDialogReact.bs").Header[0](0,0,l(a[1]))),b("ReasonReact.bs").element(0,0,b("MessengerDialogBodyReact.bs").make(0,[m(b("ReasonReact.bs").element(0,0,b("MessengerSpinnerReact.bs").make(0,0,0,[])),a)])),b("ReasonReact.bs").element(0,0,b("MessengerDialogReact.bs").Footer[0](0,0,[b("ReasonReact.bs").element(0,0,b("MessengerDialogReact.bs").CancelButton[0](0,[])),f(a)]))]))},p,q[10],function(a,c){switch(a.tag|0){case 0:var d=a[0];return b("bs_block").__(0,[[c[0],c[1],[d[0]],[d[1]],c[4]]]);case 1:d=a[0];return b("bs_block").__(0,[[c[0],c[1],[d.coords.latitude],[d.coords.longitude],c[4]]]);case 2:d=a[0].code;a=d!==1?[h._("Sorry, something went wrong. Please try again or send your location from the Messenger app."),h._("Couldn't Find Location")]:[h._("Messenger needs permission to access your location. Please update your browser settings or use the Messenger app."),h._("Permission Required")];return b("bs_block").__(0,[[[a[0]],[a[1]],c[2],c[3],c[4]]]);case 3:return b("bs_block").__(0,[[[h._("Your browser doesn't support location sharing. You can also send your location from the Messenger app.")],[h._("Location Not Supported")],c[2],c[3],c[4]]])}},q[12]]}a=b("ReasonReact.bs").wrapReasonForJs(q,function(a){return r(a.threadID,a.onCompletion,[])});c=500;d=500;e=b("Utils.bs").$pipe$unknown;f.mapHeight=c;f.mapWidth=d;f.locationOptions=i;f.$pipe$unknown=e;f.isLocationAPISupported=j;f.clearWatchLocation=k;f.getTitle=l;f.getBody=m;f.willUnmount=n;f.didMount=o;f.initialState=p;f.component=q;f.make=r;f.jsComponent=a}),null);
__d("XUIDialogReact.bs",["ReasonReact.bs","bs_js_null_undefined","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIDialogHeader.react","XUIDialogHeaderTitle.react","XUIDialogCancelButton.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){if(a)switch(a[0]){case 0:return["cancel"];case 1:return["confirm"];case 2:return["button"]}else return 0}function h(a){if(a)switch(a[0]){case 0:return["default"];case 1:return["special"];case 2:return["confirm"]}else return 0}function a(a){return b("ReasonReact.bs").wrapJsForReason(b("XUIDialogHeader.react"),{},a)}a=[a];function c(a){return b("ReasonReact.bs").wrapJsForReason(b("XUIDialogHeaderTitle.react"),{},a)}c=[c];function d(a){return b("ReasonReact.bs").wrapJsForReason(b("XUIDialogBody.react"),{},a)}d=[d];function e(a){return b("ReasonReact.bs").wrapJsForReason(b("XUIDialogFooter.react"),{},a)}e=[e];function i(a,c,d,e,f){return b("ReasonReact.bs").wrapJsForReason(b("XUIDialogButton.react"),{action:b("bs_js_null_undefined").fromOption(g(a)),label:b("bs_js_null_undefined").fromOption(c),onClick:b("bs_js_null_undefined").fromOption(d),use:b("bs_js_null_undefined").fromOption(h(e))},f)}i=[i];function j(a){return b("ReasonReact.bs").wrapJsForReason(b("XUIDialogCancelButton.react"),{},a)}j=[j];f.stringOfButtonAction=g;f.stringOfButtonUse=h;f.Header=a;f.HeaderTitle=c;f.Body=d;f.Footer=e;f.Button=i;f.CancelButton=j}),null);
__d("XUISpinnerReact.bs",["ReasonReact.bs","XUISpinner.react"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("ReasonReact.bs").wrapJsForReason(b("XUISpinner.react"),{},a)}f.make=a}),null);
__d("ChatTabSendLocationDialogReact.bs",["fbt","bs_block","bs_curry","React","CurrentUser","ReasonReact.bs","PhotosUploadID","XUIDialogReact.bs","XUISpinnerReact.bs","MercuryMessageObject","MercuryAttachmentType","MercuryMessageActions","MercuryTriodeSourceUtil","MessengerSendLocationDialogReact.bs"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=g._("Send Location"),i=b("ReasonReact.bs").reducerComponent("ChatTabSendLocationDialogReact");function a(a,c,d){__p&&__p();var e=function(d,e){__p&&__p();d=e[1];e=b("CurrentUser").getID();var f=b("MercuryMessageObject").getForFBID(e),g=b("MercuryMessageActions").getForFBID(e),h="upload_"+b("PhotosUploadID").getNewID();e=f.constructAttachmentMessageObject(b("MercuryTriodeSourceUtil").getMercuryTriodeSource(),a);f=d[2];d=d[3];f&&(d&&(e.location_attachment={coordinates:{latitude:f[0],longitude:d[0]},is_current_location:!0}));f={upload_id:h,preview_attachments:[{upload_id:h,attach_type:b("MercuryAttachmentType").PHOTO,preview_uploading:!0}]};g.addAttachmentPlaceholder(e,h,f);g.send(e,function(){g.confirmAttachmentPlaceholder(h,{upload_id:h});return 0},undefined);return b("bs_curry")._1(c,0)},f=function(a){var c=a[1],d=c[0],f=c[2];c=c[3];if(d||!(f&&c))d=1;else return b("ReasonReact.bs").element(0,0,b("XUIDialogReact.bs").Button[0]([0],[h],[b("bs_curry")._1(a[0],e)],[2],[]));if(d===1)return b("ReasonReact.bs").element(0,0,b("XUIDialogReact.bs").CancelButton[0]([]))};return[i[0],i[1],i[2],i[3],b("MessengerSendLocationDialogReact.bs").didMount,i[5],b("MessengerSendLocationDialogReact.bs").willUnmount,i[7],function(a){return b("React").createElement("div",undefined,b("ReasonReact.bs").element(0,0,b("XUIDialogReact.bs").Header[0]([b("ReasonReact.bs").element(0,0,b("XUIDialogReact.bs").HeaderTitle[0](b("MessengerSendLocationDialogReact.bs").getTitle(a[1])))])),b("ReasonReact.bs").element(0,0,b("XUIDialogReact.bs").Body[0](b("MessengerSendLocationDialogReact.bs").getBody(b("ReasonReact.bs").element(0,0,b("XUISpinnerReact.bs").make([])),a))),b("ReasonReact.bs").element(0,0,b("XUIDialogReact.bs").Footer[0](f(a))))},b("MessengerSendLocationDialogReact.bs").initialState,i[10],function(a,c){switch(a.tag|0){case 0:var d=a[0];return b("bs_block").__(0,[[c[0],c[1],[d[0]],[d[1]],c[4]]]);case 1:d=a[0];return b("bs_block").__(0,[[c[0],c[1],[d.coords.latitude],[d.coords.longitude],c[4]]]);case 2:d=a[0].code;a=d!==1?[g._("Sorry, something went wrong. Please try again or send your location from the Messenger app."),g._("Couldn't Find Location")]:[g._("Facebook needs permission to access your location. Please update your browser settings or use the Messenger app."),g._("Permission Required")];return b("bs_block").__(0,[[[a[0]],[a[1]],c[2],c[3],c[4]]]);case 3:return b("bs_block").__(0,[[[g._("Your browser doesn't support location sharing. You can also send your location from the Messenger app.")],[g._("Location Not Supported")],c[2],c[3],c[4]]])}},i[12]]}f.sendButtonTitle=h;f.component=i;f.make=a}),null);
__d("ChatTabSendLocationDialog.bs",["DialogX","ReasonReact.bs","ChatTabSendLocationDialogReact.bs"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d){d=b("ReasonReact.bs").element(0,0,b("ChatTabSendLocationDialogReact.bs").make(a,c,[]));a={width:524};b("DialogX").show(new(b("DialogX"))(a,d));return 0}c=524;f.dialogWidth=c;f.show=a}),null);
__d("MNBotsLoggerEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({BOT_COMPOSER_MENU_ICON_DISPLAYED:"bot_composer_menu_icon_displayed",BOT_COMPOSER_MENU_ICON_TAPPED:"bot_composer_menu_icon_tapped",BOT_COMPOSER_MENU_ITEM_DID_SELECT:"bot_composer_menu_item_did_select",BOT_COMPOSER_QUICK_REPLY_DISPLAYED:"bot_composer_quick_reply_displayed",BOT_COMPOSER_QUICK_REPLY_TAPPED:"bot_composer_quick_reply_tapped"})}),null);
__d("MessengerAskLocationPermissionDialogReact.bs",["fbt","ReasonReact.bs","MessengerDialogs.bs","MessengerDialogReact.bs","MessengerDialogBodyReact.bs","MessengerSendLocationDialogReact.bs"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=g._("Allow Location Access"),i=g._("Giving Messenger access to your location enables features like sharing where you are with friends. You can turn it off anytime."),j=g._("Allow"),k=b("ReasonReact.bs").statelessComponent("MessengerAskLocationPermissionDialogReact");function l(a){if(a)return 0;else return b("MessengerDialogs.bs").removeDialog(0)}function m(a,c){var d=function(){b("MessengerDialogs.bs").removeDialog(0);return b("MessengerDialogs.bs").showDialog(function(){return b("ReasonReact.bs").element(0,0,b("MessengerSendLocationDialogReact.bs").make(a,function(){return 0},[]))})};return[k[0],k[1],k[2],k[3],k[4],k[5],k[6],k[7],function(){return b("ReasonReact.bs").element(0,0,b("MessengerDialogReact.bs").Dialog[0](0,[l],0,0,0,0,0,[b("ReasonReact.bs").element(0,0,b("MessengerDialogReact.bs").Header[0](0,0,h)),b("ReasonReact.bs").element(0,0,b("MessengerDialogBodyReact.bs").make(0,[i])),b("ReasonReact.bs").element(0,0,b("MessengerDialogReact.bs").Footer[0](0,0,[b("ReasonReact.bs").element(0,0,b("MessengerDialogReact.bs").CancelButton[0](0,[])),b("ReasonReact.bs").element(0,0,b("MessengerDialogReact.bs").Button[0](0,[j],0,0,[d],[0],0,0,[]))]))]))},k[9],k[10],k[11],k[12]]}a=b("ReasonReact.bs").wrapReasonForJs(k,function(a){return m(a.threadID,[])});f.title=h;f.message=i;f.buttonLabel=j;f.component=k;f.handleToggle=l;f.make=m;f.jsComponent=a}),null);
__d("MessengerBotsQuickReplyButtonContainer.react",["cx","fbt","BootloadedComponent.react","Bootloader","ChatTabSendLocationDialog.bs","CurrentUser","JSResource","LazyComponent.react","LoadOnRender.react","MercuryIDs","MercuryMessageActions","MercuryMessageObject","MercurySourceType","MessengerAdsWebTypedLogger","MessengerAskLocationPermissionDialogReact.bs","MessengerBotsWebTypedLogger","MessengerBotsQuickReplyButton.react","MessengerContextualDialog.react","MessengerDialogs.bs","MessengerQuickCamActions","MessengerQuickCamOrigins","MessengerEnvironment","MessengerSendLocationDialogReact.bs","MessengerDiscoveryEntryPoint","MessengerDiscoveryEntryPointsLoggingHelper","MessengerSpinner.react","MNBotsLoggerEvents","MNAdsLoggerEventEnum","P2PActions","P2PLogger","P2PPaymentLoggerEvent","P2PPaymentLoggerEventFlow","PECurrency","React","XUIDialog.react","XUISpinner.react","emptyFunction"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("MercuryMessageActions").get(),k=b("MessengerAskLocationPermissionDialogReact.bs").jsComponent,l=b("MessengerSendLocationDialogReact.bs").jsComponent;c=b("React").PropTypes;var m="omni_m",n=function(a){b("Bootloader").loadModules(["MessengerVoiceClipFlyoutReact.bs"],function(b){b=b.jsComponent;return a(b)},"MessengerBotsQuickReplyButtonContainer.react")};d=babelHelpers.inherits(a,b("React").PureComponent);i=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={camDialogOpen:!1,voiceDialogOpen:!1},this.$1=!1,this.$2=null,this.$7=function(){var a=new(b("MercuryMessageObject"))(b("CurrentUser").getID()),c=this.props.option,d=this.props.threadID;j.send(a.constructCTAConfirmationMessageObject(c.title,b("MercurySourceType").TITAN_WEB,d,c,[b("MessengerDiscoveryEntryPointsLoggingHelper").getEntryPointsLoggingTagStr([b("MessengerDiscoveryEntryPoint").CLICK_TO_MESSENGER_AD_MESSENGER_DEEPLINK_ADS,"quick_reply_messages"])]));new(b("MessengerBotsWebTypedLogger"))().setEvent(b("MNBotsLoggerEvents").BOT_COMPOSER_QUICK_REPLY_TAPPED).setPageID(b("MercuryIDs").getUserIDFromThreadID(d)).setPayload(c.payload).setTitle(c.title).setQrContentType(c.content_type).setIndex(this.props.index.toString()).log();this.props.isSponsored&&new(b("MessengerAdsWebTypedLogger"))().setEvent(b("MNAdsLoggerEventEnum").QUICK_REPLY_TAPPED).setIsSponsored(this.props.isSponsored).setMessageID(this.props.messageId).setPageID(this.props.pageId).setIndex(this.props.index.toString()).log()}.bind(this),this.$3=function(){var a=b("MessengerEnvironment").messengerui;a?navigator&&"permissions"in navigator?navigator.permissions.query({name:"geolocation"}).then(function(a){a=a&&a.state;a==="prompt"?b("MessengerDialogs.bs").showDialog(function(){return b("React").createElement(k,{threadID:this.props.threadID})}.bind(this)):b("MessengerDialogs.bs").showDialog(function(){return b("React").createElement(l,{threadID:this.props.threadID,onCompletion:b("emptyFunction")})}.bind(this))}.bind(this)).done():b("MessengerDialogs.bs").showDialog(function(){return b("React").createElement(l,{threadID:this.props.threadID,onCompletion:b("emptyFunction")})}.bind(this)):b("ChatTabSendLocationDialog.bs").show(this.props.threadID,b("emptyFunction"))}.bind(this),this.$5=function(){var a=this.props,c=a.option;a=a.threadID;var d=c&&c.data&&c.data.payment_amount,e=c&&c.data&&c.data.payment_currency;c=c&&c.data&&c.data.payment_type;var f={referrer:m,threadID:a,openRequestTab:c==="request",onCompletion:b("emptyFunction")};d&&e&&(f.amount=b("PECurrency").formatAmount(e,d,!1,!1,!1,!1));b("P2PLogger").log(b("P2PPaymentLoggerEvent").UI_ACTN_SEND_MONEY_OMNIM_SUGGESTION_CLICKED,{www_event_flow:c==="request"?b("P2PPaymentLoggerEventFlow").UI_FLOW_P2P_REQUEST:b("P2PPaymentLoggerEventFlow").UI_FLOW_P2P_SEND,amount:d,currency:e,object_id:b("MercuryIDs").getThreadFBIDFromThreadID(a)});b("P2PActions").chatSendViewOpened(f)}.bind(this),this.$4=function(a){if(this.state.camDialogOpen)return;a.stopPropagation();this.setState(function(a){return{camDialogOpen:!a.camDialogOpen}})}.bind(this),this.$8=function(){__p&&__p();var a=new(b("MercuryMessageObject"))(b("CurrentUser").getID()),c=this.props,d=c.option,e=c.viewerEmail;c=c.viewerPhone;var f=this.props.threadID,g=null;switch(d.content_type){case"user_email":g=e;break;case"user_phone_number":g=c;break;default:break}if(g===null)return;e=d;e.external_payload=e.payload;e.payload=g;j.send(a.constructCTAConfirmationMessageObject(g,b("MercurySourceType").TITAN_WEB,f,e));new(b("MessengerBotsWebTypedLogger"))().setEvent(b("MNBotsLoggerEvents").BOT_COMPOSER_QUICK_REPLY_TAPPED).setPageID(b("MercuryIDs").getUserIDFromThreadID(f)).setQrContentType(d.content_type).setIndex(this.props.index.toString()).log()}.bind(this),this.$15=function(){this.state.camDialogOpen&&this.setState({camDialogOpen:!1})}.bind(this),this.$16=function(a){!a?this.$15():b("MessengerQuickCamActions").requestUserMedia(this.props.viewer,this.props.threadID)}.bind(this),this.$6=function(a){a.stopPropagation();if(this.state.voiceDialogOpen||this.$1)return;this.setState(function(a){return{voiceDialogOpen:!a.voiceDialogOpen}})}.bind(this),this.$9=function(a){this.$1=this.state.voiceDialogOpen}.bind(this),this.$12=function(a){this.setState({voiceDialogOpen:a})}.bind(this),this.$13=function(){this.setState({voiceDialogOpen:!1})}.bind(this),this.$14=function(a){this.setState({voiceDialogOpen:!1}),this.props.onVoiceClipCreate&&this.props.onVoiceClipCreate(a)}.bind(this),c}a.prototype.render=function(){__p&&__p();var a=this.props,c=a.option,d=a.viewerEmail;a=a.viewerPhone;if(c.content_type==="user_email"&&d===null||c.content_type==="user_phone_number"&&a===null)return null;var e={branded_camera:b("emptyFunction"),location:this.$3,open_camera:this.$4,p2p_payment:this.$5,record_audio:this.$6,ride_service:b("emptyFunction"),sticker:b("emptyFunction"),text:this.$7,user_email:this.$8,user_phone_number:this.$8},f={record_audio:this.$9};e=e[c.content_type];f=f[c.content_type];var g=null;c.content_type==="open_camera"&&this.state.camDialogOpen?g=this.props.quickCamOriginLocation===b("MessengerQuickCamOrigins").MESSENGER?this.$10():this.$11():c.content_type==="record_audio"&&this.state.voiceDialogOpen&&(g=b("React").createElement(b("MessengerContextualDialog.react"),{contextRef:function(){return this.$2}.bind(this),shown:this.state.voiceDialogOpen,onToggle:this.$12,onBlur:this.$13},b("React").createElement(b("LoadOnRender.react"),{component:b("React").createElement(b("LazyComponent.react"),{onCancel:this.$13,onStopAndGetVoiceClip:this.$14}),loader:n,placeholder:b("React").createElement("div",{style:{padding:"30px",textAlign:"center"}},b("React").createElement(b("MessengerSpinner.react"),{color:"grey"}))})));var h=null;switch(c.content_type){case"user_email":h=d;break;case"user_phone_number":h=a;break;default:break}return b("React").createElement("div",{className:"_4yx8"},b("React").createElement(b("MessengerBotsQuickReplyButton.react"),{isMessengerAdPreview:this.props.isMessengerAdPreview,onClick:e,onMouseDown:f,option:c,className:this.props.className,ref:function(a){this.$2=a}.bind(this),userData:h}),g)};a.prototype.$10=function(){var a=window.innerWidth/3;return b("React").createElement(b("BootloadedComponent.react"),{bootloadPlaceholder:b("React").createElement("div",{style:{padding:"30px",textAlign:"center"}},b("React").createElement(b("MessengerSpinner.react"),null)),bootloadLoader:b("JSResource")("MessengerDialog.react").__setRef("MessengerBotsQuickReplyButtonContainer.react"),overflow:"hidden",shown:this.state.camDialogOpen,onBlur:this.$15,onToggle:this.$16,width:400>a?400:a},b("React").createElement(b("BootloadedComponent.react"),{bootloadPlaceholder:b("React").createElement("div",{style:{padding:"30px",textAlign:"center"}},b("React").createElement(b("MessengerSpinner.react"),null)),bootloadLoader:b("JSResource")("MessengerQuickCamDialog.react").__setRef("MessengerBotsQuickReplyButtonContainer.react"),location:this.props.quickCamOriginLocation,onShown:function(a){this.$16(!0)}.bind(this),onHidden:this.$15,onEscKeyDown:this.$15,shown:this.state.camDialogOpen,threadID:this.props.threadID,viewer:this.props.viewer}))};a.prototype.$11=function(){var a=window.innerWidth/3;return b("React").createElement(b("XUIDialog.react"),{label:h._("Take a photo"),overflow:"hidden",shown:this.state.camDialogOpen,onBlur:this.$15,hideOnEscape:!0,onToggle:this.$16,width:400>a?400:a},b("React").createElement(b("BootloadedComponent.react"),{bootloadPlaceholder:b("React").createElement("div",{style:{padding:"30px",textAlign:"center"}},b("React").createElement(b("XUISpinner.react"),null)),bootloadLoader:b("JSResource")("MessengerQuickCamDialog.react").__setRef("MessengerBotsQuickReplyButtonContainer.react"),location:this.props.quickCamOriginLocation,onShown:function(a){this.$16(!0)}.bind(this),onHidden:this.$15,onEscKeyDown:this.$15,shown:this.state.camDialogOpen,threadID:this.props.threadID,viewer:this.props.viewer}))};a.propTypes={className:c.string,index:c.number.isRequired,onVoiceClipCreate:c.func,option:c.object.isRequired,threadID:c.string.isRequired,quickCamOriginLocation:c.oneOf(b("MessengerQuickCamOrigins").getValues()).isRequired,viewer:c.string.isRequired,messageId:c.string.isRequired,pageId:c.string.isRequired,isMessengerAdPreview:c.bool,isSponsored:c.bool,viewerEmail:c.string,viewerPhone:c.string};e.exports=a}),null);
__d("MessengerBotsQuickReplyButtonList.react",["cx","AdsArrowedCarouselEnhanced.react","MessengerBotsQuickReplyButtonContainer.react","MessengerBotsWebTypedLogger","MessengerEnvironment","MessengerQuickCamOrigins","MNBotsLoggerEvents","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").PureComponent);h&&h.prototype;a.prototype.componentDidMount=function(){new(b("MessengerBotsWebTypedLogger"))().setEvent(b("MNBotsLoggerEvents").BOT_COMPOSER_QUICK_REPLY_DISPLAYED).setPageID(this.props.pageId).log()};a.prototype.render=function(){return b("React").createElement(b("AdsArrowedCarouselEnhanced.react"),null,this.$1())};a.prototype.$1=function(){var a=this.props.options,c=b("MessengerEnvironment").messengerui;return a.map(function(a,d){return b("React").createElement("div",{className:(c?"_1nl7":"")+(c?"":" _1nl8"),key:d},b("React").createElement(b("MessengerBotsQuickReplyButtonContainer.react"),{option:a,onVoiceClipCreate:this.props.onVoiceClipCreate,threadID:this.props.threadID,index:d,viewer:this.props.viewer,quickCamOriginLocation:this.props.quickCamOriginLocation,messageId:this.props.messageId,pageId:this.props.pageId,isMessengerAdPreview:this.props.isMessengerAdPreview,isSponsored:this.props.isSponsored,viewerEmail:this.props.viewerEmail,viewerPhone:this.props.viewerPhone}))}.bind(this))};function a(){h.apply(this,arguments)}a.propTypes={options:c.array.isRequired,onVoiceClipCreate:c.func,threadID:c.string.isRequired,quickCamOriginLocation:c.oneOf(b("MessengerQuickCamOrigins").getValues()).isRequired,viewer:c.string.isRequired,messageId:c.string.isRequired,pageId:c.string.isRequired,isMessengerAdPreview:c.bool,isSponsored:c.bool,viewerEmail:c.string,viewerPhone:c.string};e.exports=a}),null);