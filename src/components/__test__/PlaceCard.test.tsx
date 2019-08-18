import React from 'react';

import PlaceCard from '../PlaceCard';
import { shallow } from 'enzyme';

it('renders <PlaceCard />', () => {
  const wrapper = shallow(
    <PlaceCard thumbnail="https://loremflickr.com/320/240/apartment,office?lock=1" name="Mediterania Garden Residence 22222222" description="Mediterania Garden Residence 2 berlokasi di Podomoro City Jl. Letjen S.Parman Kav.28. Apartemen ini dikembangkan oleh PT Agung Podomoro Land , Tbk,Mediterania Garden Residence 2 memiliki 6 tower. Dalam kompleks ini tersedia beragam fasilitas untuk mendukung hunian Anda, Terdapat pula beragam sarana dan fasilitas yang menjamin kenyamanan hunian Anda, seperti: Access Card, Atm Center, Basketball Court, Bbq Pit, Drug Store, Function Hall, Gym, Jogging Track, Laundry, Mini Market, Movie Theater, Playground, Restaurant, Salon, Super Market, Swimming Pool dan Tennis Court." city="Jakarta Barat" />
  );

  expect(wrapper).toMatchSnapshot();
});