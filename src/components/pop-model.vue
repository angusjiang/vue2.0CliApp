<template>
  <mt-popup  v-model="myResult" position="left" :style="{'height':'100%','width':'100%'}">
      <div class="nav-top">
        <div class="nav-top">
          <mt-header :title="title">
            <mt-button icon="close" slot="right"  @click.native="hideModal($event)">X</mt-button>
          </mt-header>
        </div>
      </div>

        <iframe class="frame-box" frameBorder="0"  id="framId" name="refreshAlarm"></iframe>

  </mt-popup>
  
</template>

<script>
    import { Popup } from 'mint-ui';
    Vue.component(Popup.name, Popup);
    export default {
        data() {
            return {
                url: '',
                myResult: this.popstatus
            }
        },

        //自组件显示的声明props,来于父组件交互数据,vue2.0取消了双向的数据绑定
        props: ['popstatus','title'],
        watch: {
            //取消了双向数据绑定只能从父级中取得数据后copy一个副本myResult,通过watch 父级数据来改变副本
            popstatus(val) {
                this.myResult = val;
            },
        },
        methods: {
            hideModal(e) {
                e.preventDefault();
                this.myResult = false;
                document.querySelector('iframe').src = '';
                document.querySelector('iframe').onload = function() {
                }
            },
            set(url,data,callback) {
                var self = this; 
                var url = url + '?' + '_req=' + new Date().getTime();
                document.querySelector('iframe').src = url; 
                document.querySelector('iframe').onload = function() {
                   
                    if(typeof callback === 'function') {
                        if (callback()) {
                            remberThis = callback();
                        };
                        // self.readMessage(callback);
                    }

                }
            },
        },
        created() {
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    iframe {
        width: 100%;
        height: 100%;
    }
    .frame-box {
        margin-top: 40px;
    }
    .do-btns {
        padding: 1rem;
        position: fixed;
        border-top: 0px;
        bottom: 0px;
        width: 100%;
    }
    .do-btns .store-btn {
        width: 42%;
        border:1px solid #3498db;
        background: #fff;
        color: #3498db;
        text-align: center;
        height: 2rem;
        line-height: 2rem;
        display: block;
    }
    .do-btns .go-bag {
        width: 42%;
        color: #fff;
        background: #3498db;
        text-align: center;
        height: 2rem;
        line-height: 2rem;
        display: block;
        border:none;
    }
    .do-btns .disable {
        background: #ccc;
        border:none;
    }
</style>
