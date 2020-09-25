### justify-content
```
justify-content属性定义了项目在主轴上的对齐方式。
它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。

flex-start（默认值）：左对齐
flex-end：右对齐
center： 居中
space-between：两端对齐，项目之间的间隔都相等。
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
```

<container-justify-content />

```html
<div class="box1">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
</div>
<div class="box2">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
</div>
<div class="box3">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
</div>
<div class="box4">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
</div>
<div class="box5">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
</div>
```

```css
.item{
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 50%;
    text-align: center;
    font-size: 12px;
    background-color: rgb(224,108,28);
}
.box1,.box2,.box3,.box4,.box5{
    margin: 20px auto;
    width: 160px;
    height: 160px;
    border: 1px solid;
}
.box1 {
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
}
.box2 {
    display: flex;
    flex-direction: row;
    justify-content:center;
}
.box3 {
    display: flex;
    flex-direction: row;
    justify-content:flex-end;
}

.box4 {
    display: flex;
    flex-direction: row;
    justify-content:space-between;
}
.box5 {
    display: flex;
    flex-direction: row;
    justify-content:space-around;
}
```
