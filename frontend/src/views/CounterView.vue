<template lang="">
  <div>{{ count }}</div>
  <input type="submit" value="Submit" />
</template>
<script>
export default {
  name: "CounterView",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment: () => {
      this.count++;
    },
  },
};
</script>
<style lang=""></style>
