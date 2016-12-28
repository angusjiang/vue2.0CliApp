<template>
  <mt-popup  v-model="popupVisible" popup-transition="popup-fade"  position="left" :style="{'height':'100%','width':'100%'}">
      <div class="nav-top">
        <div class="nav-top">
          <mt-header :title="title">
            <router-link to="/" slot="left"  @click="hideModal($event)">
              <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="close" slot="right"  @click="hideModal($event)">X</mt-button>
          </mt-header>
        </div>
      </div>
      <div class="app-content">
        <iframe class="frame-box" frameBorder="0"  id="framId" name="refreshAlarm"></iframe>
      </div>
  </mt-popup>
  
</template>

<script>
    import { Popup } from 'mint-ui';
    Vue.component(Popup.name, Popup);
    var remberThis,remberUrl='';
    export default {
        data() {
            return {
                title: '这是一个弹层',
                url: '',
                openBag: false,
                popupVisible: true
            }
        },
        props: ['msg','total','popstatus','fromstatus','trsi','fritem'],
        set(url,data,callback) {
            var data = $.extend({
                _req: App.random()
            },data);
            var url = url + '?' + App.serialize(data);
            $.popup('.popup-game');
            document.querySelector('iframe').src = url;
            remberUrl = url;   
            var self = this; 
            var ls = App.addLoadingSpinner({'el':'.content','text':'初始化中...'});
            document.querySelector('iframe').onload = function() {
               
                if(typeof callback === 'function') {
                    if (callback()) {
                        remberThis = callback();
                    };
                    self.readMessage(callback);
                }
                ls.hide();
            }
        },
        // iframe commucation
        readMessage: function(cb) {
            var self = this;
            var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
            var eventer = window[eventMethod];
            var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

            // Listen to message from child window
            eventer(messageEvent, function (e) {
                var key = e.message ? "message" : "data";
                var data = e[key];
                cb(data);
                return;
                if (data['taskname'] == 'close' || Array.isArray(data)) {
                    me.hide();
                }
                if (data['taskname'] == 'reload' || data['taskName'] == 'reload') {
                    me.reload();
                }

            }, false);
        },
        methods: {
            hideModal(e) {
                e.preventDefault();
                this.popupVisible = false;
                // $.confirm('确定要离开活动吗?',
                //     function () {
                //         $.closeModal('.popup-game');
                //         document.querySelector('iframe').src = '';
                //         document.querySelector('iframe').src = remberUrl;
                //         document.querySelector('iframe').onload = function() {
                //         }
                //         document.querySelector('iframe').src = '';
                //     },
                //     function () {
                //     }
                // );
            },
            collectF(index,item){ //收藏题目
                let self = this;
                if (item.is_owner) {
                    $.alert('自己的题目不能收藏哦');
                    return;
                };
                self.popstatus = true;
                self.fromstatus = true;
                self.fritem = item;
            },
            putBag() {
                let self = this;
                App.send('/api2/teacher_shopcart/add', {
                    data:{
                        testbank_nos: JSON.stringify([self.msg.no])
                    },
                    loadingBar: {
                        text: '选择中...'
                    },
                    type: 'post',
                    success: function(result, isSuccess) {
                        if(isSuccess) {
                          if (result.errcode === 0) {
                            $.toast('选中成功');
                            self.total = result.data.num;
                          };  
                        } else {
                            $.alert(result.errstr);
                        }
                    }
                });
            }
        },
        created() {
            this.$watch('$parent.trantsData', function(a,b) {
                if (a) {
                    this.openBag = true;
                };
            })
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
