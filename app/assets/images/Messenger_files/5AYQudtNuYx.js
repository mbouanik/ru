if (self.CavalryLogger) { CavalryLogger.start_js(["oVusi"]); }

__d("NavigationClickPointHandler",["Event","ScriptPath","collectDataAttributes"],(function(a,b,c,d,e,f){__p&&__p();var g={getClickPointInfo:function(a){__p&&__p();var c=null,d=b("collectDataAttributes")(a,["ft"],["href","data-click"]),e=d.normal.href;if(!e||e==="#")return!1;e=d.normal["data-click"];c===null&&e&&(c={click:e});e=d.ft.tn;c===null&&e&&(c={tn:e});if(c===null&&a.getAttribute){d=a.getAttribute("class");d&&(c={"class":d})}return c}};function a(event){var a=event.target||event.srcElement;a=g.getClickPointInfo(a);a!==!1&&b("ScriptPath").setClickPointInfo(a)}document.documentElement!==null&&b("Event").listen(document.documentElement,{click:a});e.exports=g}),null);