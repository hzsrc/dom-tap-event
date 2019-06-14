export function setupDomTap(targetEl) {
  if (targetEl._hasSetup == '1') return
  targetEl._hasSetup = '1'
  var tap = 'tap' //如果用了zepto，为避免tap冲突,可换为mytap
  var tapDelay = 300
  var tapMaxMove = 15; //能触发tap的最大时间间隔和最大位移

  var time, x, y, el;
  targetEl.addEventListener('touchstart', function (e) {
    time = Date.now();
    el = e.target;
    x = e.changedTouches[0].pageX;
    y = e.changedTouches[0].pageY;

    e.target.classList.add('tapping');
    setTimeout(function () {
      e.target.classList.remove('tapping');
    }, tapDelay);
  }, 1)
  targetEl.addEventListener('touchend', function (e) {
    if (el == e.target) {
      var tch = e.changedTouches[0]
      var timespan = Date.now() - time
      var dx = tch.pageX - x
      var dy = tch.pageY - y
      var dt = Math.abs(dx) + Math.abs(dy);
      if (dt < tapMaxMove) {
        if (timespan < tapDelay) {
          fire(tap, e, {})
        }
      } else if (dt > tapMaxMove * 3) {
        var attr = { deltaX: dx, deltaY: dy };
        fire('stroke', e, attr);
      }
    }
  }, 1);

  /*
   基于TouchEvent触发touch类模拟事件
   */
  function fire(evt, e, attr) {
    var tapE = document.createEvent('Event');
    tapE.initEvent(evt, true, true);
    ['touches', 'targetTouches', 'changedTouches'].forEach(function (eAttr) {
      tapE[eAttr] = e[eAttr];
    });
    Object.assign(tapE, attr)
    el.dispatchEvent(tapE);//在DOM上触发事件绑定（同步执行）
    if (tapE.defaultPrevented) e.preventDefault();
  }
}
