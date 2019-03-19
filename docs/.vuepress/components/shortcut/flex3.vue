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
        flex: 1 1 20%;
        background: blue;
    }

    .item-2 {
        flex: 500 2 200px;
        background: darkblue;
    }

    .item-3 {
        flex: 1 2 400px;
        background: lightblue;
    }
</style>
