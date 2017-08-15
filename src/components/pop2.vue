<template>
  <mt-popup  v-model="popstatus2" position="left" :style="{'height':'100%','width':'100%'}">
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
    import { mapState } from 'vuex'

    export default {
        name: 'pop2',
        data() {
            return {
                url: '',

            }
        },

        //自组件显示的声明props,来于父组件交互数据,vue2.0取消了双向的数据绑定
        props: ['popstatus2','title'],

        methods: {
            hideModal(e) {
                e.preventDefault();

                // this.popstatus2 = false;
                this.$emit('update:popstatus2', false);

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
            console.log(this.popstatus2)
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
