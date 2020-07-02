<template>
  <div id="app">
    <div id="nav">
      <router-link class="home" to="/">Medium</router-link>
      <router-link to="/authorization">Sign in</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

  body{
    padding: 0;
    margin: 0;
  }

  *{
    box-sizing: border-box;
  }

  #nav{
    max-width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }

  #nav a {
    font-weight: bold;
    /*color: #2c3e50;*/
    text-decoration: none;
    color: #000000;
  }

  /*#nav a.router-link-exact-active {*/
  /*  color: #42b983;*/
  /*}*/


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
