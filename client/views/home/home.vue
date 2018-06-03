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
export default {
    data() {
        return {

        }
    },
    methods: {
        createRoom() {
            this.$router.push('/room');
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


