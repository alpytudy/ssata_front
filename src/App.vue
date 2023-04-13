<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-warning">
    <div class="container-fluid ">
      <a class="navbar-brand" href="#">SSATA</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav ">
        <div @click="loginmodal = false"  class="drop_btn bg-white ">
          <a>로그인</a>
        </div>
        <div @click="loginmodal = false" class="drop_btn bg-white">
          <a>회원가입</a>
        </div>
        </div>
      </div>
    </div>
  </nav>

    <div class="login start" :class="{ end : loginmodal }">
      <Login/>
    </div>

  
  <!--button-->
  <div class="content">
    <button class="btn btn-warning" style="margin-left: 10vw; margin-right:10vw; margin-bottom:0.5vh;" >1:1 채팅</button>
    <button class="btn btn-warning" style="margin-left: 60vw; margin-bottom:0.5vh;">커뮤니티</button>
  </div>
</template>

<script>
import Login from "./components/Login.vue"
export default {
  name: "App",
  data () {
    return {
      loginmodal : true,  
    }
  },
  components: {
    Login : Login
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.content {
  width: 100vw;
  height: 40vh;
  position : absolute;
}

.btn {
  padding: 10vw;
  width: 30vw;
  height: 25vh;
  background-color: #712cf9;
  color: white;
  position: absolute;
  font-size:2.5vw;
  white-space : nowrap;
  box-sizing: border-box;
  
}

.login {
  margin: auto;
  border-radius: 15px;
  background: grey;
  width: 300px;
  height: 300px;
  border-radius: 5px;
}
.start {
  transform: translateY(0px);
}
.end {
  transition: all 1s;
  transform: translateY(-500px);
}

.drop_btn{
  border: solid 1px;
  border-radius: 6px;
}
</style>
