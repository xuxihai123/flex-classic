### flex-shrink
```
  flex-shrink属性定义了项目的缩小比例，默认为1，<span class="red">即如果空间不足，该项目将缩小</span>。

如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。
如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。负值对该属性无效。
```

<element-flex-shrink />

```html
<div class="box1">
    <div class="item" style="flex-shrink:1;">1</div>
    <div class="item" style="flex-shrink:1;">1</div>
    <div class="item" style="flex-shrink:1;">1</div>
</div>
<div class="box1">
    <div class="item" style="flex-shrink:1;">1</div>
    <div class="item" style="flex-shrink:0;">0</div>
    <div class="item" style="flex-shrink:1;">1</div>
</div>
<div class="box1">
    <div class="item" style="flex-shrink:1;">1</div>
    <div class="item" style="flex-shrink:2;">4</div>
    <div class="item" style="flex-shrink:3;">1</div>
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
.item{
    width: 100px;
}
```
