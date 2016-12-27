<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{ $route.params.id }}</p>
    <p>{{hehe}}</p>
    <!-- <Hello></Hello> -->
    <ul>
      <li v-for="article in articles">
        {{article.title}}
      </li>
    </ul>
    <router-link to="/foo">Go to Foo</router-link>
  </div>
</template>

<script>
// import Hello from './components/Hello'
export default {
  name: 'app',
  data() {
    return{
      hehe: '90',
      articles:[],
    }
  },
  mounted: function() {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {

        },
        emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调

        this.articles = response.data.subjects
        // this.articles = response.data["subjects"] 也可以

    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
  },
  components: {
    // Hello
  },
  methods: {

  },
  created() {
    console.log(this);
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
