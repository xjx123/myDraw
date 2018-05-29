<template>
    <div class="home-background">
        <mt-header fixed title="主页">
            <router-link to="/login" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.home-background {
    background-color: #26a2ff;
}
</style>


