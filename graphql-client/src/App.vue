<template>
  <!DOCTYPE html>
  <html lang="en">
    <body>
      <div id="app">
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand>My Favorite Bands</b-navbar-brand>
          <b-navbar-nav>
            <b-nav-item to="/bands">Bands</b-nav-item>
            <b-nav-item to="/band">Add Band</b-nav-item> 
          </b-navbar-nav>
        </b-navbar>
        <router-view></router-view>
      </div>
    </body>
  </html>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
}
</script>

