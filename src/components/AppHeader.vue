<template>
  <div class='app-header'>
    <nav class='container'>
      <header>
        <router-link to="gerfs" class='title'>GERFS</router-link>
      </header>
      <div class='account' v-if='userIsAuthenticated'>
        <router-link to="gerfs">Account</router-link> |
        <button @click="onLogout">Logout</button>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'AppHeader',
    computed: {
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
          .then(() => console.log(this))
      }
    }
  }
</script>

<style lang='scss'>
  
  @import '../styles/_variables.scss';
  
  .app-header {
    background: $med-grey;
    padding: 20px;
  }
  
  .container { 
    justify-content: space-between; 
  }
  
  .title {
    @include retro-font;
    color: $light-grey;
    font-size: 35px;
    font-weight: 100;
    text-shadow: 4px 4px 0 $med-blue, 5px 5px 0 $blush, 6px 6px 0 black;
    text-decoration: none;
    
    &:hover {
      text-shadow: 4px 4px 0 $blush, 5px 5px 0 black;
    }
  }
  
</style>