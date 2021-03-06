### align-items
```
align-items属性定义项目在交叉轴上如何对齐。
它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。

flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的<a href="https://www.zhangxinxu.com/wordpress/2015/06/about-letter-x-of-css/">基线</a>对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
```

# example 

<container-align-items/>

```html
 <div class="doc-box">
        <div class="box1">
            <div class="item1"></div>
            <div class="item2"></div>
            <div class="item3"></div>
            <div class="item4"></div>
        </div>
        <div class="box2">
            <div class="item1"></div>
            <div class="item2"></div>
            <div class="item3"></div>
            <div class="item4"></div>
        </div>
        <div class="box3">
            <div class="item1"></div>
            <div class="item2"></div>
            <div class="item3"></div>
            <div class="item4"></div>
        </div>
        <div class="box4">
            <div class="item1">
                <p style="line-height: 10px;height: 10px;">1</p>
                <p style="line-height: 10px;height: 10px">1</p>
                <p style="line-height: 10px;height: 10px">1</p>
            </div>
            <div class="item2">
                <p style="line-height: 25px;height: 25px;font-size: 25px">2</p>
                <p style="line-height: 25px;height: 25px">2</p>
            </div>
            <div class="item3">
                <p style="line-height: 10px;height: 10px;font-size: 12px">3</p>
                <p style="line-height: 10px;height: 10px">3</p>
            </div>
            <div class="item4">
                <p style="line-height: 20px;height: 20px;font-size: 20px">4</p>
                <p style="line-height: 20px;height: 20px">4</p>
            </div>
        </div>
        <div class="box5">
            <div class="item1" style="height: auto">1</div>
            <div class="item2" style="height: auto">2</div>
            <div class="item3" style="height: auto">3</div>
            <div class="item4" style="height: auto">4</div>
        </div>
    </div>
```

```css
.box1, .box2, .box3, .box4, .box5 {
        margin: 20px auto;
        width: 160px;
        height: 160px;
        border: 1px solid;
    }

    .box1 {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }

    .box2 {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .box3 {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }

    .box4 {
        display: flex;
        flex-direction: row;
        align-items: baseline;
    }

    .box5 {
        display: flex;
        flex-direction: row;
        align-items: stretch;
    }

    .item1 {
        width: 20px;
        height: 30px;
        margin-left: 3px;
        background-color: rgb(224, 108, 28);
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
        background-color: rgb(224, 108, 28);
    }

    .item3 {
        width: 20px;
        height: 20px;
        margin-left: 3px;
        background-color: rgb(224, 108, 28);
    }

    .item4 {
        width: 20px;
        height: 40px;
        margin-left: 3px;
        background-color: rgb(224, 108, 28);
    }
```
