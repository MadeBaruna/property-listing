import React from 'react';
import styled from 'styled-components';

import PlaceCard from '../components/PlaceCard';

const Container = styled.div`
  display: flex;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  max-width: 710px;
`;

const Map = styled.div`
  flex: 1;
`;

const Search: React.FC = () => (
  <Container>
    <CardContainer>
      <PlaceCard thumbnail="https://loremflickr.com/320/240/apartment,office?lock=1" name="Mediterania Garden Residence 22222222" description="Mediterania Garden Residence 2 berlokasi di Podomoro City Jl. Letjen S.Parman Kav.28. Apartemen ini dikembangkan oleh PT Agung Podomoro Land , Tbk,Mediterania Garden Residence 2 memiliki 6 tower. Dalam kompleks ini tersedia beragam fasilitas untuk mendukung hunian Anda, Terdapat pula beragam sarana dan fasilitas yang menjamin kenyamanan hunian Anda, seperti: Access Card, Atm Center, Basketball Court, Bbq Pit, Drug Store, Function Hall, Gym, Jogging Track, Laundry, Mini Market, Movie Theater, Playground, Restaurant, Salon, Super Market, Swimming Pool dan Tennis Court." city="Jakarta Barat" />
      <PlaceCard thumbnail="https://loremflickr.com/320/240/apartment,office?lock=1" name="Mediterania Garden Residence 2" description="Mediterania Garden Residence 2 berlokasi di Podomoro City Jl. Letjen S.Parman Kav.28. Apartemen ini dikembangkan oleh PT Agung Podomoro Land , Tbk,Mediterania Garden Residence 2 memiliki 6 tower. Dalam kompleks ini tersedia beragam fasilitas untuk mendukung hunian Anda, Terdapat pula beragam sarana dan fasilitas yang menjamin kenyamanan hunian Anda, seperti: Access Card, Atm Center, Basketball Court, Bbq Pit, Drug Store, Function Hall, Gym, Jogging Track, Laundry, Mini Market, Movie Theater, Playground, Restaurant, Salon, Super Market, Swimming Pool dan Tennis Court." city="Jakarta Barat" />
      <PlaceCard thumbnail="https://loremflickr.com/320/240/apartment,office?lock=1" name="Mediterania Garden Residence 2" description="Mediterania Garden Residence 2 berlokasi di Podomoro City Jl. Letjen S.Parman Kav.28. Apartemen ini dikembangkan oleh PT Agung Podomoro Land , Tbk,Mediterania Garden Residence 2 memiliki 6 tower. Dalam kompleks ini tersedia beragam fasilitas untuk mendukung hunian Anda, Terdapat pula beragam sarana dan fasilitas yang menjamin kenyamanan hunian Anda, seperti: Access Card, Atm Center, Basketball Court, Bbq Pit, Drug Store, Function Hall, Gym, Jogging Track, Laundry, Mini Market, Movie Theater, Playground, Restaurant, Salon, Super Market, Swimming Pool dan Tennis Court." city="Jakarta Barat" />
      <PlaceCard thumbnail="https://loremflickr.com/320/240/apartment,office?lock=1" name="Mediterania Garden Residence 2" description="Mediterania Garden Residence 2 berlokasi di Podomoro City Jl. Letjen S.Parman Kav.28. Apartemen ini dikembangkan oleh PT Agung Podomoro Land , Tbk,Mediterania Garden Residence 2 memiliki 6 tower. Dalam kompleks ini tersedia beragam fasilitas untuk mendukung hunian Anda, Terdapat pula beragam sarana dan fasilitas yang menjamin kenyamanan hunian Anda, seperti: Access Card, Atm Center, Basketball Court, Bbq Pit, Drug Store, Function Hall, Gym, Jogging Track, Laundry, Mini Market, Movie Theater, Playground, Restaurant, Salon, Super Market, Swimming Pool dan Tennis Court." city="Jakarta Barat" />
    </CardContainer>
    <Map />
  </Container>
);

export default Search;
