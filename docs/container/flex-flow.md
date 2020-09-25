### flex-flow
```
flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
```

<container-flex-flow />

```html
<div class="box1">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
</div>
<div class="box2">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
</div>
<div class="box3">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
</div>
```

```css
.item {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  text-align: center;
  font-size: 12px;
  background-color: rgb(224, 108, 28);
}
.box1,
.box2,
.box3 {
  margin: 20px auto;
  width: 160px;
  height: 160px;
  border: 1px solid;
}

.box1 {
  display: flex;
  flex-flow: row-reverse wrap;
}

.box2 {
  display: flex;
  flex-flow: column wrap;
}

.box3 {
  display: flex;
  flex-flow: row-reverse nowrap;
}
```
