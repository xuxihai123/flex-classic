<template>
    <p class="demo">
        {{ msg }}123
    </p>
</template>

<script>
  export default {
    name:'FooBar',
    data() {
      return {
        msg: 'Hello this is <Foo-Bar>',
      };
    },
  };
</script>
