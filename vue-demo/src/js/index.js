const Vue = require('vue');
const Area = require('../component/area.vue');

class Index{
  constructor(){
    new Vue({
        el: "body",
        data:{
          test: "Hello World !",
          currentProvince: 'sc'
        },
        components: {
          'vue-area': Area
        }
  })
  }
}

window.Index = Index