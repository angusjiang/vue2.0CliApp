<template>
  <mt-tabbar>
    <mt-tab-item v-for="(item, index) in foots" :id="item.name" @click.native="selectActive(item, index)" :class="{'is-selected': item.select}" :href="item.url" >
      <!-- <img slot="icon" class="el-icon-delete"> -->
      <div class="icon-outer start-box box-align pack-center">
        <i class="iconfont" :class="item.icon"> </i>
      </div>
      {{item.name}}
    </mt-tab-item>
  </mt-tabbar>m
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
          name: '主页',
          icon: 'icon-gifts',
          select: true
        },
        { 
          src: '/order',
          name: '订单',
          icon: 'icon-form',
          select: false
        },
        { 
          src: '/discovery',
          icon: 'icon-search',
          name: '发现',
          select: false
        },
        { 
          src: '/mine',
          icon: 'icon-accountfilling',
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
.icon-outer {
  width:24px;
  height: 24px;
  margin: auto;
}
</style>
