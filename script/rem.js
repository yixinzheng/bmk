(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 40 * (clientWidth / 750) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

//清除滚动的时候触发触摸事件
function stopTouchendPropagationAfterScroll(){
	    var locked = false;
	    window.addEventListener('touchmove', function(ev){
	        locked || (locked = true, window.addEventListener('touchend', stopTouchendPropagation, true));
	    }, true);
	    function stopTouchendPropagation(ev){
	        ev.stopPropagation();
	        window.removeEventListener('touchend', stopTouchendPropagation, true);
	        locked = false;
	    }
}

//激活:active状态
document.body.addEventListener('touchstart', function () {});
