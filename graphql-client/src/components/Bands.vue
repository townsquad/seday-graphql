<template>
  <div>
    <h3> Bands </h3>
    <div>
      <b-table stacked striped :items="bands" :fields="fields" />
    </div>    
  </div>  
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