import {
  suggestedCitiesActionTypes,
  suggestedCitiesActions,
  suggestedCitiesState,
} from "../../types/suggestedCities";

const defaultState: suggestedCitiesState = {
  suggestedCities: [],
  isLoading: false,
  error: null,
};

export const suggestedCitiesReducer = (
  state = defaultState,
  action: suggestedCitiesActions
): suggestedCitiesState => {
  switch (action.type) {
    case suggestedCitiesActionTypes.GET_SUGGESTED_CITIES:
      return { ...state, error: null, isLoading: true };
    case suggestedCitiesActionTypes.GET_SUGGESTED_CITIES_SUCCESS:
      return {
        error: null,
        isLoading: false,
        suggestedCities: action.payload,
      };
    case suggestedCitiesActionTypes.GET_SUGGESTED_CITIES_ERROR:
      return {
        error: action.payload,
        isLoading: false,
        suggestedCities: [],
      };
    case suggestedCitiesActionTypes.GET_SUGGESTED_CITIES_CLEAR:
      return {
        error: null,
        isLoading: false,
        suggestedCities: [],
      };
    default:
      return state;
  }
};
