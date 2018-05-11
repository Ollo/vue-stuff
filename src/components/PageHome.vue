<template>
  <section class='page'>
    <header class='page-title'>
      <h2>Home > Welcome : User </h2>
    </header>
  </section>
</template>

<script>
  export default {
    name: 'PageHome',
    created () {
      // console.log(this.$store)
    }
  }
  
  
</script>

<style lang='scss'>
  @import '../styles/_variables.scss';
  
  .page {
    @extend .container;
    
    &-title {
      padding: 20px;
    }
  }
</style>
