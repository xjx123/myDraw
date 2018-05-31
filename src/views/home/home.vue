<template>
    <div>
        <mt-header class="home-background" fixed title="主页">
            <router-link to="/login" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="home-msgbox-wrapper">
            <button class="room-startGame-button mint-button mint-button--submit mint-button--large" @click="createRoom">
                <label class="login-label mint-button-text">创建房间</label>
            </button>
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


