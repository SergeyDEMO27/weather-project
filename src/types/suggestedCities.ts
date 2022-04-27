export interface suggestedCitiesState {
  suggestedCities: string[];
  isLoading: boolean;
  error: null | string;
}

export enum suggestedCitiesActionTypes {
  GET_SUGGESTED_CITIES = "GET_SUGGESTED_CITIES",
  GET_SUGGESTED_CITIES_SUCCESS = "GET_SUGGESTED_CITIES_SUCCESS",
  GET_SUGGESTED_CITIES_ERROR = "GET_SUGGESTED_CITIES_ERROR",
  GET_SUGGESTED_ADD_INPUT = "GET_SUGGESTED_ADD_INPUT",
  GET_SUGGESTED_CITIES_CLEAR = "GET_SUGGESTED_CITIES_CLEAR",
}

interface suggestedCitiesAction {
  type: suggestedCitiesActionTypes.GET_SUGGESTED_CITIES;
}

interface suggestedCitiesSuccessAction {
  type: suggestedCitiesActionTypes.GET_SUGGESTED_CITIES_SUCCESS;
  payload: string[];
}

interface suggestedCitiesErrorAction {
  type: suggestedCitiesActionTypes.GET_SUGGESTED_CITIES_ERROR;
  payload: string;
}

interface suggestedCitiesClearAction {
  type: suggestedCitiesActionTypes.GET_SUGGESTED_CITIES_CLEAR;
}

export type suggestedCitiesActions =
  | suggestedCitiesAction
  | suggestedCitiesSuccessAction
  | suggestedCitiesErrorAction
  | suggestedCitiesClearAction;
