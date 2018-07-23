if (self.CavalryLogger) { CavalryLogger.start_js(["dY5Bj"]); }

__d("MessengerFolders.bs",["MessagingTag","MercuryFoldersConfig"],(function(a,b,c,d,e,f){"use strict";__p&&__p();d=[b("MessagingTag").INBOX,b("MessagingTag").PENDING,b("MessagingTag").OTHER,b("MessagingTag").ACTION_ARCHIVED];var g=d.filter(function(a){if(a===b("MessagingTag").PENDING)return!b("MercuryFoldersConfig").hide_message_filtered;else if(a===b("MessagingTag").OTHER)return!b("MercuryFoldersConfig").hide_message_requests;else return!0});function a(){return[].concat(g)}function c(a){if(a.is_archived)return b("MessagingTag").ACTION_ARCHIVED;else return a.folder}f.getSupportedFolders=a;f.getFromMeta=c}),null);
__d("PageMessageEnumTag",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FLAG:"flag",IMPORTANT:"important",LOW_VALUE:"low_value",SPAM_SPOOFING:"spam_spoofing",JOB_APPLICATION:"job_application",CONFIRMED_APPOINTMENT:"confirmed_appointment",PENDING_APPOINTMENT:"pending_appointment",REQUESTED_APPOINTMENT:"requested_appointment",MESSENGER_ADS:"messenger_ads"})}),null);
__d("MercuryOrderedThreadlist",["invariant","ChatReliabilityInstrumentation","LogHistory","MercuryActionType","MercuryAPIArgsSource","MercuryDispatcher","MercuryFilters.bs","MercuryPayloadSource","MercuryServerRequests","MercurySingletonProvider","MercuryThreadIDMap","MercuryThreadInformer","MessagingTag","MessengerFolders.bs","MessengerState.bs","PageMessageEnumTag","RangedCallbackManager"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("LogHistory").getInstance("ordered_threadlist_model"),i=b("MercuryFilters.bs").getSupportedFilters().concat([b("MercuryFilters.bs").all,b("MessagingTag").GROUPS]),j=b("MessengerFolders.bs").getSupportedFolders().concat([b("MessagingTag").SPAM,b("MessagingTag").PAGE_BACKGROUND]);a.getForFBID=function(a){return l.getForFBID(a)};a.get=function(){return l.get()};function a(a){__p&&__p();this.$1=a,this.$2=b("MercuryThreadIDMap").getForFBID(this.$1),this.$3=b("MercuryThreadInformer").getForFBID(this.$1),this.$4=b("MercuryDispatcher").getForFBID(this.$1),this.$5={},this.$7(),this.$6=new(b("RangedCallbackManager"))(function(a){a=b("MessengerState.bs").getThreadMetaNow(this.$1,a);return a}.bind(this),function(a,b){return 0},this.$2.canLinkExternally.bind(this.$2)),this.$4.subscribe("update-threadlist",function(a,b){__p&&__p();if(!k(b))return;a=b.ordered_threadlists;var c=b.pinned_thread_ids;c&&c.length&&this.$6.addResources(c);if(a&&a.length)this.$8(a);else{c=(b.actions||[]).filter(function(a){return a.thread_id});this.$9(b.threads||[]);this.$10(c)}this.$3.updatedThreadlist()}.bind(this)),this.$4.subscribe("invalidate-global-state",function(){return this.$11()}.bind(this))}a.prototype.getThreadlistOrderMap=function(a,c){this.$5[a][c]||(i=i.concat([c]),j.forEach(function(a){this.$5[a][c]=new(b("RangedCallbackManager"))(function(a){a=b("MessengerState.bs").getThreadMetaNow(this.$1,a);return a&&a.timestamp}.bind(this),function(a,b){return b-a},this.$2.canLinkExternally.bind(this.$2))}.bind(this)));return this.$5[a][c]};a.prototype.getPinnedThreadlist=function(){return this.$6.getAllResources()};a.prototype.getThreadlist=function(a,c,d,e,f,g){return this.getFilteredThreadlist(a,c,d,b("MercuryFilters.bs").all,e,f,g)};a.prototype.getFilteredThreadlist=function(a,c,d,e,f,g,i){__p&&__p();var j=this.getThreadlistOrderMap(d,e);f=j.executeOrEnqueue(a,c,f,g);g=j.getUnavailableResources(f);if(g.length){if(j.getCurrentArraySize()<a){a={start:a,limit:c,filter:e,resources_size:j.getCurrentArraySize()};h.warn("range_with_gap",JSON.stringify(a))}this.getServerRequests().fetchThreadlistInfo(j.getCurrentArraySize(),g.length,d,e==b("MercuryFilters.bs").all?null:e,i,this.$12(j.getAllResources()))}return f};a.prototype.loadPinnedThreadlist=function(){this.getServerRequests().fetchPinnedThreadlistInfo()};a.prototype.getServerRequests=function(){return b("MercuryServerRequests").getForFBID(this.$1)};a.prototype.getThreadlistUntilTimestamp=function(a,c,d){d=d||b("MercuryFilters.bs").all;return this.getThreadlistOrderMap(c,d).getElementsUntil(a)};a.prototype.getAvailableThreadlistNow=function(a,c){c=c||b("MercuryFilters.bs").all;return this.getThreadlistOrderMap(a,c).getAllResources()};a.prototype.getThreadCount=function(a,c){c=c||b("MercuryFilters.bs").all;return this.getThreadlistOrderMap(a,c).getCurrentArraySize()};a.prototype.hasLoadedThreadlist=function(a,c){c=c||b("MercuryFilters.bs").all;return this.getThreadlistOrderMap(a,c).hasReachedEndOfArray()};a.prototype.unsubscribe=function(a,c,d){d=d||b("MercuryFilters.bs").all,this.getThreadlistOrderMap(c,d).unsubscribe(a)};a.prototype.$11=function(){this.$5={},this.$7()};a.prototype.$7=function(){j.forEach(function(a){this.$5[a]={},i.forEach(function(c){this.$5[a][c]=new(b("RangedCallbackManager"))(function(a){a=b("MessengerState.bs").getThreadMetaNow(this.$1,a);return a&&a.timestamp}.bind(this),function(a,b){return b-a},this.$2.canLinkExternally.bind(this.$2))}.bind(this))}.bind(this))};a.prototype.$13=function(a,c,d){var e=b("MessengerState.bs").getThreadMetaNow(this.$1,a);return!!(e&&e.timestamp&&d&&c&&this.$14(a)==c&&this.$15(a).includes(d))};a.prototype.$16=function(a,c,d){__p&&__p();var e=[],f=!1;a=(a||[]).filter(function(a){var e=a.filter||b("MercuryFilters.bs").all;return(a.folder==c||!a.folder&&c==b("MessagingTag").INBOX)&&e==d});var g=this.$5[c][d].getAllResources(),i;a.forEach(function(a){e=e.concat(a.thread_ids);var c=a.end-a.start;c!==a.limit&&b("ChatReliabilityInstrumentation").logERROR("inconsistent size: requested_size is "+c+" limit is: "+a.limit);a.thread_ids.length<c&&(f=!0);(!i||a.end>i)&&(i=a.end)});this.$17(e,c,d);if(f)this.$5[c][d].setReachedEndOfArray();else{a=this.$5[c][d].getCurrentArraySize();if(i&&a<i){var j={};g=g.concat(e);g=g.filter(function(a){var b=j[a];j[a]=!0;return b});g.length&&(h.warn("duplicate_threads",JSON.stringify({folder:c,expected_final_size:i,actual_final_size:a,duplicate_thread_ids:g})),this.getServerRequests().fetchThreadlistInfo(i,g.length,c,d==b("MercuryFilters.bs").all?null:d,b("MercuryAPIArgsSource").MERCURY,this.$12(this.$5[c][d].getAllResources())))}}};a.prototype.$8=function(a){j.forEach(function(b){i.forEach(function(c){this.$16(a,b,c)}.bind(this))}.bind(this))};a.prototype.$10=function(a){__p&&__p();var c={};j.forEach(function(a){c[a]={},i.forEach(function(b){c[a][b]={to_add:[],to_remove:[],to_remove_if_last_after_add:{}}})});a.forEach(function(a){__p&&__p();var d=a.thread_id;this.$18(d,function(e){__p&&__p();this.$19(d,function(f){__p&&__p();var h=function(){f.forEach(function(a){if(!i.includes(a))return;!e&&g(0);c[e][a].to_add.push(d);!this.$5[e][a].hasReachedEndOfArray()&&!this.$5[e][a].hasResource(d)&&(c[e][a].to_remove_if_last_after_add[d]=!0)}.bind(this))}.bind(this);function k(a){!e&&g(0),i.includes(a)&&(f.includes(a)?c[e][a].to_add.push(d):c[e][a].to_remove.push(d))}if(!e){(a.action_type===b("MercuryActionType").CHANGE_FOLDER||a.action_type===b("MercuryActionType").CHANGE_ARCHIVED_STATUS)&&j.forEach(function(a){a!==e&&i.forEach(function(b){this.$5[a][b].removeResources([d])}.bind(this))}.bind(this));return}!e&&g(0);switch(a.action_type){case b("MercuryActionType").DELETE_THREAD:f.forEach(function(a){if(!i.includes(a))return;c[e][a].to_remove.push(d)});break;case b("MercuryActionType").CHANGE_ARCHIVED_STATUS:case b("MercuryActionType").CHANGE_FOLDER:h();break;case b("MercuryActionType").CHANGE_READ_STATUS:k(b("MessagingTag").UNREAD);break;case b("MercuryActionType").USER_GENERATED_MESSAGE:case b("MercuryActionType").LOG_MESSAGE:f.forEach(function(a){if(!i.includes(a))return;this.$13(d,e,a)&&c[e][a].to_add.push(d)}.bind(this));break;case b("MercuryActionType").CHANGE_FLAG:k(b("PageMessageEnumTag").FLAG);break}}.bind(this))}.bind(this));if(a.action_type===b("MercuryActionType").CHANGE_PINNED_STATUS){var e=a.thread_id,f=a.is_pinned;f?this.$6.addResources([e]):this.$6.removeResources([e])}}.bind(this));j.forEach(function(a){__p&&__p();i.forEach(function(b){var d=this.$5[a][b];this.$17(c[a][b].to_add,a,b);for(var e=d.getCurrentArraySize()-1;e>=0;e--){var f=d.getResourceAtIndex(e);if(!c[a][b].to_remove_if_last_after_add[f])break;c[a][b].to_remove.push(f)}d.removeResources(c[a][b].to_remove)}.bind(this))}.bind(this))};a.prototype.$9=function(a){__p&&__p();var b={};j.forEach(function(a){b[a]={},i.forEach(function(c){b[a][c]=[]})});a.forEach(function(a){this.$18(a.thread_id,function(c){this.$19(a.thread_id,function(d){c&&d.forEach(function(d){this.$13(a.thread_id,c,d)&&b[c][d].push(a.thread_id)}.bind(this))}.bind(this))}.bind(this))}.bind(this));j.forEach(function(a){i.forEach(function(c){b[a][c].length>0&&this.$17(b[a][c],a,c)}.bind(this))}.bind(this))};a.prototype.$17=function(a,c,d){d=d||b("MercuryFilters.bs").all,this.$5[c][d].addResources(a),j.forEach(function(b){b!=c&&this.$5[b][d].removeResources(a)}.bind(this))};a.prototype.$18=function(a,c){b("MessengerState.bs").getThreadMeta(this.$1,a,function(b){c(this.$14(a,b))}.bind(this))};a.prototype.$14=function(a,c){__p&&__p();c=c||b("MessengerState.bs").getThreadMetaNow(this.$1,a);var d=null;!c?d="No thread metadata":c.folder||(d="No thread folder");if(d){d={error:d,tid:a};h.warn("no_thread_folder",JSON.stringify(d));return null}!c&&g(0);a=c.folder;c.is_archived&&(a=b("MessagingTag").ACTION_ARCHIVED);if(this.$5[a])return a;else return null};a.prototype.$19=function(a,c){b("MessengerState.bs").getThreadMeta(this.$1,a,function(b){c(this.$15(a,b))}.bind(this))};a.prototype.$15=function(a,c){__p&&__p();c=c||b("MessengerState.bs").getThreadMetaNow(this.$1,a);var d=[b("MercuryFilters.bs").all];if(!c){a={error:"no_thread_metadata",tid:a};h.warn("no_thread_metadata",JSON.stringify(a));return[]}c.unread_count&&d.push(b("MessagingTag").UNREAD);c.is_canonical||d.push(b("MessagingTag").GROUPS);a=c.page_thread_info;a&&a.flagged&&d.push(b("PageMessageEnumTag").FLAG);return d};a.prototype.$12=function(a){var c=null;if(a.length>0){a=b("MessengerState.bs").getThreadMetaNow(this.$1,a[a.length-1]);c=a?a.timestamp:null}return c};function k(a){switch(a.payload_source){case b("MercuryPayloadSource").CLIENT_CHANGE_ARCHIVED_STATUS:case b("MercuryPayloadSource").CLIENT_CHANGE_PINNED_STATUS:case b("MercuryPayloadSource").CLIENT_CHANGE_PAGE_FOLLOW_UP_STATUS:case b("MercuryPayloadSource").CLIENT_CHANGE_READ_STATUS:case b("MercuryPayloadSource").CLIENT_CHANGE_FOLDER:case b("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE:case b("MercuryPayloadSource").CLIENT_DELETE_MESSAGES:case b("MercuryPayloadSource").CLIENT_DELETE_THREAD:case b("MercuryPayloadSource").CLIENT_SEND_MESSAGE:case b("MercuryPayloadSource").SERVER_SEND_MESSAGE:case b("MercuryPayloadSource").SERVER_FETCH_THREADLIST_INFO:case b("MercuryPayloadSource").SERVER_THREAD_SYNC:case b("MercuryPayloadSource").SERVER_INVALIDATE_GLOBAL_STATE:case b("MercuryPayloadSource").CLIENT_UPDATE_COMM_STATUS:return!0;case b("MercuryPayloadSource").SERVER_INITIAL_DATA:return!!a.ordered_threadlists;default:return!1}}var l=new(b("MercurySingletonProvider"))(a);e.exports=a}),null);