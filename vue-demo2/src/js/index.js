/**
 * Created by tanglili on 16/8/24.
 */
const Vue = require('vue');
const Area = require('../component/area.vue');

// 注册组件

class Index {
    constructor() {
        new Vue({
            el: 'body',
            data: {
                text: 'Hello World !',
                currentProvince: 'sc'
            },
            components: {
                'vue-area': Area
            }
        })
    }
}

window.Index = Index;