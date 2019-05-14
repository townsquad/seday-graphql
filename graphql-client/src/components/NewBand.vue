<template>
  <b-container>
    <h2>Add Bands</h2>
    <b-form>
      <b-form-group label="Name:"  label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="band.name"
          required
          placeholder="Band Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Country:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="band.country"
          required
          placeholder="Country"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Genre:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="band.genres"
          required
          placeholder="Band Genres"
        ></b-form-input>
      </b-form-group>
      <b-button @click="addBand" variant="primary">Save</b-button>
    </b-form>
  </b-container>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'NewBand',
  data() {
      return {
        band: {
          name: null,
          country: null,
          genres: null
        }
      }
  },
  methods: {
    addBand() {
      const newBand = {
        name: this.band.name,
        country: this.band.country,
        genre: this.band.genres.split(",")
      };
      this.$apollo.mutate({
          mutation: gql`mutation ($band: BandInput!) {
            addBand(band: $band) {
              name
              country
              genre
            }
          }`,
          variables: {
            band: newBand,
          }
        }).then(() => {
          this.$router.replace(`/bands`);
        }).catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    }
  }
}
</script>