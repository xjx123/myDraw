<template>
    <form @submit="login">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="userName"></mt-field>
        <mt-field type="password" label="密码" placeholder="请输入密码" v-model="passWord"></mt-field>
        <button type="submit" class="login-button mint-button mint-button--submit mint-button--large">
            <label class="login-label mint-button-text">登陆</label>
        </button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            userName: '',
            passWord: ''
        }
    },
    methods: {
        login(e) {
            e.preventDefault();
            console.log(`name: ${this.userName}  pass: ${this.passWord}`);
            if (this.userName === 'xjx' && this.passWord === '123') {
                this.$router.push('/home');
            }
        }
    }
}
</script>

<style>
.login-button {
    background-color: #26a2ff;
}

.login-label {
    color: #fff;
}
</style>


