### flex-grow
```
flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
去除flex-basis定义的基准值后有剩余空间时有效果。

如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。
如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
```

<element-flex-grow />

```html
<div class="box1">
    <div class="item" style="flex-grow:1;">1</div>
    <div class="item" style="flex-grow:1;">1</div>
    <div class="item" style="flex-grow:1;">1</div>
</div>
<div class="box1">
    <div class="item" style="flex-grow:1;">1</div>
    <div class="item" style="flex-grow:2;">2</div>
    <div class="item" style="flex-grow:1;">1</div>
</div>
<div class="box1">
    <div class="item" style="flex-grow:1;">1</div>
    <div class="item" style="flex-grow:2;">2</div>
    <div class="item" style="flex-grow:3;">3</div>
</div>
```

```css
.item {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  font-size: 12px;
  background-color: rgb(224, 108, 28);
}
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