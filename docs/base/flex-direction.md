### flex-direction
```
 flex-direction属性决定主轴的方向（即项目的排列方向）。

    row（默认值）：主轴为水平方向，起点在左端。
    row-reverse：主轴为水平方向，起点在右端。
    column：主轴为垂直方向，起点在上沿。
    column-reverse：主轴为垂直方向，起点在下沿。
```

<base-flex-direction />

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
```

```css
  .box1, .box2, .box3, .box4 {
      margin: 20px auto;
      width: 160px;
      height: 160px;
      border: 1px solid;
  }

  .box1 {
      display: flex;
      flex-direction: row;
  }

  .box2 {
      display: flex;
      flex-direction: row-reverse;
  }

  .box3 {
      display: flex;
      flex-direction: column;
  }

  .box4 {
      display: flex;
      flex-direction: column-reverse;
  }
```
