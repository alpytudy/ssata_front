<template>

<div class="article">
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#">SSATalk</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Log In</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SignUp</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  
</template>

<script>
import axios from 'axios'

export default {
  name: "Article",
  data () {
    return {
      datas : [], 
      modalLogin : false,

    }

  }
}

</script>


<style>
.article {
  height: 100vh;
  width: 100vw;
  background: var(--clr-white);
}

</style>
