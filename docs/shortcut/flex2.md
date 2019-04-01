### flex-demo2

<shortcut-flex2 />

```html
 <div class="parent" id="html-source">
    <div class="item-1"></div>
    <div class="item-2"></div>
    <div class="item-3"></div>
</div>
```

```css
.parent {
    display: flex;
    width: 600px;
}

.parent > div {
    height: 100px;
    width: 300px;
}

.item-1 {
    flex: 2 1 0%;
    background: blue;
}

.item-2 {
    flex: 2 1 auto;
    background: darkblue;
}

.item-3 {
    flex: 1 1 200px;
    background: lightblue;
}
```

### 解释

```html
<span class="red">剩余空间为正值</span>


伸缩基准值：
 item-1: 0% = 0;
 item-2: auto = 300px;
 item-3: flex-basis = 200px;
剩余空间：
 600px - (0+300+200) = 100px;

扩展比率： 2：2：1
 item(width) = 剩余空间*扩展比率+伸缩基准值;

 item-1:width=100*2/5+0 = 40px;
 item-2:width=100*2/5+300 = 340px;
 item-3:width=100*1/5+200 = 220px;
```
