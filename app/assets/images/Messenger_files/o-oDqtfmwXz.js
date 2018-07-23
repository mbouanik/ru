if (self.CavalryLogger) { CavalryLogger.start_js(["HOr2x"]); }

__d("Newline.react",[],(function(a,b,c,d,e,f){"use strict";e.exports="br"}),null);
__d("Text.react",[],(function(a,b,c,d,e,f){"use strict";e.exports="span"}),null);
__d("BaseTextWithEntities.react",["Newline.react","React","Text.react","UnicodeUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();c=b("React").PropTypes;function g(a,b){return a.offset===b.offset&&(a.length===0||b.length===0)?a.length-b.length:a.offset-b.offset}function h(a){return[].concat(a.ranges,a.aggregatedRanges,a.imageRanges,a.metaRanges,a.inlineStyleRanges,a.textDelightRanges).filter(Boolean).sort(g)}function i(a,c){a=a.split(/(\r\n|[\r\n])/);var d=[];for(var e=0;e<a.length;e++){var f=a[e];f&&d.push(b("React").createElement(b("React").Fragment,{key:"text"+e},e%2===1?b("React").createElement(b("Newline.react"),null):c(f)))}return d}function a(a){__p&&__p();var c=0,d=null,e=a.text,f=h(a);for(var g=0;g<f.length;g++){var j=f[g];if(j.offset<c)continue;d=d||[];j.offset>c&&d.push(b("React").createElement(b("React").Fragment,{key:"text"+g},i(b("UnicodeUtils").substring(e,c,j.offset),a.textRenderer)));d.push(b("React").createElement(b("React").Fragment,{key:"range"+g},a.rangeRenderer(b("UnicodeUtils").substr(e,j.offset,j.length),j)));c=j.offset+j.length}return b("React").createElement(b("Text.react"),{className:a.className,style:a.style},d,e.length>c?i(b("UnicodeUtils").substr(e,c),a.textRenderer):null)}a.propTypes={aggregatedRanges:c.array,imageRanges:c.array,inlineStyleRanges:c.array,textDelightRanges:c.array,metaRanges:c.array,rangeRenderer:c.func.isRequired,ranges:c.arrayOf(c.shape({length:c.number.isRequired,offset:c.number.isRequired})),text:c.string.isRequired,textRenderer:c.func.isRequired};e.exports=a}),null);
__d("MessengerTextWithEntities.react",["BaseTextWithEntities.react","Link.react","MessengerTextWithEmoticons.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function h(a){return a.replace(/<3\b|&hearts;/g,"\u2665")}c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=function(a){if(this.props.renderEmoticons||this.props.renderEmoji)return b("React").createElement(b("MessengerTextWithEmoticons.react"),{text:a,customSize:this.props.customSize,renderEmoticons:this.props.renderEmoticons,renderEmoji:this.props.renderEmoji});else return h(a)}.bind(this),this.$2=function(a,c){if(this.props.interpolator)return this.props.interpolator(a,c);else return b("React").createElement(b("Link.react"),{href:c.entity},a)}.bind(this),c}a.prototype.render=function(){return b("React").createElement(b("BaseTextWithEntities.react"),babelHelpers["extends"]({},this.props,{aggregatedRanges:this.props.aggregatedRanges,imageRanges:this.props.imageRanges,metaRanges:this.props.metaRanges,rangeRenderer:this.$2,ranges:this.props.ranges,text:this.props.text,textRenderer:this.$1}))};e.exports=a}),null);
__d("MessengerSearchFunnelLoggerConstants",[],(function(a,b,c,d,e,f){"use strict";e.exports={NAME:"WWW_MESSENGER_SEARCH_SESSION_FUNNEL",FETCHED_STATE_IMPRESSION_LIST:"fetched_state_impression_list",LOADING_STATE_IMPRESSION_LIST:"loading_state_impression_list",SEND_SERVER_REQUEST:"send_server_request",WWW_SIDEBAR_TAG:"www",MESSENGER_DOT_COM:"messenger_dot_com",UNIVERSAL_SEARCH:"universal_search",USER_CONTACT:"user_contact",USER_NON_CONTACT:"user_non_contact",GROUP:"group",PAGE:"page",GAME:"game",TINCAN:"tincan",SMS:"sms",SMS_GROUP:"sms_group",COWORKER:"coworker",OTHER:"other"}}),null);
__d("MessengerSearchFunnelLogger",["FunnelLogger","MercuryIDs","MessengerSearchFunnelLoggerConstants"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function a(a,c,d){b("FunnelLogger").startFunnel(a),b("FunnelLogger").addFunnelTag(a,c),b("FunnelLogger").addFunnelTag(a,d),b("FunnelLogger").appendActionIfNew(a,"search_start"),g=[]}function c(a){b("FunnelLogger").appendActionIfNew(a,"search_end"),b("FunnelLogger").endFunnel(a)}function d(a,c){b("FunnelLogger").appendActionWithPayload(a,"initiate_content_search",{query_string:c,impression_list:g}),b("FunnelLogger").endFunnel(a)}function f(a,c,d,e){if(d==null||g==null||g.length===0){b("FunnelLogger").appendActionWithPayload(a,"search_result_error",{error:"threadID or latest impression list are null",thread_id:d,impression_list:g});b("FunnelLogger").endFunnel(a);return}d=b("MercuryIDs").getThreadFBIDFromThreadID(d);b("FunnelLogger").appendActionWithPayload(a,"log_result_selection",{thread_id:d,type:e,rank:g.indexOf(d),search_query:c?c:""})}function h(a,c,d){b("FunnelLogger").appendActionWithPayloadIfNew(a,"loading_state_impression_list",{search_query:c,impression_list:d}),g=d}function i(a,c){b("FunnelLogger").appendActionWithPayload(a,b("MessengerSearchFunnelLoggerConstants").SEND_SERVER_REQUEST,{search_query:c})}function j(a,c,d,e){b("FunnelLogger").appendActionWithPayload(a,c,{search_query:d,impression_list:e}),g=e}function k(a){b("FunnelLogger").appendAction(a,"clear_search_query"),this.endFunnel(a)}e.exports={startFunnel:a,logResultSelection:f,logStartQuery:i,endFunnel:c,logContentSearchInitiation:d,logLoadingStateQuery:h,logUpdateQuery:j,logClearQuery:k}}),null);
__d("getPageIDFromThreadID",["FBIDCheck","MercuryIDs"],(function(a,b,c,d,e,f){"use strict";function a(a){a=b("MercuryIDs").getUserIDFromThreadID(a);return!a||b("FBIDCheck").isUser_deprecated(a)?null:a}e.exports=a}),null);