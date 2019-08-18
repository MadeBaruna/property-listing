import React from 'react';
import styled from 'styled-components';
import MdiCityIcon from 'mdi-react/CityIcon';

// this component inspired from: https://codepen.io/virgilpana/pen/RNYQwB

const Card = styled.div`
  display: flex;
  background: white;
  flex-direction: column;
  width: 335px;
  margin: 10px;
  cursor: pointer;
  transition: 100ms ease-out; 

  &:hover {
    box-shadow:0px 13px 21px -5px rgba(0, 0, 0, 0.2);
    transition:  100ms ease-out; 
  }
`;

const ImageContainer = styled.div`
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
  }

  span {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    color: white;
    opacity: 0;
    transition: 100ms ease-out; 

    ${Card}:hover & {
      opacity: 1;
      transition: 100ms ease-out; 
    }
  }
`;

const Content = styled.div`
  padding: 10px;

  h3 {
    white-space: nowrap;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
  }

  p {
    height: 100%;
    line-height: 18px;
    max-height: 36px;
    word-wrap: break-word;
    overflow: hidden;
    margin-top: 15px;
    display: flex;

    &.city {
      align-items: center;
    }
  }

  svg {
    margin-right: 5px;
  }
`;

interface IProps {
  thumbnail: string;
  name: string;
  description: string;
  city: string;
}

const PlaceCard: React.FC<IProps> = ({ thumbnail, name, description, city }) => (
  <Card>
    <ImageContainer>
      <img src={thumbnail} alt="thumbnail" />
      <span>Lihat Detail</span>
    </ImageContainer>
    <Content>
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="city"><MdiCityIcon /> {city}</p>
    </Content>
  </Card>
);

export default PlaceCard;
