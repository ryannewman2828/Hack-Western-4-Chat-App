<template>
  <div class="sign-up">
    <p> Register an Account Here!</p>
    <input type="text" placeholder="email"><br>
    <input type="password" placeholder="Password"></br>
    <button>Sign Up</button>
    <span>or go back to <router-link to="/">Login</router-link>.</span>
  </div>
</template>

<script>
  export default {
    name: 'signUp',
    data: function() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
</style>
