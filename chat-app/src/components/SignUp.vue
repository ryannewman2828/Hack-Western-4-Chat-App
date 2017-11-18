<template>
  <div class="sign-up">
    <div class="container">
    <h3 class="heading"> Sign up Here!</h3>
    <section>
        <b-field class="has-text-left" label="Name">
            <b-input value="Kevin Garvey"></b-input>
        </b-field>

        <b-field class="has-text-left" label="Email"

            >
            <b-input type="email"
                value="john@"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field  class="has-text-left" label="Twitter Username"

            >
            <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field class="has-text-left" label="Password"

            >
            <b-input value="123" type="password" maxlength="30"></b-input>
        </b-field>

        <b-field class="has-text-left"
            label="Your Role"

        >
            <b-select placeholder="Select a Role">
                <option value="volunteer">Volunteer</option>
                <option value="therapist">Therapist</option>
                <option value="student">Student</option>
            </b-select>
        </b-field>

        <div class="field is-grouped button-group">
        <p class="control">
          <a class="button is-link">
            Register
          </a>
        </p>
        <p class="control">

        <router-link tag="button" class="button" to="/">Go Back</router-link>

        </p>
        </div>
    </section>
    </div>
  </div>
</template>

<script>
  import options from '@/assets/data_test.json'
  export default {
    name: 'signUp',
    data () {
      return { options }
    },
    methods: {}
  }
</script>

<style scoped>

.container {
  width: 500px;
}

.heading {
  font-size: 30px;
  text-align: center;
  padding-bottom: 40px;
}

.label {
  text-align: left;

}

.button-group {
  margin-top: 30px;
}
</style>
