### flex-direction
```
align-items属性定义项目在交叉轴上如何对齐。
它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。

flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的<a href="https://www.zhangxinxu.com/wordpress/2015/06/about-letter-x-of-css/">基线</a>对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
```

<base-flex-direction />

```html
   <div class="box1">
        <div class="item">1</div>
        <div class="item">1</div>
        <div class="item">1</div>
    </div>
    <div class="box1">
        <div class="item" style="flex-basis:40px;">1</div>
        <div class="item" style="flex-basis:40px;">1</div>
        <div class="item" style="flex-basis:40px;">1</div>
    </div>
    <div class="box1">
        <div class="item" style="flex-basis:60px;">1</div>
        <div class="item">1</div>
        <div class="item" style="flex-basis:60px;">1</div>
    </div>
```

```css
  .box1 {
        margin: 20px auto;
        width: 160px;
        height: 160px;
        border: 1px solid;
    }

    .box1 {
        display: flex;
        flex-direction: row;
    }

    .item {
        /*border-radius: 0;*/
    }
```
