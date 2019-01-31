import gql from 'graphql-tag'

const launch = gql`
  query {
  launch(id: 1) {
    id
    site
  }
}
`

export default {
  launch,
}
