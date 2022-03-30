<template>
  <div id="app">
    <div id="nav">
      <h2>ORDO</h2>
      <h3>Sprints</h3>
      <router-link :to="`/sprint/${sprint.id}`" v-for="(sprint, sprintIndex) in $store.state.sprints" :key="`nav_sprint_${sprintIndex}`" :sprint="sprint">{{sprint.title}}</router-link>
      
      <h3>Configurações</h3>
      <router-link to="/about">Perfil</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    console.log(this.$store.state.sprints);
  }
}
</script>

<style lang="scss">
$background-color:  #F2F3F4;
$color-text:        #737373;
$color-green:       #99B83C;
$color-yellow:      #DFB05F;
$color-red:         #B83C3C;
$color-blue:        #3C88B8;

body {
  background-color: $background-color;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-text;//#2c3e50;
  display: grid;
  grid-template-columns: 20% 80%;
  height: 100vh;
  overflow-y: hidden;
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 1px 0px 10px #00000040;
  z-index: 99; 

  h3 {
    margin: 0px;
  }

  a {
    font-weight: bold;
    text-decoration: none;
    color: #2c3e50;
    border-radius: 8px;
    padding: 8px 16px;
    transition: 125ms ease-in-out;

    &.router-link-exact-active {
      background-color: $color-green;
      color: white;
    }

    &:hover {
      &:not(.router-link-exact-active) {
        background-color: $background-color;
      }
      &.router-link-exact-active {
        background-color: #79981C
      }
    }
  }
  background-color: white;
}
</style>
