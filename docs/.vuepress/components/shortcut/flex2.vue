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
        width: 300px;
    }

    .item-1 {
        flex: 2 1 0%;
        background: blue;
    }

    .item-2 {
        flex: 2 1 auto;
        background: darkblue;
    }

    .item-3 {
        flex: 1 1 200px;
        background: lightblue;
    }
</style>
