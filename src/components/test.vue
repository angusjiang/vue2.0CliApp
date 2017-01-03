<template>
  <button  @click="increment">{{ counter }}</button>
</template>

<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  // props:['counter'],
  methods: {
    //events up 
    increment: function () {
        this.counter += 1;
        this.$emit('increment');
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
