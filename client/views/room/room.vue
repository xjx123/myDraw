<template>
    <div>
        <mt-header fixed :title="userName + '的房间'">
            <router-link to="/home" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>

        <div class="room-margin-top">
            <ul class="room-list">
                <li v-for="item in roomList" :key="item.roomId">
                    <a href="javascript: void(0)" @click="handleSitDown(item.roomId)">{{ item.name }}</a>
                </li>
            </ul>

            <mt-button type='primary' size='large' v-if="canStartGame" @click="startGame">开始游戏</mt-button>
            <mt-button type='primary' v-else disabled size='large'>只有房主才能开始游戏</mt-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: localStorage.getItem('userName'),
            roomList: []
        }
    },
    mounted() {
        for (let i = 1; i <= 8; i++) {
            this.roomList.push({
                roomId: i,
                name: i,
                userId: null,
                isHomeOwner: false
            })
        }
    },
    methods: {
        handleSitDown(roomId) {
            this.roomList.map(x => {
                if (x.name === this.userName) {
                    x.name = x.roomId;
                    x.userId = null;
                    x.isHomeOwner = false;
                }
            })

            this.roomList.map(x => {
                if (x.roomId === roomId) {
                    if (x.isHomeOwner) {
                        return x;
                    }

                    x.isHomeOwner = true;
                    x.name = this.userName;
                    x.userId = localStorage.getItem('userId');
                }

                return x;
            })
        },
        startGame() {
            this.$router.push('/game');
        }
    },
    computed: {
        canStartGame() {
            return this.roomList.some(x => (x.userId === localStorage.getItem('userId') && x.roomId === 1));
        }
    }
}
</script>

<style>
.room-margin-top {
  margin-top: 50px;
}

.room-list {
  padding-left: 20px;
  font-size: 12px;
  font-weight: bolder;
  overflow: hidden;
}

.room-list li {
  margin: 10px;
  list-style-image: none;
  list-style-type: none;
  background-color: #999999;
  border-right-width: 0px;
  border-right-style: solid;
  border-right-color: #000000;
  float: left;
  width: 70px;
  height: 45px;
  box-shadow: 0px 5px 5px #000000;
}

.room-list li a {
  color: #ffffff;
  text-decoration: none;
  margin: 0px;
  display: block;
  text-align: center;
  line-height: 45px;
}

.room-list li a:hover {
  background-color: #0099cc;
}

.room-startGame-button {
  margin-top: 20px;
}
</style>