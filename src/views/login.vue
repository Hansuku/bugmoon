<style lang="less">
    @import './login.less';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div id="scene">
            <div class="login-img" data-depth="0.2">
                <img src="https://cdn.hansuku.com/iviewBG.jpg" alt="">
            </div>
        </div>
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                            <span slot="prepend">
                                <Icon :size="16" type="person"></Icon>
                            </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                            <span slot="prepend">
                                <Icon :size="14" type="locked"></Icon>
                            </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" :loading="submitLoading" long>登录</Button>
                        </FormItem>
                    </Form>
                </div>
            </Card>
        </div>
    </div>

</template>

<script>
import Cookies from 'js-cookie'
import url from '@/serviceAPI.config.js'
import axios from 'axios'
import Parallax from 'parallax-js'
export default {
    data () {
        return {
            form: {
                userName: '',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            },
            submitLoading:false,
        };
    },
    mounted(){
        let scene = document.getElementById('scene')
        var parallaxInstance = new Parallax(scene,{
            relativeInput: true
        })
    },
    methods: {
        handleSubmit () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    // Cookies.set('user', this.form.userName);
                    // Cookies.set('password', this.form.password);
                    // this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
                    // if (this.form.userName === 'iview_admin') {
                    //     Cookies.set('access', 0);
                    // } else {
                    //     Cookies.set('access', 1);
                    // }
                    // this.$router.push({
                    //     name: 'home_index'
                    // });
                    this.axiosLoginUser()
                }
            });
        },
        axiosLoginUser(){
            let self = this
            self.submitLoading = true
            axios({
                url:url.login,
                method:'post',
                data:{
                    userName:self.form.userName,
                    password:self.form.password
                },
            }).then((result) => {
                if(result.data.code==200 && result.data.message){
                    new Promise((resolve,reject)=>{
                        Cookies.set('user', self.form.userName);
                        // Cookies.set('password', self.form.password);
                        if (self.form.userName === 'admin') {
                            Cookies.set('access', 0);
                        } else {
                            Cookies.set('access', 1);
                        }
                        this.$store.commit('setAvator', 'https://cdn.hansuku.com/iviewAdmin.jpg');
                        setTimeout(()=>{resolve()},500)
                    }).then(()=>{
                        self.$Message.success('登录成功');
                        this.$router.push({
                            name: 'home_index'
                        })
                    }).catch(err=>{
                        self.$Message.error('登录态保存失败');
                        console.log(err)
                    })
                }else{
                    self.$Message.error('登录失败');
                    self.submitLoading = false;
                }
            }).catch((err) => {
                self.$Message.error('登录失败');
                self.submitLoading = false;
            });
        },
    }
};
</script>

<style>

</style>
