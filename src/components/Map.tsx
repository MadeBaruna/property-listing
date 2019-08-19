import React from 'react';
import styled from 'styled-components/macro';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// workaround to fix marker icon
import marker from 'leaflet/dist/images/marker-icon.png';
import marker2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { GET_PLACES } from '../graphql/queries/__generated__/GET_PLACES';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: marker2x,
  iconUrl: marker,
  shadowUrl: markerShadow
});

interface IProps {
  data?: GET_PLACES,
}

const MapStyled = styled(LeafletMap)`
  height: 100%;
  width: 100%;
`;

const Map: React.FC<IProps> = ({ data }) => {
  let bounds = new L.LatLngBounds([0.1, 0], [0, 0.1]);
  let center = new L.LatLng(0, 0);
  if (data && data.places && data.places.length > 0) {
    const places = data.places;

    // cannot get bounds if there is only 1 marker
    if (places.length === 1) {
      const place = places[0];
      center = new L.LatLng(place.address.latitude, place.address.longitude);
    } else {
      // https://stackoverflow.com/questions/16845614/zoom-to-fit-all-markers-in-mapbox-or-leaflet
      const markers = places.map(place => L.marker([place.address.latitude, place.address.longitude]));
      const group = L.featureGroup(markers);
      bounds = group.getBounds();
    }
  }

  return (
    <MapStyled center={center} zoom={13} bounds={bounds}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      {data && data.places && data.places.map(place => (
        <Marker
          key={place.id}
          position={[place.address.latitude, place.address.longitude]}
          onMouseOver={openPopup}
          onMouseOut={closePopup}
        >
          <Popup>
            <h3>{place.name}</h3>
            <p>{place.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapStyled>
  );
}

const openPopup = (e: any) => {
  e.target.openPopup();
}

const closePopup = (e: any) => {
  e.target.closePopup();
}

export default Map;
