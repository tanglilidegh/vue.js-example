<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>

      <li v-for="item in items"  v-bind:class="{ finished: item.isFinished}" v-on:click="toggleFinish(item)">
      {{ item.label }}
      </li>

    </ul>
    <p>child tells me: {{ childWords }}</p>
    <components-a msgfromfather='you die!'></components-a>
  </div>
</template>

<script>
// module.export = {

// }  ES6的语法
import ComponentsA from './components/componentsA'
import Store from './store'
export default {
  data: function () {
    return{
      title: 'this is a todo list',
      items: Store.fetch(),
      newitem: '',
      childWords: ''
    }
  },
  components:{ ComponentsA },
  watch: {
    items: {
      handler: function (items) {
        Store.save(items);
      },
      deep: true
    }
  },
  events: {
    'child-tell-me-something': function (msg) {
      this.childWords = msg;
    }
  },
  methods:{
    toggleFinish: function (item) {
      item.isFinished = !item.isFinished
    },
    addNew: function () {
      this.items.push({
        label: this.newItem,
        isFinished: false
      });
      this.newItem = '';
    },
    listenToMyBoy: function (msg) {
      this.childWords = msg;
    }
  }
}
</script>

<style>
.finished {
  text-decoration: line-through;
}
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
