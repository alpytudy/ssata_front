<template>
<a class="button" @click="enter" style="margin-right:100px;">1:1 채팅</a>
<a class="button" href="./article">커뮤니티</a>
</template>

<script>

export default {
  name: "MainPage",
  data () {
    return {

    }
  },
  components: {

  },
  mounted(){

  },

  methods : {
	enter(){
		location.href = 'http://172.30.1.5:8000/chat/'
	},

  }
}

</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Dongle&display=swap');

:root {
	--clr-neon: rgba(235, 97, 143, 1);
	--clr-bg: rgba(1, 1, 1, 1);
	--clr-white: rgba(255, 255, 255, 1);
}
body {
	min-height: 100vh;
	display: grid;
	place-items: center;
	background: var(--clr-bg);
	font-family: 'Dongle', sans-serif;
	color: var(--clr-neon);
	font-size: 2rem;
}
.mainbody,
.mainbody::before,
.mainbody::after {
	box-sizing: border-box;
}


.button {
	font-size: 3rem;

	display: inline-block;
	cursor: pointer;
	text-decoration: none;
	color: var(--clr-neon);
	border: var(--clr-neon) 4px solid;
	padding: 0.25em 1em;
	border-radius: 0.25em;

	text-shadow: 0 0 0.125em rgba(255, 255, 255, 0.55), 0 0 0.5em currentColor;

	box-shadow: inset 0 0 0.5em 0 var(--clr-neon), 0 0 0.5em 0 var(--clr-neon);

	position: relative;
}

.button::before {
	pointer-events: none;
	content: "";
	position: absolute;
	background: var(--clr-neon);
	top: 120%;
	left: 0;
	width: 100%;
	height: 100%;

	transform: perspective(1.2em) rotateX(40deg) scale(1.5, 0.5);
	filter: blur(1.15em);
	opacity: 0.7;

	transition: transform 0.5s linear;
}

.button::after {
	content: "";
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	box-shadow: 0 0 4em 0.6em var(--clr-neon), 0 0 1em 0.2em var(--clr-white);
	opacity: 0;
	background: var(--clr-neon);
	z-index: -1;
	transition: opacity 0.5s linear;
}

.button:hover,
.button:focus {
	color: #FFE5CA;
	text-shadow: none;
}

.button:hover::before,
.button:focus::before {
	opacity: 1;
	transform: perspective(1em) rotateX(40deg) scale(1.5, 0.6);
	transition: transform 0.5s linear;
}

.button:hover::after,
.button:focus::after {
	opacity: 1;
}

</style>
