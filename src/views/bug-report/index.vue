<template>
    <div>
        <Button type="primary" @click="man">测试</Button>
        <Table :columns="columns" :data="tableInfo"></Table>
    </div>
</template>

<script>
import axios from 'axios'
import expandRow from './tableExpand.vue'
import url from '@/serviceAPI.config.js'
export default {
    data() {
        return {
            columns: [{
                    type: 'expand',
                    width: 50,
                    render: (h, params) => {
                        return h(expandRow, {
                            props: {
                                row: params.row
                            }
                        })
                    }
                },
                {
                    title: '时间',
                    key: 'created'
                },
                {
                    title: '错误信息',
                    key: 'title'
                },
                {
                    title: '来自',
                    key: 'url'
                }
            ],
            tableInfo: []
        }
    },
    mounted(){
        let self = this
        axios({
            url: url.warningInfo,
            method:'get',
        }).then(response=>{
            if(response.data.code == 200){
                let option = []
                for(let value of response.data.message){
                    option.push({
                        "created":value.createAt,
                        "title":value.errMsg,
                        "url":value.url,
                    })
                }
                self.tableInfo = option
            }
        }).catch(error=>{
            console.log(error);
            throw error
        })
    },
    methods: {
        man() {
            console.log('触发')
            this.name = name+obj
        }
    },
}
</script>

<style scoped>

</style>