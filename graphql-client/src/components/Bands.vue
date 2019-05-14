<template>
  <b-container>
    <h2>Bands</h2>
    <b-table striped :items="bands" :fields="fields" />
  </b-container>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Bands',
  apollo: {
    bands() {
      return {
        query: gql`query bands {
          bands {
            id
            name
            country
            genre
          }
        }`,
        fetchPolicy: 'no-cache',
      }
    }
  },
  data() {
    return {
      bands: [],
      fields: [
        { key: 'id', label: 'Id' },
        { key: 'name', label: 'Name', sortable: true },
        { key: 'country', label: 'Country' },
        { key: 'genre', label: 'Genre', formatter: value => { return value.join(', ') }},
      ]
    }
  }
}
</script>