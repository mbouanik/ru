if (self.CavalryLogger) { CavalryLogger.start_js(["GIMZS"]); }

__d("HotLikeSound",["MercurySoundsConfig","SoundPlayer","StickerConstants"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[b("MercurySoundsConfig").hot_like_grow_mp3_url,b("MercurySoundsConfig").hot_like_grow_ogg_url],h=[b("MercurySoundsConfig").hot_like_pop_mp3_url,b("MercurySoundsConfig").hot_like_pop_ogg_url],i=[b("MercurySoundsConfig").hot_like_outgoing_small_mp3_url,b("MercurySoundsConfig").hot_like_outgoing_small_ogg_url],j=[b("MercurySoundsConfig").hot_like_outgoing_medium_mp3_url,b("MercurySoundsConfig").hot_like_outgoing_medium_ogg_url],k=[b("MercurySoundsConfig").hot_like_outgoing_large_mp3_url,b("MercurySoundsConfig").hot_like_outgoing_large_ogg_url],l=function(){return!1};a={setCheckSoundEnabledFunc:function(a){l=a},start:function(){this._play(g)},stop:function(){b("SoundPlayer").stop(g)},pop:function(){this.stop(),this._play(h)},snap:function(a){this.stop(),a===b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID&&this._play(i),a===b("StickerConstants").HOT_LIKE_MEDIUM_STICKER_ID&&this._play(j),a===b("StickerConstants").HOT_LIKE_LARGE_STICKER_ID&&this._play(k)},_play:function(a){l()&&b("SoundPlayer").play(a)}};e.exports=a}),null);