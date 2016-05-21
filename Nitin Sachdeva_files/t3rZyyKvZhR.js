/*1461500952,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["LlbV6"]); }

__d('NotificationCounter',['Arbiter','DocumentTitle','JSLogger'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={messages:0,notifications:0,requests:0},i={init:function(){c('Arbiter').subscribe('update_title',this._handleUpdate.bind(this));c('Arbiter').subscribe('jewel/count-updated',this._handleCountUpdate.bind(this));},getCount:function(){var j=0;for(var k in h){var l=Number(h[k]);if(typeof h[k]=='string'&&isNaN(l))return h[k];if(isNaN(l)||l<0){c('JSLogger').create('jewels').error('bad_count',{jewel:k,count:h[k]});continue;}j+=l;}return j;},updateTitle:function(){var j=this.getCount(),k=c('DocumentTitle').get();k=j?'('+j+') '+k:k;c('DocumentTitle').set(k,true);},_handleCountUpdate:function(j,k){h[k.jewel]=k.count;this.updateTitle();},_handleUpdate:function(j,k){this.updateTitle();}};f.exports=i;},null);
__d("XNotificationsSyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/notifications\/sync\/",{lastSync:{type:"Int",required:true}});},null);
__d('NotificationSync',['Arbiter','AsyncRequest','ChannelConstants','JSLogger','NotificationConstants','NotificationUpdates','XNotificationsSyncController'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('JSLogger').create('notifications'),i='channel_reload',j=0;function k(p){var q=c('NotificationUpdates').getserverTime()?c('NotificationUpdates').getserverTime():j,r=c('XNotificationsSyncController').getURIBuilder().setInt('lastSync',q).getURI();p.setHandler(l).setOption('suppressErrorAlerts',true).setErrorHandler(m).setMethod('GET').setReadOnly(true).setURI(r).setAllowCrossPageTransition(true);}function l(p){var q=p.getPayload();if(q.syncPayload)c('NotificationUpdates').handleUpdate(c('NotificationConstants').PayloadSourceType.SYNC,q.syncPayload);}function m(p){}function n(){var p=new (c('AsyncRequest'))();p.setIsBackgroundRequest(true);k(p);p.send();h.bump(i);}var o={setup:function(p){j=p;c('Arbiter').subscribe(c('ChannelConstants').ON_INVALID_HISTORY,n);}};f.exports=o;},null);
__d('NotificationJewelController',['Arbiter','Event','NotificationConstants','NotificationCounter','NotificationSeenState','NotificationStore','NotificationSync','NotificationUpdates','createObjectFrom','curry'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=0;function i(k){c('Arbiter').inform('jewel/count-updated',{jewel:k,count:c('NotificationSeenState').getUnseenIDs().length},c('Arbiter').BEHAVIOR_STATE);}function j(k,l,m,n,o){'use strict';var p=null;if(l.list&&l.unseenNotifs&&l.startTime){p=l.list;m=l.unseenNotifs;n=l.startTime;}else p=l;if(o)c('NotificationStore').registerEndpoint(o);c('NotificationCounter').init();var q=c('Event').listen(k.getRoot(),'mouseover',function(){q.remove();q=null;p.open();});if(k.isOpen()){p.open();}else var r=k.subscribe('opened',function(){r.unsubscribe();r=null;p.open();});var s=p.pause.bind(p);k.subscribe('opened',function(){setTimeout(s,0);i(k.name);});k.subscribe('closed',function(){p.unpause();i(k.name);});c('NotificationUpdates').subscribe('seen-state-updated',c('curry')(i,k.name));c('NotificationUpdates').handleUpdate(c('NotificationConstants').PayloadSourceType.INITIAL_LOAD,{seenState:c('createObjectFrom')(m,h)});c('NotificationSync').setup(n);i(k.name);}f.exports=j;},null);