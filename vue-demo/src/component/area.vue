<template>
  <select v-model="province">
    <option>省</option>
    <option v-for="item in provinces" value="{{ item.key }}">{{ item.name }}</option>
  </select>
</template>


<script>
  // 导出模块
  export default{
    props: ["province"],
    data(){
      return {
        provinces: []
      }
    },
    methods:{
      getProvinces: function () {
        var ps = [
          {
            name: '四川省',
            key: 'sc'
          },
          {
            name: '河南省',
            key: 'hn'
          },
          {
            name: '浙江省',
            key: 'zj'
          },
          {
            name: '福建省',
            key: 'fj'
          }
        ];
        this.provinces = ps;
      }
    },
    created(){
      this.getProvinces();
    }
  }
</script>