<template>
  
  <div>
    <AppHeader />
    <AppLoader v-if='!isLoaded' message='Demo on AppRoot'/>
    <main v-if='isLoaded' class='siimple-content siimple-content--large'>
      <router-view></router-view>
    </main>
    
  </div>
  
</template>

<script>
  import AppHeader from './AppHeader.vue'
  import AppLoader from './AppLoader.vue'
  
  export default {
    
    name: 'AppRoot',  
    
    data () {
      return {
        isLoaded: false
      }
    },
    
    created () {
      setTimeout( () => {
        this.isLoaded = true
      }, 1000)
    },
          
    components: {
      AppHeader,
      AppLoader
    }
  }
</script>

<style lang='scss'>
  @import '../styles/_variables.scss';
  
  * {
    margin: 0;
    padding: 0;
  }
  
  body {
    @include base-font;
  }

</style>