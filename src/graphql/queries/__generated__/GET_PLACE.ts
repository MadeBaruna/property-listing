/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { PlaceType } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GET_PLACE
// ====================================================

export interface GET_PLACE_place_facilities {
  __typename: "Facility";
  id: string;
  name: string;
}

export interface GET_PLACE_place_images {
  __typename: "Image";
  id: string;
  thumbnailUrl: string;
  url: string;
}

export interface GET_PLACE_place_address {
  __typename: "Address";
  street: string;
  city: string;
  country: string;
  longitude: number;
  latitude: number;
}

export interface GET_PLACE_place {
  __typename: "Place";
  id: string;
  name: string;
  description: string;
  facilities: GET_PLACE_place_facilities[];
  type: PlaceType;
  images: GET_PLACE_place_images[];
  address: GET_PLACE_place_address;
}

export interface GET_PLACE {
  place: GET_PLACE_place;
}

export interface GET_PLACEVariables {
  id: string;
}
