### flex-demo3

<shortcut-flex3 />

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
}

.item-1 {
    width: 140px;
    flex: 2 1 10%;
    background: blue;
}

.item-2 {
    width: 100px;
    flex: 2 500 auto;
    background: darkblue;
}

.item-3 {
    flex: 1 1 200px;
    background: lightblue;
}
```

### 解释

```html
 <span class="red">剩余空间为负值,宽度只与flex-shrink有关</span>

伸缩基准值：
 item-1: 20%*600=120px;
 item-2: 200px;
 item-3: 400px;
剩余空间：
 600px - (120px+200px+400px) = -120px;

收缩比率： 1：2：2
伸缩基准值比率: 120:200:400 == 6:10:20 = 3:5:10

总比率:3:10:20

 item1收缩宽度为3/33*120;
 item2收缩宽度为10/33*120;
 item3收缩宽度为20/33*120;

 item1(width) = 120-3/33*120=109.0909090909091;
 item2(width) = 200-10/33*120=163.63636363636363;
 item3(width) = 400-20/33*120=327.27272727272725;
```
