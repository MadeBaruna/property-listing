import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useQuery } from 'react-apollo';
import styled from 'styled-components/macro';
import MdiCityIcon from 'mdi-react/CityIcon';
import MdiChevronLeft from 'mdi-react/ChevronLeftCircleIcon';
import MdiChevronRight from 'mdi-react/ChevronRightCircleIcon';
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { GET_PLACE } from '../graphql/queries/__generated__/GET_PLACE';
import { GET_PLACE as GET_PLACE_QUERY } from '../graphql/queries/GetPlace';

import 'leaflet/dist/leaflet.css';
// workaround to fix marker icon
import marker from 'leaflet/dist/images/marker-icon.png';
import marker2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: marker2x,
  iconUrl: marker,
  shadowUrl: markerShadow
});


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;

  &:after {
    content: "";
    display: block;
    padding-bottom: 30%;
  }

  img {
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  max-width: 1024px;
  width: 100%;
  padding: 20px;

  div.row {
    display: flex;

    div.col {
      flex: 1;
      padding: 10px;
    }
  }

  h2 {
    margin: 0 10px;
  }

  h4 {
    margin-top: 20px;
  }
`;

const FacilityContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px -4px -4px -4px;
`;

const FacilityTag = styled.span`
  background: #0484f4;
  color: white;
  padding: 4px 8px;
  border-radius: 16px;
  margin: 4px;
`;

const MapStyled = styled(LeafletMap)`
  margin-top: 10px;
  height: 300px;
  width: 100%;
`;

const SliderContainer = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  position: relative;

  button {
    border: none;
    background: none;
    position: absolute;
    top: calc(50% - 24px);
    left: -24px;

    &.right {
      left: calc(100% - 48px);
    }
  }
`;

const Detail: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const { loading, error, data } = useQuery<GET_PLACE>(
    GET_PLACE_QUERY,
    {
      variables: {
        id: match.params.id,
      }
    }
  );

  if (loading) {
    return <p>Loading</p>
  }

  if (!data || error) {
    return <p>Failed to fetch property data</p>
  }

  const ref = React.createRef<AliceCarousel>();

  const { place } = data;
  const mapCenter = new L.LatLng(place.address.latitude, place.address.longitude);
  return (
    <Container>
      <ImageContainer>
        <img alt="property" src={place.images[0].url} />
      </ImageContainer>
      <Content>
        <h2>{place.name}</h2>
        <div className="row">
          <div className="col">
            <h4>DESCRIPTION</h4>
            <p>{place.description}</p>
            <h4>FACILITIES</h4>
            <FacilityContainer>
              {place.facilities.map(facility => <FacilityTag key={facility.id}>{facility.name}</FacilityTag>)}
            </FacilityContainer>
          </div>
          <div className="col">
            <h4>LOCATION</h4>
            <p style={{ display: 'flex', alignItems: 'center' }}><MdiCityIcon /> {place.address.city}</p>
            <p>{place.address.street}</p>
            <MapStyled center={mapCenter} zoom={16}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
              />
              <Marker position={mapCenter} />
            </MapStyled>
          </div>
        </div>
        <h4>IMAGES</h4>
        <SliderContainer>
          <AliceCarousel
            responsive={{
              0: { items: 3 }
            }}
            dotsDisabled
            buttonsDisabled
            infinite
            ref={ref}
            items={place.images.map(image => <img key={image.id} alt="property" src={image.thumbnailUrl} />)} />
          <button onClick={() => ref.current ? ref.current.slidePrev() : () => { }}><MdiChevronLeft size={48} /></button>
          <button onClick={() => ref.current ? ref.current.slideNext() : () => { }} className="right"><MdiChevronRight size={48} /></button>
        </SliderContainer>
      </Content>
    </Container>
  );
}

export default Detail;
