<template>
  <div class='loader'>
    <h1>{{ message || this.random() }}</h1>
    <div class="siimple-spinner siimple-spinner--green siimple-spinner--large"></div>
  </div>
</template>

<script>
  import _sample from 'lodash/sample'
  
  export default {
  
    name: 'AppLoader',
  
    props: [
      'message'
    ],
      
    methods: {
      random () {
        const randPhrases = [
          'Turning on animations..',
          "You're our favorite.",
          'GIFs are an art you know... you must be a natural',
        ]
        
        return _sample(randPhrases)
      }
    }
  }
  
</script>

<style lang='scss'>
  @import '../styles/_variables.scss';

  .loader {
    text-align: center;
    margin: 20px auto;
    padding: 20px;
    
    .siimple-spinner {
      display: inline-block;
      width: 100px;
    }
    
    h1 {
      color: navy;
      font-weight: 400;
      text-shadow: 1px 1px 2px green, 2px 2px 0 navy;
    }
  }
</style>


  