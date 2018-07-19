import Vue from 'vue';
import iView from 'iview';
import {router} from './router/index';
import {appRouter} from './router/router';
import store from './store';
import App from './app.vue';
import axios from 'axios';
import apiUrl from '@/serviceAPI.config.js'
import '@/locale';
import 'iview/dist/styles/iview.css';
import VueI18n from 'vue-i18n';
import util from './libs/util';

Vue.use(VueI18n);
Vue.use(iView);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
    data: {
        currentPageName: ''
    },
    mounted () {
        this.currentPageName = this.$route.name;
        // 显示打开的页面的列表
        this.$store.commit('setOpenedList');
        this.$store.commit('initCachepage');
        // 权限菜单过滤相关
        this.$store.commit('updateMenulist');
        // iview-admin检查更新
        // util.checkUpdate(this);
    },
    created () {
        let tagsList = [];
        appRouter.map((item) => {
            if (item.children.length <= 1) {
                tagsList.push(item.children[0]);
            } else {
                tagsList.push(...item.children);
            }
        });
        this.$store.commit('setTagsList', tagsList);
    }
});

Vue.config.errorHandler = function(err,vm,info){
    let data = {
        'errMsg':err.message,
        'url':vm.$el.baseURI,
        'event':info,
        'userAgent':window.navigator.userAgent,
        'line':0,
        'col':0,
        'error':'',
        'type':'vue'
    }
    axios({
      url: apiUrl.throwError,
      method:'post',
      data:data,
    }).then(response=>{
      if(response.status == 200){
    }
    }).catch(error=>{
      console.log(error);
    })
}

window.onerror = function(msg, url, line, col, error) {
    console.log(arguments)
    window.demoError = arguments
    let data = {
        'errMsg':error.message,
        'url':url,
        'event':'',
        'userAgent':window.navigator.userAgent,
        'line':line,
        'col':col,
        'error':error.stack,
        "type":'window'
    }
    axios({
      url: apiUrl.throwError,
      method:'post',
      data:data,
    }).then(response=>{
      if(response.status == 200){
    }
    }).catch(error=>{
      console.log(error);
    })
}