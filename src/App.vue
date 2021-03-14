<template>
  <div id="app">
    APP
    <hr>
    <router-view/>
    <div class="nav">导航栏
      <router-link to="/Money">Money</router-link>
      |
      <router-link to="/Label">Label</router-link>
      |
      <router-link to="/Statistic">Statistic</router-link>
    </div>

  </div>
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
