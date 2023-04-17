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
        <div class="drop_btn bg-white">
          <a>로그인</a>
        </div>
        <div class="drop_btn bg-white">
          <a>회원가입</a>
        </div>
        </div>
      </div>
    </div>
  </nav>

  <!--  아이디 비번 html 전체 영역을 지정하는 container -->
  <div class="login hidden" id="container">
    <!--  login 폼 영역을 : loginBox -->
    <div id="loginBox">
      <!-- 로그인 페이지 타이틀 -->
      <div id="loginBoxTitle">CodeZone Login</div>
      <!-- 아이디, 비번, 버튼 박스 -->
      <div id="inputBox">
        <div class="input-form-box"><span>아이디 </span><input type="text" name="uid" class="form-control"></div>
        <div class="input-form-box"><span>비밀번호 </span><input type="password" name="upw" class="form-control"></div>
          <button type="button" class="btn btn-primary btn-xs" style= "width: 300px; height : 80px; padding: 5px;">로그인</button>
      </div>
    </div>
  </div>
  <input @input="title = $event.target.value">
  <input @input="content = $event.target.value">
  <button @click="create">글 작성</button>
  <!-- <div v-for="(data,i) in datas.slice().reverse()" :key="i">
    <p>{{ datas[i].title }} </p>
    <p>{{ datas[i].content }} </p>
  </div> -->
  
  <!--button-->
  <div class="content">
    <button class="btn btn-warning" style="margin-left: 10vw; margin-right:10vw; margin-top:10vh;" >1:1 채팅</button>
    <button class="btn btn-warning" style="margin-left: 60vw; margin-top:10vh;">커뮤니티</button>
  </div>
</template>

<script>
import axios from 'axios'
let title = '';
let content = '';
export default {
  name: "App",
  data () {
    return {
      datas : [], 
    }
  },
  components: {
  },
  mounted(){
    axios.get('http://127.0.0.1:8000/apitest/')
    .then((result) =>{
      console.log(result.data)
      this.datas = result.data;
    }
    ).catch(()=>
    console.log('실패'))

    // login_btn 클래스를 가진 요소를 찾아서 click 이벤트에 함수 등록
    $(".drop_btn").on("click", function() {
      $(".login").removeClass("hidden");
      $(".content").addClass("hidden");
    });
  },

  methods : {
    create(){
    axios.post('http://127.0.0.1:8000/apitest/', {title:this.title,content:this.content})
    .then((result) =>{
      console.log('성공')
      this.datas.push(result.data);
    }
    ).catch(()=>
    console.log('실패'))
    },
  },
  // mounted() {
  //     // login_btn 클래스를 가진 요소를 찾아서 click 이벤트에 함수 등록
  //     $(".drop_btn").on("click", function() {
  //       $(".login").removeClass("hidden");
  //       $(".content").addClass("hidden");
  //     });
  // }
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
  display : inline-flex;
  justify-content : space-between;
  align-items: center;
}

.content button {
  display: flex;
  align-items: center;
}

.item {
	flex-basis: auto;
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

.content button a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login {
  margin: auto;
  border-radius: 15px;
  background: #712cf9;
  width: 300px;
  height: 200px;
  border-radius: 5px;
  opacity: 0.9;
}

.drop_btn{
  border: solid 1px;
  border-radius: 6px;
}

.hidden {
  display : none;
}

</style>
