<template>
  <div id="app" class="bg-grey-lighten-2 h-screen">
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
