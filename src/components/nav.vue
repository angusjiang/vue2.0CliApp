<template>
  <mt-tabbar>
    <mt-tab-item v-for="(item, index) in foots" :id="item.name" @click.native="selectActive(item, index)" :class="{'is-selected': item.select}" :href="item.url" >
      <img slot="icon" class="el-icon-delete">
      {{item.name}}
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      selected: true,
      foots: [
        { 
          src: '/home',
          name: '外卖',
          select: true
        },
        { 
          src: '/order',
          name: '订单',
          select: false
        },
        { 
          src: '/discovery',
          name: '发现',
          select: false
        },
        { 
          src: '/my',
          name: '我的',
          select: false
        }
      ]
    }
  },
  methods: {
    selectActive(item, index)  {
      this.foots.forEach((item, index) => {
        item.select = false;
      });
      item.select = true;
      router.push(item.src);
    },
  },
  created() {
    var _ = this;
    this.foots.forEach((item, index) => {
      if (_.$route.path.split('/')[1].replace(/\//g, '') == item.src.replace(/\//g,'')) {
        item.select = true;
      } else {
        item.select = false;
      }
    });
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
