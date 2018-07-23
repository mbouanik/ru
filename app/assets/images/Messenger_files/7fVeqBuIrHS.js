if (self.CavalryLogger) { CavalryLogger.start_js(["hB9Qv"]); }

__d("SearchI18nMatch",["invariant","SearchI18nArabic","UnicodeCJK","UnicodeHangulKorean","createObjectFrom","mapObject"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=["prefix_hangul_conjoining_jamo","prefix_kana_drop_trailing_latin","prefix_kana_hiragana_to_katakana","search_i18n_prefix_arabic_normalization"];function a(a){this.config=b("createObjectFrom")(h,!1),this.setConfigs(a||{})}a.prototype.setConfigs=function(a){b("mapObject")(a,function(a,b){return this.setConfig(b,a)}.bind(this),this)};a.prototype.setConfig=function(a,b){a in this.config||g(0),this.config[a]=b};a.prototype.prefixMatchPrepare=function(a){a&&(this.config.prefix_hangul_conjoining_jamo&&(a=b("UnicodeHangulKorean").toConjoiningJamo(a)),this.config.prefix_kana_drop_trailing_latin&&(a=b("UnicodeCJK").kanaRemoveTrailingLatin(a)),this.config.prefix_kana_hiragana_to_katakana&&(a=b("UnicodeCJK").hiraganaToKatakana(a)),this.config.search_i18n_prefix_arabic_normalization&&(a=b("SearchI18nArabic").arabicNormalization(a)));return a};a.prototype.prefixMatch=function(a,b){a=this.prefixMatchPrepare(a);b=this.prefixMatchPrepare(b);return a.startsWith(b)};e.exports=a}),18);