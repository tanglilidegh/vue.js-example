/**
 * Created by tanglili on 16/8/24.
 */

//创建一个组件构造器
var MyComponent = Vue.extend({
    // 选项
});

var MyComponent = Vue.extend({
    template: '<div>A custom component!</div>'
});


// 注册
// 全局注册组件，tag 为 my-component
Vue.component('my-component', MyComponent);

/* 使用
* <div id="example">
 <my-component></my-component>
 </div>
* */

// 创建根实例
new Vue({
    el: '#example'
});