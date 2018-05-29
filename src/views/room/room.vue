<template>
    <div>
        <mt-header fixed :title="userName">
            <router-link to="/home" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>

        <div class="room-margin-top">
            <ul class="room-list">
                <li>
                    <a>test1</a>
                </li>
                <li>
                    <a>test2</a>
                </li>
                <li>
                    <a>test3</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: localStorage.getItem('userName') ? `${localStorage.getItem('userName')}的房间` : '默认的房间'
        }
    }
}
</script>

<style>
.room-margin-top {
    margin-top: 50px;
}

.room-list {
    font-size: 12px;
    font-weight: bolder;
}

.room-list li {
    list-style-image: none;
    list-style-type: none;
    background-color: #999999;
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #000000;
    float: left;
}

.room-list li a {
    color: #FFFFFF;
    text-decoration: none;
    margin: 0px;
    padding-top: 8px;
    display: block;
    /* 作为一个块 */
    padding-right: 50px;
    /* 设置块的属性 */
    padding-bottom: 8px;
    padding-left: 50px;
}

.room-list li a:hover {
    background-color: #0099CC;
}
</style>