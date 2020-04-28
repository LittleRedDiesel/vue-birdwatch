<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';

  export default {
    components: {
      NavBar
    }
  }
</script>

<style lang="scss">

html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: "Lucida Console", Monaco, monospace;
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
}

h1, h2, h3, h4, h5 {
  margin-top: 0;
}

#app {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.display {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 30px 40px;

  h1 {
    flex: 1 1 100%;
    margin-bottom: 40px;
  }
}

a {
  color: #006D77;
  font-weight: 600;
  background-color: transparent;
  text-decoration: none;
}

img {
  border-style: none;
  width: 100%;
}

#nav {
  padding: 30px;
  margin-bottom: 40px;
  background-color: #EDF6F9;
  border-bottom: 3px solid #83C5BE;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
}

#nav a:visited {
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #006D77;
}

.-shadow {
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 6px 0, rgba(0, 0, 0, 0.19); 
}
</style>
