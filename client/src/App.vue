<template lang=html>
  <div id="app">
      <div class='Img'>
  <div style="background-image: url('https://cdn.mos.cms.futurecdn.net/hrBSCFbPcR5iTFxHFoJKXN.jpg')"></div>
  
</div>
<header>
  <div>
    <section class = "top">
    <h1>
      JAMILYN
    </h1>
    <p>
      Committed to saving endangered species
    </p>
    </section>
  </div>
  <nav role='navigation'>
    <ul>
      <li>
        <a class='active' href='#'>Home</a>
      </li>
      <li>
        <a href='#'>Endangered Animals</a>
      </li>
      <li>
        <a href='#'>Quiz</a>
      </li>
      <li>
        <a href='#'>Signup</a>
      </li>
    </ul>
  </nav>
</header>

<div class='quote-container'>
       <h3>{{quote.quote}}</h3>
       <h4>{{quote.character}}</h4>
      </div>
      <p> this is a test paragraph</p>
  

  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      quote: '',
      trivia: [],
      
    }
  },
  components: {
    
  },
 mounted(){
  fetch('https://got-quotes.herokuapp.com/quotes')
  .then(res => res.json())
  .then(quote => this.quote = quote),
  fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=boolean')
  .then(res => res.json())
  .then(trivia => this.trivia = trivia)
  
  }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,100&display=swap');
body {
  font-size: 14px;
  font-family: Sans-Serif;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}

.Img > div {
 width: 100%;
  height: 440px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  
}


header {
  position: absolute;
  top: 0;
  width: 100%;
  padding: 0px 20px;
  
}
header > div {
  max-width: 600px;
  margin: 0 auto;
  padding-top: 150px;
  height: 380px;
  text-align: center;
  color: White;
}

header p {
  font-size: 2em;
  margin-bottom: 0.7em;
  font-family: 'Montserrat', sans-serif;
}

h1 {
  font-weight: 600;
  font-size: 3.4em;
  margin-bottom: 0.2em;
}
nav {
  max-width: 600px;
  margin: 0 auto;
  height: 60px;
  border-top: 2px rgba(255, 255, 255, 0.308) solid;
}
nav ul li {
  display: inline-block;
  margin-right: 35px;
  
}
nav ul li a {
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.308);
  display: block;
  
  
}
nav ul li a.active {
  box-shadow: 0px -1px 0px #fff;
}
nav ul li a.active,
nav ul li a:hover {
  color: #fff;
}

.quote-container {
  text-align: center;
}

.top {
  animation: fadeIn 3s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-2em);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>

