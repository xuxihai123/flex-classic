### order
```
    order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
```

<element-order />

```html
<div class="box1">
    <div class="item" style="order:4;">1</div>
    <div class="item" style="order:3">2</div>
    <div class="item" style="order:2">3</div>
    <div class="item" style="order:1">4</div>
</div>
<div class="box1">
    <div class="item" style="order:1;">1</div>
    <div class="item" style="order:3;">2</div>
    <div class="item" style="order:2;">3</div>
    <div class="item" style="order:4;">4</div>
</div>
```

```css
.box1{
    margin: 20px auto;
    width: 160px;
    height: 160px;
    border: 1px solid;
}
.box1 {
    display: flex;
    flex-direction: row;
}
```
