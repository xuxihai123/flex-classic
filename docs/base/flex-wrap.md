### flex-wrap
```
（1）nowrap（默认）：不换行。
（2）wrap：换行，第一行在上方。
（3）wrap-reverse：换行，第一行在下方。
```

<base-flex-wrap />

```html
<div class="box1">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
</div>
<div class="box2">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
</div>
<div class="box3">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
</div>
```

```css
.box1,.box2,.box3,.box4,.box5,.box6{
    margin: 20px auto;
    width: 100px;
    height: 100px;
    border: 1px solid;
}
.box1 {
    display: flex;
    flex-wrap:nowrap;
    flex-direction: row;
}
.box2 {
    display: flex;
    flex-wrap:wrap;
    flex-direction: row;
}
.box3 {
    display: flex;
    flex-wrap:wrap-reverse;
    flex-direction: row;
}
```
