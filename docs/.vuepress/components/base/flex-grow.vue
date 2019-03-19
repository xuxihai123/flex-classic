<template>
    <div class="doc-box">
        <div class="box1">
            <div class="item" style="flex-grow:1;">1</div>
            <div class="item" style="flex-grow:1;">1</div>
            <div class="item" style="flex-grow:1;">1</div>
        </div>
        <div class="box1">
            <div class="item" style="flex-grow:1;">1</div>
            <div class="item" style="flex-grow:2;">2</div>
            <div class="item" style="flex-grow:1;">1</div>
        </div>
        <div class="box1">
            <div class="item" style="flex-grow:1;">1</div>
            <div class="item" style="flex-grow:2;">4</div>
            <div class="item" style="flex-grow:3;">1</div>
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
</style>
