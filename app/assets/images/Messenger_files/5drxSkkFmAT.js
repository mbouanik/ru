if (self.CavalryLogger) { CavalryLogger.start_js(["4VSDe"]); }

__d("Chromedome",["fbt"],(function(a,b,c,d,e,f,g){__p&&__p();f.start=function(a){__p&&__p();if(a.off||top!==window||!/(^|\.)facebook\.(com|sg)$/.test(document.domain))return;var b=a.stop||g._("Stop!"),c=a.text||g._("This is a browser feature intended for developers. If someone told you to copy-paste something here to enable a Facebook feature or \"hack\" someone's account, it is a scam and will give them access to your Facebook account."),d=a.more||g._("See {url} for more information.",[g._param("url","https://www.facebook.com/selfxss")]);if((window.chrome||window.safari)&&!a.textonly){var e="font-family:helvetica; font-size:20px; ";[[b,a.c1||e+"font-size:50px; font-weight:bold; color:red; -webkit-text-stroke:1px black;"],[c,a.c2||e],[d,a.c3||e],["",""]].map(function(a){setTimeout(console.log.bind(console,"\n%c"+a[0],a[1]))})}else{b=[""," .d8888b.  888                       888","d88P  Y88b 888                       888","Y88b.      888                       888",' "Y888b.   888888  .d88b.  88888b.   888','    "Y88b. 888    d88""88b 888 "88b  888','      "888 888    888  888 888  888  Y8P',"Y88b  d88P Y88b.  Y88..88P 888 d88P",' "Y8888P"   "Y888  "Y88P"  88888P"   888',"                           888","                           888","                           888"];a=(""+c).match(/.{35}.+?\s+|.+$/g);e=Math.floor(Math.max(0,(b.length-a.length)/2));for(var c=0;c<b.length||c<a.length;c++){var f=b[c];b[c]=f+new Array(45-f.length).join(" ")+(a[c-e]||"")}console.log("\n\n\n"+b.join("\n")+"\n\n"+d+"\n");return}}}),null);