import React from 'react';
import styled from 'styled-components/macro';
import MdiCityIcon from 'mdi-react/CityIcon';
import Button from './Button';

// this component inspired from: https://codepen.io/virgilpana/pen/RNYQwB

const Card = styled.div`
  display: flex;
  background: white;
  flex-direction: column;
  width: calc(50% - 20px);
  max-width: 320px;
  margin: 10px;
  cursor: pointer;
  transition: 100ms ease-out; 
  height: fit-content;

  &:hover {
    box-shadow:0px 13px 21px -5px rgba(0, 0, 0, 0.2);
    transition:  100ms ease-out; 
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;

  &:after {
    content: "";
    display: block;
    padding-bottom: 75%;
  }

  img {
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
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
    margin-top: 5px;
    display: flex;

    &.city {
      align-items: center;
      margin-bottom: 5px;
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
    </ImageContainer>
    <Content>
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="city"><MdiCityIcon /> {city}</p>
      <Button outlined style={{ float: "right" }}>Lihat Detail</Button>
    </Content>
  </Card>
);

export default PlaceCard;
