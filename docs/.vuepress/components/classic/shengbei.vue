<template>
    <div class="container">
        <header>header</header>
        <div id="main">
            <article>article</article>
            <nav>navlist</nav>
            <aside>aside</aside>
        </div>
        <footer>footer</footer>
    </div>
</template>
<style type="text/css" scoped>
    .container{
        width: 700px;
    }
    header {
        height: 88px;
        background-color: lightblue;
    }
    footer {
        height: 80px;
        background-color: #000088;
    }
    #main {
        display: flex;
        min-height: 800px;
        border: 1px solid;
    }

    #main > article {
        flex: 1;
        order: 2;
        background-color: lightgrey;
    }

    #main > nav {
        width: 200px;
        order: 1;
        background-color: lightpink;
    }

    #main > aside {
        width: 200px;
        order: 3;
        background-color: bisque;
    }

    @media all and (max-width: 600px) {
        /* 要放三个栏位太窄了 */
        #main {
            flex-flow: column;
        }

        #main > article, #main > nav, #main > aside {
            /* 回到文件顺序 */
            order: 0;
            width: auto;
        }
    }
</style>
