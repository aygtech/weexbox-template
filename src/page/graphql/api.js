import gql from 'graphql-tag'

const launch = gql`
  query launch($id: ID!) {
  launch(id: $id) {
    id
    isBooked
    rocket {
      id
      name
    }
    mission {
      name
      missionPatch
    }
  }
}
`

export default {
  launch,
}
