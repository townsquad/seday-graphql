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
    bands: gql`query {
        bands {
            id
            name
            country
            genre
        }
    }`,
  },
  data() {
    return {
      bands: [],
      fields: [
        { key: 'id', label: 'Id', sortable: false },
        { key: 'name', label: 'Name' },
        { key: 'country', label: 'Country' },
        { key: 'genre', label: 'Genre', formatter: value => { return value.join(', ') }},
      ]
    }
  }
}
</script>