<template>
    <div class="parent" id="html-source">
        <div class="item-1"></div>
        <div class="item-2"></div>
        <div class="item-3"></div>
    </div>
</template>

<style type="text/css" scoped>
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
</style>
