<template>
    <div>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">类型: </span>
                <span class="expand-value">{{ row.type }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">错误所在行: </span>
                <span class="expand-value">{{ row.col }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">错误所在列: </span>
                <span class="expand-value">{{ row.line }}</span>
            </Col>
        </Row>
        <Row>
            <Col span="8">
                <span class="expand-key">来源地址: </span>
                <span class="expand-value">{{ row.ip }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">触发错误元素: </span>
                <span class="expand-value">{{ row.event }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">环境: </span>
                <span class="expand-value">{{ row.userAgent }}</span>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        props: {
            row: Object
        }
    }
</script>

<style scoped>

</style>