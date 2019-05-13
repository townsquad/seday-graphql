<template>
  <!DOCTYPE html>
  <html lang="en">
    <body>
      <div id="app">
        <b-container>
          <bands/>
        </b-container>
      </div>
    </body>
  </html>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Bands from './components/Bands.vue'

export default {
  name: 'app',
  components: {
    Bands
  }
}
</script>

