/*1462290397,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["82CsY"]); }

__d('AdJoinbuttonListener',['CSS','Event'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={listen:function(j){new i(j);}};function i(j){this.join=j;this._clickListener=c('Event').listen(j,'click',function(){c('CSS').toggle(this.join);this._clickListener.remove();this._clickListener=null;}.bind(this));}f.exports=h;},null);
__d('NotificationJewelList.react',['cx','fbt','Animation','Event','NotificationListItem.react','NotificationListPropTypes','React','ReactDOM','ScrollableArea.react','Vector','XUISpinner.react','debounce','getObjectValues','isEmpty'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=160,k=530,l=40,m=64,n=430,o=c('React').createClass({displayName:'NotificationJewelList',propTypes:c('NotificationListPropTypes'),_isLoadingIndicatorVisible:function(){var p=this.refs.loading;if(!p)return false;var q=c('ReactDOM').findDOMNode(this.refs.scrollable),r=c('Vector').getElementDimensions(q).y;if(r===0)return false;var s=c('Vector').getElementPosition(q).y+r,t=c('Vector').getElementPosition(c('ReactDOM').findDOMNode(p)).y;t-=l;return t<s;},_calculateHeight:function(){var p=c('Vector').getViewportDimensions().y,q=Math.min(this.props.maxHeight||k,p-j);if(this.props.upsell)return Math.max(q-m,0);return q;},_keepOnLoading:function(){if(this.isMounted())this.props.afterScroll(this._isLoadingIndicatorVisible());},_renderItems:function(){return c('getObjectValues')(this.props.notifs).map(function(p){var q=p.alert_id;return (c('React').createElement(c('NotificationListItem.react'),babelHelpers['extends']({key:q,visible:!this.props.hiddenState[q],isRead:this.props.readState[q],negativeTracking:this.props.negativeTracking,shortenTimestamp:this.props.shortenTimestamp,onChevronShow:this.props.onChevronShow,onChevronHide:this.props.onChevronHide,paused:this.props.paused,parent:this},p)));}.bind(this));},componentDidMount:function(){var p=c('ReactDOM').findDOMNode(this.refs.scrollable);c('Event').listen(window,'resize',c('debounce')(function(){if(!c('isEmpty')(this.props.notifs))new (c('Animation'))(p).to('height',this._calculateHeight()+'px').duration(100).go();}.bind(this)));},componentDidUpdate:function(p){if(this.props.paused&&!p.paused)if(this.props.shouldScroll&&this.refs.scrollable)this.refs.scrollable.getArea().scrollToTop(false);setTimeout(this._keepOnLoading,0);},render:function(){var p=this.props.notifs,q=null,r=null,s=n,t=null;if(!c('isEmpty')(p)){q=c('React').createElement('ul',{'data-gt':this.props.tracking},this._renderItems());r=this._calculateHeight();}else if(!this.props.canFetchMore)q=c('React').createElement('div',{className:"_572e"},i._("No new notifications"));if(this.props.canFetchMore)t=c('React').createElement(c('XUISpinner.react'),{ref:'loading',className:"jewelLoading"});var u=null;if(this.props.upsell){var v=this.props.upsell.module;u=c('React').createElement(v,this.props.upsell.props);}var w="_50-t"+(this.props.showingChevron?' '+"_2iy1":'');return (c('React').createElement('div',{className:w},c('React').createElement(c('ScrollableArea.react'),{ref:'scrollable',width:s,height:r,fade:true,persistent:true,onScroll:c('debounce')(this._keepOnLoading)},q,t),u));}});f.exports=o;},null);