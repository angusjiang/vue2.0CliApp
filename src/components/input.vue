<template>
  <input type="text" :value="value" @input="updataValue()">
</template>

<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    //events up 
    updataValue() {
      
    }
  },
  created() {
  }
}
</script>

<style scoped>
button{
  width: 100px;
  height: 50px;
  background: #ccc;
}

</style>
