/*1462335494,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["TJscQ"]); }

__d('RequestsJewel',['RequestsJewelController'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){'use strict';var k=c('RequestsJewelController').create(i.getFlyout(),function(){return i.isOpen();},j.inbox_folder);i.subscribe('marked-seen',function(){return k.markSeen();});i.subscribe('closed',function(){return k.closeHandler();});i.subscribe('opened',function(){return k.openHandler();});}f.exports=h;},null);