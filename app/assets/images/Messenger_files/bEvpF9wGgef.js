if (self.CavalryLogger) { CavalryLogger.start_js(["jPGC\/"]); }

__d("FantaTypeFileUploader",["immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=Object.freeze({ANIMATED_IMAGE:"animated_image",AUDIO:"audio",FILE:"file",GENERIC_ATTACHMENT:"generic_attachment",IMAGE:"image",VIDEO:"video"});d={uploadedFiles:b("immutable").Map(),uploadingFiles:b("immutable").Map()};g=babelHelpers.inherits(a,b("immutable").Record(d));g&&g.prototype;a.prototype.getTypeIDs=function(a){return this.uploadedFiles.reduce(function(b,c){c.type===a&&c.uploadedID&&(b=b.concat(c.uploadedID));return b},[])};function a(){g.apply(this,arguments)}a.fileTypes=c;e.exports=a}),null);