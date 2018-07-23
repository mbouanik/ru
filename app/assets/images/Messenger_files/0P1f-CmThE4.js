if (self.CavalryLogger) { CavalryLogger.start_js(["dlhV1"]); }

__d("WorkplaceChatUpsellBanner.react",["ix","cx","fbt","Promise","BasicFBNux","Bootloader","Event","Image.react","Link.react","React","UserAgent","WorkNuxID","XUIButton.react","XWorkplaceDesktopDownloadController","fbglyph","promiseDone"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k="https://play.google.com/store/apps/details?id=com.facebook.workchat",l="https://itunes.apple.com/app/work-chat/id958124798";c=babelHelpers.inherits(a,b("React").PureComponent);j=c&&c.prototype;function a(){j.constructor.call(this),this.state={xOutAppUpsell:!1}}a.prototype.componentDidMount=function(){this.$2()};a.prototype.render=function(){return b("React").createElement("div",{className:"_3ej0"+(this.state.xOutAppUpsell?" _3ej2":"")},i._("Get the app and chat anywhere, anytime"),this.$3(),this.$4())};a.prototype.$3=function(){var a=null;b("UserAgent").isPlatform("Mac OS X")?a=b("XWorkplaceDesktopDownloadController").getURIBuilder().setString("file","mac").setString("ref","chat_upsell").getURI():b("UserAgent").isPlatform("Windows")&&(a=b("XWorkplaceDesktopDownloadController").getURIBuilder().setString("file","win").setString("ref","chat_upsell").getURI());return b("React").createElement("div",{className:"_3-9a"},a?this.$5(a.toString(),i._("Desktop App")):null,this.$5(l,i._("iOS")),this.$5(k,i._("Android")))};a.prototype.$5=function(a,c){return b("React").createElement(b("XUIButton.react"),{target:"_blank",className:"_3ej4",label:c,href:a,onClick:function(){return this.$6(c)}.bind(this)})};a.prototype.$4=function(){return b("React").createElement(b("Link.react"),{onClick:function(){return this.$7()}.bind(this)},b("React").createElement(b("Image.react"),{className:"_3-8w _3-90 _3ej3",alt:"X",src:g("114703")}))};a.prototype.$7=function(){this.$8(),this.setState({xOutAppUpsell:!0}),setTimeout(function(){return b("Event").fire(window,"resize")},300)};a.prototype.$6=function(a){b("promiseDone")(this.$9(),function(b){var c=b.logger;b=b.actions;c.clear();c.setAction(b.CHAT_APP_UPSELL_BANNER_BUTTON_CLICKED).addToExtraData("button",a.toString()).log()})};a.prototype.$8=function(){b("promiseDone")(this.$9(),function(a){var b=a.logger;a=a.actions;b.clear();b.setAction(a.CHAT_APP_UPSELL_BANNER_DISMISSED).log()})};a.prototype.$2=function(){b("BasicFBNux").onView(b("WorkNuxID").WORK_CHAT_DOWNLOAD_UPSELL_BANNER),b("promiseDone")(this.$9(),function(a){var b=a.logger;a=a.actions;b.clear();b.setAction(a.CHAT_APP_UPSELL_BANNER_SHOWN).log()})};a.prototype.$9=function(){this.$1||(this.$1=new(b("Promise"))(function(a,c){b("Bootloader").loadModules(["WorkOnboardingTypedLogger","WorkOnboardingLogAction"],function(b,c){b=new b();a({logger:b,actions:c})},"WorkplaceChatUpsellBanner.react")}));return this.$1};e.exports=a}),null);