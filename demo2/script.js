/**
 * Created by tanglili on 16/7/11.
 */
// new Vue({
//     el: 'div',
//     data: {
//         show: true
//     }
// });

Vue.filter('json',function (value, args) {
    return JSON.stringify(value,null,+args[0])
});

new Vue({
    el:'#demo',
    data:{
        msg:'hi!',
        checked:true,
        picked:'one',
        selected:'two',
        multiSelect:['one','three']
    }
});