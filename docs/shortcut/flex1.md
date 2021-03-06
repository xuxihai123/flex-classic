### flex-demo1

<shortcut-flex1 />

```html
 <div class="parent" id="html-source">
    <div class="item-1"></div>
    <div class="item-2"></div>
    <div class="item-3"></div>
</div>
```

```css
.parent {
    display: flex;
    width: 600px;
}

.parent > div {
    height: 100px;
}

.item-1 {
    width: 140px;
    flex: 2 1 10%;
    background: blue;
}

.item-2 {
    width: 100px;
    flex: 2 500 auto;
    background: darkblue;
}

.item-3 {
    flex: 1 1 200px;
    background: lightblue;
}
```

### 解释

```html
    flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

    <span class="red">剩余空间为正值,宽度只与flex-grow有关</span>

    主轴上父容器总尺寸为 600px

    计算flex子元素的基准值:
    - 10% 即 0.1*600px 宽度 60px
    - auto 对应取主尺寸(自身width)即 100px
    - flex-basis 200px

    总基准值是：60px + 100px + 200px = 360px，其中

    故剩余空间为 600px - 360px = 240px

    伸缩放大比率： 2:2:1

    剩余空间分配如下：
    - item1 : 2/5*240 = 96px;
    - item2 : 2/5*240 = 96px;
    - item3 : 1/5*240 = 48px;

    各项目最终宽度为：
    - item-1 = 60 + 96 = 156px
    - item-2 = 100 + 96 = 196px
    - item-3 = 200 + 48 = 248px

    当 item-1 基准值取 0% 的时候，是把该项目视为零尺寸的，故即便声明其尺寸为 140px，也并没有什么用，形同虚设
    而 item-2 基准值取 auto 的时候，根据规则基准值使用值是主尺寸值即 100px，故这 100px 不会纳入剩余空间
```
