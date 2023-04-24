<template>
<!-- Navbar -->
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid ">
      <a class="navbar-brand" href="#" style="font-size : 2.5rem">SSATalk</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Sign Up</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Log In</a>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style="font-size : 2rem">
            글 작성
          </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

<!-- 모달 -->

<!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title" id="exampleModalLabel" style="font-size : 4rem">글쓰기</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="input-group flex-nowrap">
          <p>제목</p>
          <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
        </div>
        <div class="input-group">
          <p>내용</p>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">등록</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
      </div>
    </div>
  </div>
</div>


<div class="article">
  <div class="container">
      <div class="card-group px-5 py-2" >
        <div class="row">
        <div class="card col-12 col-sm-6 col-md-4 col-xl-3 py-3" >
          <img src="data:image/jpeg;base64,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" alt="">
          <div class="card-body">
            <h5 class="card-title" style="font-size : 2rem">싸피 너무 조하요</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>

        <div class="card col-12 col-sm-6 col-md-4 col-xl-3 py-3" >
          <img src="data:image/jpeg;base64,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" alt="">
          <div class="card-body">
            <h5 class="card-title">싸피 너무 조하요</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>

        <div class="card col-12 col-sm-6 col-md-4 col-xl-3 py-3" >
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHBhUQBxAWFhIWEhYVEhgPFRAYGRMaFRYXFxUXFRYYHSggGCYlIxkVIj0hJSsuLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0mICYtLS0tLjAtLS0vLS0tLS0tLS0tLS0tLS01LSsrLS0tLSstLS0tLS0rLS0tLS0tLS0tLv/AABEIALYAtAMBIgACEQEDEQH/xAAcAAEBAAMBAQEBAAAAAAAAAAAAAQUGBwQCAwj/xABAEAACAQMCAgUJBQYFBQAAAAABAgADBBEFEgYhEzEyQVEHFCJCUmFxgZEVI4KSoTNicrHB0aKy4fDxFkRTc5P/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QALBEAAgIBAgMHAwUAAAAAAAAAAAECEQMEIRIxQQUTFDJRweFhofEiM4GRsf/aAAwDAQACEQMRAD8A7jERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQCZjMksAZjMSQC5jMSQC5jMSQC5jMSQC5jMSQC5jMRAGYzJEAuYzEQBmMySwBmMySwBmJIgCWSIBZJZIBZIiAWSIzALJGYgFkiIBYkn59MvS7Nw3EZAzzx448IB+kT5Jng0q9N6tQuANlapTGO8IcZ+M7TaIuSTS9TIxMdq2pLplsGcFiWVEVet2Y9S/77p661dbekXrMFUDJLHAAjhezHHG2r5H7SyA56onCQlklgEiIgCIiAWSJ81BuQhTjlyI7oBZjb6hUfV6FSj2FFUVeeBhgu3l38xJp63NCuUvWSomPRqAbGJ8HTq+Y+kxPGHGdLhrYm1qtzUH3VCmcMw9tz6i8u0fA+Bklae2/wAlTqUd9vjczeqmr5iw07HSEAKWPIZPM/Ic566YIT0jk458sZnJ34z1hqgqUaVq2DkUEWqWZesjpC3ax4fQ9U3/AIT4io8UaKtzp+cH0XVu1TcdpG+o594IMlOEoUpKiOLJDI3KEr6H1p1w95rlZgSKNMCiq9zP2nb5chM3PHQ1GjcVzTtq9NnHaVHRmHxUHM9ki3uWQi0t3Z49Mvl1GyWtSBCsMjd19eP6T5vLipRu6Yp09yMSrlTzT2Tjw8flP2urmnZ0s3VRUXxqMqj9ZhLrjXTbfd0uoW+VUswWrTY4HPkq82P7o5zm13R2m0le5sXdzniq2AqajTr7iCiuuB6wfb1/DbOfP5S7m9G7RdPApHmj3lXazjx6NAcD5z5Xyg6in7Swt2/9dw6/5klscGWrUWZ56nBdSmtvqdQPOfhQt0t1IoKACxY4HWzHJP1nKdd421HV9P8AN9PtPNGcgNXFwlQonfsAAOT4/wDIw32jX4MC31jcvUpCqtK4t7mq7ioHDN0gYk7T6PaA5HxGRO+HyKLk1SC1eFzjGMk2/Tc7myhiN3ccjPcZ5dT08ajQFOsTt3qzAesFOdp92cfScr/6u1XVKIqJWo2ysNyrTo9I6q3VvNU4zj3T16PxteaLrVCjxVUSrQu+VCqqolSmdypl0XkFywH6+InJYckEpNUI58OWTxxdvqdGub80bxaa0ajFsHKL6KjOMs5IHy65kJiRr9ubjo+kIcttAZKo9LO3HMeMy0qkntaouxyTunfsWWSJwsEREAREsATzXN3TtUzcuqDOAXZVBPhznpn5VqK1lxVUEeDDInVV7nHdbEo1Vr0w1IgqRkFTkH5zgtjefbXFd9d1ebdP0dPPq013AD6BfpO9UaS0aYWiAAOQCjAHyn8+3lI8L+UG4trgYp1am6mT1Ycs9I/qyfFZo0soxzJvkY9dCc9NJR51+Ta9IUefCpWcJTojp6rnuWkQzf0E0bh9W1KpdU7SpUpWD1zU6FW2l92diOV54C7cr8JttRBWtqlKpyWrSek5A5hX9b5EA/KavwhnT7utZ3fKoG3r4MMYYr7QxtPwM9DNj4s8eLynjaTNwaTJ3fm9vUylfh5Fs6lfR16Gva0WuKT0NqkdEVLb/a9HPX3+4kTMcUccVtU4BsvManR3F5VNKs1I7SvRNsrbD1rklD8GmO4muaicIXFKyyCz02q7et6QVt6/DOw/DdMFbUETUNOoWtQVFS1a6qMvUKtdnZxj3baS+PozJqYXqFFKuR6OhzPwbm3bVsy1Phy0ptnoFY+NTc5P8W5p7qOjW10y0bmigpMwVtgVCoY43gjs46/wz1W6h7lBU7JdQxJxgZXd+kXLCpc1OiXavS1FQA8tiuVQr8QAfxT1O7x+RR5r0PAWfN+45N011MQeJbXTbDo7tGa96Q0KlPDKlt0b7C+/1zyyB8jjvyOqagNH4fq3CW6VXWtSU9MX2qjh+foEc8oPzTSfKPb9HxC1YDAuKSVxj22Gyr/jR/zTetPo/atgUrMgpNQWrWNY4QIm18v8DtMwYp5JxnGUqaPXz4sWOeKcYWne3rfLmavZ8bre3SpXt6VIE4LUnqnm3Z3K5PKbJWpLWTbVUEd4cKRNa4sudK+yjT0xumuMjY9Gk1GnSG70w27nUyOX68plOGLk3WhU2rHLYKknrOwkfyCy3R5uJvG3xfUz9o6ZQjHPGPD0r8Gc06z8/vlpZwGOWbwRebn6TCaODx/5UVq0xiztdroO5aVA/cj8b88eGfCZSu7Jol6bc4bzCtgjrxlN/wCm6Z/yJaTSocE9MBl7irUNXI7kdqSp8AAfzmZ+0JtzUeiNvY+NLC59W/8ADoqsCJ9TxWGn09OplLRdqls4BYgH3Z6vgJ7ZgdWevG635iWSWcOkiIgCIlgEgjI/tLJAMdYaRSsaxejuLkYLPUqOSPxNNM8sfC323oBubVfv7cFuXXUp9dRfl2h/CfGbjfWlW5rjorg06eBuFNBuY59tuofATXfKJxe3DNGlR05Fa5uXK0ul/Z0wuAzvjme0AB/bBk7db2yuNRTVUkc34Y1L7S0oNV7aHY58SvZPzG2fXENia2nNc2vK4tVFZGA7VNXC1UPu9NW/P4z60LSRpFoUB3MzFmIG0E+Cj1QJnUoAaDcPXYKK1JrOluGd7Ve3tHrYVSfk3hPayKXh6nz9+h8xilDxjlDy7/11/gxenXgv7FKtPqZc4Pceyw+u4THWvD66Zrwr2oxRqUam0f8AjqK6K6fDBUj3PjumS02xFhapQtckDko62csd31JMymoV0trujpikG6CtWqKCuAz4208nluChTt7+WJLK4/o4+fwRw8b73uk3Gvfb7HlpUzVqqlPmWYKPeWOFn1cU1oVynT0XcZDrQqhzSIOMPjsnP+WZXStIr0tTpvc0WSmjh3eptCqqcyWOfdORaLrK2fELVq59CqzCoVGSqu+7eq+tjrxIZdWoZIpNV1LNN2dLJhnJp8S5G0cdWfnfDyVFBLUKu0gDJNO4/s6L/wDSZbQaT/YDUqwwzabcIwb1fuD2vmBPPecV6dZUX80rV7hyhCinS6FM5DDcavPHLwmP1nju3p6PUocPUqwqVl6OpVuui3KjddOkiMe11Z/0xlyZcSc5Rd8Rvw6bUNYoTVKLu7+x7vJvwhZ6zwVXvLyialwpuETezbFK09yFU6s+kOvMx3AbiroQVebK7bgOZG7mvo++dR8lHD1TQeDlp6iuKlV2rOjDsbwAqt79oXP0mi675OdR0DVmq8DtUNFxgClVWnUpjOejbcwDqO45z/M5MGfuZ8VWehrNKtTj7u6MqtnUXS7tnpOqeYXQZnRlX9kcc2+EzPkKq9JwGAfVuKw/xbv6zQ24C4g1obNUqMEz/wB3eM6j8CM869wRw2OFOH1tVfewZnqNjAZ3OW2r3DqA+EZ8zzS4mqGk0q02PgTs2GIllJqJESwCREQBERAESyQBOTeXezqJStLy3TK0KjBzjku4o1Pd7IyhGf3h4zrM/C6tku7dqdygZGUqyuAVZW6wR4QnQavZnCqXGWn0rMPXS4qVdoJpKEp0w3rBqmSSPeo+UwWrazf8W1Dd2dFlt7QegLVc07Yej2fbbx93cBOyUfJbpNGvvFnnnkK9Wuyj8DPj6zbrS1p2luKdpTVEUYVaaqqqP3QOQlk805u5MoxabDjTUY1Z/PFLyhXd191w5a0qdVh12lJ6tY+1tJJx9Jk9M8kF7q2ntcarXWjXdtypWBqM27tPWdW5MTz7/fz6u7pSFP8AZqBk5O0AZn2ZBycnbZbGMYKoqkcEPkW1E8vOLXb/AB3P8tk3zR/JfaWvDJs9UHSu9TpXqLlGV8bR0WOagDl3555nQInCRodj5JdKtDmpQeqe7p6tRh+VSAfnMxpHAum6NdCrp1lTWoDlWO5ip8U3k7flNlkgCIiAIiWASIiAIiWASIiAJZJYAkliAJJYgCSWSAWSWIAkliAIiIBIliAIiIBJYiASWIgEiIgH1ERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQD//Z" alt="">
          <div class="card-body">
            <h5 class="card-title">싸피 너무 조하요</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>

        <div class="card col-12 col-sm-6 col-md-4 col-xl-3 py-3" >
          <img src="data:image/jpeg;base64,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" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">마라는 중화사상에 찌들어버린 친중의 음식</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        </div>
    </div>
</div>

  <!-- <div class="article-container container-sm">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-4">
        이미지
      </div>
      <div class="col-12 col-lg-8">
        <div class="row"><p>제목</p></div>
        <div class="row"><p>내용</p></div>
        <div class="row"><span>작성자</span><span>댓글</span><span>좋아요</span></div>
      </div>
    </div>
  </div> -->






























</div>
  
</template>

<script>
import axios from 'axios'
export default {
  name: "Article",
  data () {
    return {
        
    }

  },
  components : {
  },
  methods : {

  }
  
}

</script>


<style>
.article {
  height: 100vh;
  width: 100vw;
  background: var(--clr-white);
}
@media(max-width: 960px) {
  .article-container {
  border: 1px solid black;
  width: 760px;
}}
@media(min-width: 961px) {
  .article-container {
  border: 1px solid black;

}}
.input-group {
  margin-bottom: 20px
}
textarea {
  width:500px; 
	height:400px; 
}


</style>
