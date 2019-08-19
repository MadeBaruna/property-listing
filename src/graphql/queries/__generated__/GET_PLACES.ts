/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { PlaceType } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GET_PLACES
// ====================================================

export interface GET_PLACES_places_images {
  __typename: "Image";
  thumbnailUrl: string;
}

export interface GET_PLACES_places_address {
  __typename: "Address";
  city: string;
  latitude: number;
  longitude: number;
}

export interface GET_PLACES_places {
  __typename: "Place";
  id: string;
  name: string;
  description: string;
  type: PlaceType;
  images: GET_PLACES_places_images[];
  address: GET_PLACES_places_address;
}

export interface GET_PLACES {
  places: GET_PLACES_places[];
}

export interface GET_PLACESVariables {
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
  search?: string | null;
  type?: PlaceType | null;
}
