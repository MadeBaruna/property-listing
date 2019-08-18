import React, { Component } from 'react';
import styled from 'styled-components/macro';
import { Map as LeafletMap, TileLayer, Marker, Popup, LatLng } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import PlaceCard from '../components/PlaceCard';

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
  height: calc(100vh - 70px);
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  width: 50%;
  max-width: 681px;
`;

const MapContainer = styled.div`
  flex: 1;
`;

const Map = styled(LeafletMap)`
  height: 100%;
  width: 100%;
`;

interface IState {
  lat: number;
  lng: number;
  zoom: number;
}

export default class Search extends Component<{}, IState> {
  state = {
    lat: -6.1766995,
    lng: 106.7895952,
    zoom: 18
  }

  render() {
    const position = {
      lat: this.state.lat,
      lng: this.state.lng
    };

    return (
      <Container>
        <CardContainer>
          <PlaceCard thumbnail="https://loremflickr.com/320/240/apartment,office?lock=1" name="Mediterania Garden Residence 22222222" description="Mediterania Garden Residence 2 berlokasi di Podomoro City Jl. Letjen S.Parman Kav.28. Apartemen ini dikembangkan oleh PT Agung Podomoro Land , Tbk,Mediterania Garden Residence 2 memiliki 6 tower. Dalam kompleks ini tersedia beragam fasilitas untuk mendukung hunian Anda, Terdapat pula beragam sarana dan fasilitas yang menjamin kenyamanan hunian Anda, seperti: Access Card, Atm Center, Basketball Court, Bbq Pit, Drug Store, Function Hall, Gym, Jogging Track, Laundry, Mini Market, Movie Theater, Playground, Restaurant, Salon, Super Market, Swimming Pool dan Tennis Court." city="Jakarta Barat" />
          <PlaceCard thumbnail="https://loremflickr.com/320/240/apartment,office?lock=1" name="Mediterania Garden Residence 2" description="Mediterania Garden Residence 2 berlokasi di Podomoro City Jl. Letjen S.Parman Kav.28. Apartemen ini dikembangkan oleh PT Agung Podomoro Land , Tbk,Mediterania Garden Residence 2 memiliki 6 tower. Dalam kompleks ini tersedia beragam fasilitas untuk mendukung hunian Anda, Terdapat pula beragam sarana dan fasilitas yang menjamin kenyamanan hunian Anda, seperti: Access Card, Atm Center, Basketball Court, Bbq Pit, Drug Store, Function Hall, Gym, Jogging Track, Laundry, Mini Market, Movie Theater, Playground, Restaurant, Salon, Super Market, Swimming Pool dan Tennis Court." city="Jakarta Barat" />
          <PlaceCard thumbnail="https://loremflickr.com/320/240/apartment,office?lock=1" name="Mediterania Garden Residence 2" description="Mediterania Garden Residence 2 berlokasi di Podomoro City Jl. Letjen S.Parman Kav.28. Apartemen ini dikembangkan oleh PT Agung Podomoro Land , Tbk,Mediterania Garden Residence 2 memiliki 6 tower. Dalam kompleks ini tersedia beragam fasilitas untuk mendukung hunian Anda, Terdapat pula beragam sarana dan fasilitas yang menjamin kenyamanan hunian Anda, seperti: Access Card, Atm Center, Basketball Court, Bbq Pit, Drug Store, Function Hall, Gym, Jogging Track, Laundry, Mini Market, Movie Theater, Playground, Restaurant, Salon, Super Market, Swimming Pool dan Tennis Court." city="Jakarta Barat" />
          <PlaceCard thumbnail="https://loremflickr.com/320/240/apartment,office?lock=1" name="Mediterania Garden Residence 2" description="Mediterania Garden Residence 2 berlokasi di Podomoro City Jl. Letjen S.Parman Kav.28. Apartemen ini dikembangkan oleh PT Agung Podomoro Land , Tbk,Mediterania Garden Residence 2 memiliki 6 tower. Dalam kompleks ini tersedia beragam fasilitas untuk mendukung hunian Anda, Terdapat pula beragam sarana dan fasilitas yang menjamin kenyamanan hunian Anda, seperti: Access Card, Atm Center, Basketball Court, Bbq Pit, Drug Store, Function Hall, Gym, Jogging Track, Laundry, Mini Market, Movie Theater, Playground, Restaurant, Salon, Super Market, Swimming Pool dan Tennis Court." city="Jakarta Barat" />
        </CardContainer>
        <MapContainer>
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position} onMouseOver={this.openPopup} onMouseOut={this.closePopup}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </Map>
        </MapContainer>
      </Container>
    );
  }

  openPopup = (e: any) => {
    e.target.openPopup();
  }

  closePopup = (e: any) => {
    e.target.closePopup();
  }
}
