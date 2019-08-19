import gql from 'graphql-tag';

export const GET_PLACES = gql`
query GET_PLACES($first: Int, $last: Int, $after: String, $before: String, $search: String, $type: PlaceType) {
  places(first: $first, last: $last, after: $after, before: $before, search: $search, type: $type) {
    id
    name
    description
    type
    images {
      thumbnailUrl
    }
    address {
      city
      latitude
      longitude
    }
  }
}
`;
