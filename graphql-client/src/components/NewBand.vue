<template>
  <b-container>
    <h2>Add Bands</h2>
    <b-form>
      <b-form-group label="Name:"  label-for="name-input">
        <b-form-input
          id="name-input"
          v-model="band.name"
          required
          placeholder="Band Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Country:" label-for="country-input">
        <b-form-input
          id="country-input"
          v-model="band.country"
          required
          placeholder="Country"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Genre:" label-for="genre-input">
        <b-form-input
          id="genre-input"
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