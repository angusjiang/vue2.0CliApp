<template>
  <span>
    <button  @click="increment">{{ counter }}</button>
    <slot name="header"></slot>
    <!-- <slot></solt> -->
  </span>
  
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
        this.$emit('increment', {type: this.counter});
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
