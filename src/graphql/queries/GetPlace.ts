import gql from 'graphql-tag';

export const GET_PLACE = gql`
query GET_PLACE($id: ID!) {
  place(id:$id) {
    id
    name
    description
    facilities {
      id
      name
    }
    type
    images {
      id
      thumbnailUrl
      url
    }
    address {
      street
      city
      country
      longitude
      latitude
    }
  }
}
`;
