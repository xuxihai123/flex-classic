<template>
    <div class="doc-box">
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
    </div>
</template>

<style type="text/css" scoped>
    .item{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        text-align: center;
        font-size: 12px;
        background-color: rgb(224,108,28);
    }
    .box1 {
        margin: 20px auto;
        width: 160px;
        height: 160px;
        border: 1px solid;
    }

    .box1 {
        display: flex;
        flex-direction: row;
    }
</style>
