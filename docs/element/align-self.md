### align-self
```
    align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。
    默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
```

# example 

<element-align-self/>

```html
   <div class="box1">
        <div class="item1"></div>
        <div class="item2"></div>
        <div class="item3" style="align-self: flex-end;"></div>
        <div class="item4"></div>
    </div>
    <div class="box2">
        <div class="item1"></div>
        <div class="item2"></div>
        <div class="item3" style="align-self: flex-start;"></div>
        <div class="item4"></div>
    </div>
```

```css
.box1,.box2,.box3,.box4,.box5{
        margin: 20px auto;
        width: 160px;
        height: 160px;
        border: 1px solid;
    }
    .box1 {
        display: flex;
        flex-direction: row;
        align-items:flex-start;
    }
    .box2 {
        display: flex;
        flex-direction: row;
        align-items:center;
    }
    .box3 {
        display: flex;
        flex-direction: row;
        align-items:flex-end;
    }

    .box4 {
        display: flex;
        flex-direction: row;
        align-items:baseline;
    }
    .box5 {
        display: flex;
        flex-direction: row;
        align-items:stretch;
    }
    .item1 {
        width: 20px;
        height: 30px;
        margin-left: 3px;
        background-color: rgb(224,108,28);
    }
    p {
        margin: 0;
        padding: 0;
        font-size: 12px;
    }
    .item2 {
        width: 20px;
        height: 50px;
        margin-left: 3px;
        background-color: rgb(224,108,28);
    }
    .item3 {
        width: 20px;
        height: 20px;
        margin-left: 3px;
        background-color: rgb(224,108,28);
    }
    .item4 {
        width: 20px;
        height: 40px;
        margin-left: 3px;
        background-color: rgb(224,108,28);
    }
```
