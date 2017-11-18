<template>
 <div id="app">
    <div class="body body-class">
    <div id="#wrapper">
    <div class = "tile is-ancestor main-tile">

      <div class="tile is-ancestor">
      <div class="tile is-8 is-vertical is-parent">
        <div class="tile is-child">
          <section class="hero is-primary hero-styles" id="#hero">
          <div class="hero-body">
            <div class="title-div">
              <h1 class="title">
                Mental Health Crisis Chat
              </h1>
              <h2 class="subtitle">
                Lorem Ipsum
              </h2>
            </div>

          </div>
          </section>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
            <article class="tile is-child">
              <div class="content login-box">
                <div class="tile is-child is-vertical image-tile">
                  <img src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-579281.jpg"/>
                </div>
                <div class="tile is-child box is-vertical">
                  <b-field label="Username"
                    type="is-success"
                    message="This username is available">
                    <b-input placeholder="Enter Username"></b-input>
                  </b-field>

                  <b-field label="Password"
                    type="is-warning"
                    :message="['Password is too short', 'Password must have at least 8 characters']">
                  <b-input placeholder="Enter Password" type="password"></b-input>
                  </b-field>

                  <button class="button is-primary" @click="$toast.open('Login')">
                        Login
                  </button>


                  <router-link tag="button" class="button is-primary" to="/sign-up">Register</router-link>

                </div>
              </div>
            </article>
        </div>
      </div>
    </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.body-class {
    height: 100%;
    min-height: 100%;
    margin-left: 20px;
    margin-right: 20px;
    padding: 0;
}

.hero-styles {
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
}

#wrapper
{
    height: 100%;
    min-height: 100%;
}

.hero-styles {
  height: 90vh;
}

.main-tile {
  height: 100%;
  min-height: 100%;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

.image-tile {
  padding-top: 70px;
}
</style>
