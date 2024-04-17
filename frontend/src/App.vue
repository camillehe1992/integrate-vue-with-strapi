<template>
  <div id="app" class="h-screen">
    <RouterView />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      isLogin: true,
    };
  },
  components: {},
};
</script>
<style lang="scss">
body {
  background-color: #e0e0e0;
}
</style>
