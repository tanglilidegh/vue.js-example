<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ msgfromfather }}</h1>
    <button v-on:click="onClickMe">open mouse!</button>
  </div>
</template>

<script>
export default {
  // ES6 的语法
  data: function () {
    return {
      msg: 'hello from in components A'
    }
  },
  props: [ 'msgfromfather' ],
  methods: {
    onClickMe: function () {
      // alert('components A');
      // console.log(this.msgfromfather);
      // this.$emit('child-tell-me-something', this.msg);
      this.$dispatch('child-tell-me-something', this.msg);
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
