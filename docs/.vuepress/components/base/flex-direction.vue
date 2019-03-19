<template>
    <div class="doc-box">
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
</style>
