import React from 'react';
import styled from 'styled-components/macro';
import { useQuery } from 'react-apollo';
import { withRouter, RouteComponentProps } from 'react-router';
import queryString from 'query-string';

import PlaceCard from '../components/PlaceCard';
import Button from '../components/Button';

import { GET_PLACES } from '../graphql/queries/__generated__/GET_PLACES';
import { GET_PLACES as GET_PLACES_QUERY } from '../graphql/queries/GetPlaces';
import Map from '../components/Map';

const Container = styled.div`
  display: flex;
  height: calc(100vh - 70px);
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 681px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const ControlContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MapContainer = styled.div`
  flex: 1;
`;

const Search: React.FC<RouteComponentProps> = ({ location }) => {
  const query = queryString.parse(location.search);

  const { loading, error, data, fetchMore } = useQuery<GET_PLACES>(
    GET_PLACES_QUERY,
    {
      variables: {
        first: 4,
        search: query.search,
        type: query.type && !Array.isArray(query.type) ? query.type.toUpperCase() : undefined,
      }
    }
  );

  const getPlaces = ({ first, last }: { first?: number, last?: number }) => {
    if (!data) {
      return;
    }

    if (!data.places) {
      return;
    }

    let after = undefined;
    let before = undefined;
    if (first) {
      after = data.places[data.places.length - 1].id;
    }

    if (last) {
      before = data.places[0].id;
    }

    fetchMore({
      variables: {
        after, before, first, last
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        if (fetchMoreResult.places.length === 0)
          return prev;

        return fetchMoreResult;
      }
    })
  }

  return (
    <Container>
      <LeftContainer>
        <CardContainer>
          {!loading && !!data && !error && data.places.map(place => (
            <PlaceCard
              key={place.id}
              name={place.name}
              description={place.description}
              city={place.address.city}
              thumbnail={place.images[0].thumbnailUrl} />
          ))}

          {!loading && !!data && !error && data.places.length === 0 && <p>No result</p>}
        </CardContainer>
        <ControlContainer>
          <Button style={{ margin: 5, width: 100 }} onClick={() => getPlaces({ last: 4 })}>Previous</Button>
          <Button style={{ margin: 5, width: 100 }} onClick={() => getPlaces({ first: 4 })}>Next</Button>
        </ControlContainer>
      </LeftContainer>
      <MapContainer>
        <Map data={data} />
      </MapContainer>
    </Container>
  );
}

export default withRouter(Search);