DOM上模拟tap事件
=== 
#### tap事件:点击屏幕,不移动,并立即抬起时触发
* 当touchstart和touchend移动范围很小（小于15px）,而且时间间隔短（300ms以内）,则触发tap事件。
* 支持changedTouches等属性
* 支持preventDefault()。当在父级元素上调用setupDomTap时，stopPropagation无意义。

DOM上模拟stroke事件
=== 
#### stroke事件: 点击屏幕,拖动,然后抬起时触发
* 支持deltaX和deltaY属性，表示移动的距离。值的正负表示方向。
* 支持preventDefault()

用法
===
````html
<script src="lib/index.js"></script>
<div id="mydiv">
    <button>按钮</button>
</div>
<script>
  var el = document.getElementById('mydiv')
  domTapEvent.setupDomTap(el)

  el.querySelector('button').addEventListener('tap', e => {
    alert(e)
    console.log(e)
  })
 </script>
 ````
