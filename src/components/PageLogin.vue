<template>
  <section class='page'>
    <header class='page-title'>
      <h2>Welcome</h2>
      <h4>login</h4>
      <form name='login' @submit.prevent="onSignin">
        <input type='text' name='email' placeholder='email' v-model='email' />
        <input type='password' name='password' placeholder='password' v-model='password' />
        <button type='submit' :disabled="loading" :loading="loading">Login</button>
      </form>
    </header>
  </section>
</template>

<script>
  export default {
    name: 'PageLogin',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    
    methods: {
      onSignin () {
        this.$store.dispatch('signUserIn', { email: this.email, password: this.password })
      },
      onDismissed () {
        this.$store.dispatch('clearError')
      }
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
