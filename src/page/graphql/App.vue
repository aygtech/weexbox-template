<template>
  <div>GraphQL</div>
</template>

<script>
import api from './api'
import client from './apolloClient'

export default {
  created() {
    client
      .query({
        query: api.launch,
        variables: { id: '1' },
      })
      .then(data => console.log(data))
      .catch(error => console.error(error))
  },
}
</script>