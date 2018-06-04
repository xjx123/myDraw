<template>
    <div>
        <mt-header class="home-background" fixed title="主页">
            <router-link to="/login" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="home-msgbox-wrapper">
            <mt-button type='primary' size='large' @click="createRoom">创建房间</mt-button>
        </div>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui';

export default {
    data() {
        return {

        }
    },
    mounted() {
        
    },
    methods: {
        createRoom() {
            MessageBox.prompt('请输入房间名').then(({ value, action }) => {
                console.log(`value: ${value}  action: ${action}`);
                this.$webSocket.send(JSON.stringify({ data: { roomName: value, id: 1 }, type: 'createRoom' }));
            })
            // this.$router.push('/room');
        }
    }
}
</script>

<style>
.home-background {
    background-color: #26a2ff;
}

.home-msgbox-wrapper {
    top: 50%;
    position: absolute;
    width: 95%;
}
</style>


