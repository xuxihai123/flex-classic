### flex-basis
```
    flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。
    浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

    它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
```

<base-flex-basis />

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
