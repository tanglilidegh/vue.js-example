<template>
  <select v-model="province">
    <option>省</option>
    <option v-for="item in provinces" value="{{ item.key }}">{{ item.name }}</option>
  </select>
 <!--  <select>
    <option>市</option>
  </select>
  <select>
    <option>区</option>
  </select> -->
</template>


<script>
  export default{
    props: ["province"],
    data(){
      return {
        provinces: [],
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
          }
        ]
        this.provinces = ps
      }
    },
    created(){
      this.getProvinces();
    }
  }
</script>