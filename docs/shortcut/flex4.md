### flex-demo4

<shortcut-flex4 />

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
    item-1: 200px;
    item-2: 200px;
    item-3: 400px;
剩余空间：
    600px - (200px+200px+400px) = -200px;

收缩比率： 1：2：2
伸缩基准值比率:1:1:2
总比率:1:2:4

item1收缩宽度为1/7*200;
item2收缩宽度为2/7*200;
item3收缩宽度为4/7*200;

item1(width) = 200-1/7*200=171.42857142857142;
item2(width) = 200-2/7*200=142.85714285714286;
item3(width) = 400-4/7*200=285.7142857142857;
```
