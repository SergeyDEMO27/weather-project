import { Dispatch } from "react";
import { AnyAction } from "redux";
import axios from "axios";
import { suggestedCitiesActionTypes } from "../../types/suggestedCities";
import suggestedCitiesParser from "../../parsers/suggestedCitiesParser";

export const getSuggestedCitiesAction = (inputValue: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch({ type: suggestedCitiesActionTypes.GET_SUGGESTED_CITIES });
      const locationResponse = await axios.get(
        `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?query=${inputValue}&apiKey=Yclju9FXL_oqwM7jvUbPyHpbNQnqSgdDWNR-qg-Rm_E`
      );
      const parsedLocationResponse = suggestedCitiesParser(
        locationResponse.data
      );

      dispatch({
        type: suggestedCitiesActionTypes.GET_SUGGESTED_CITIES_SUCCESS,
        payload: parsedLocationResponse,
      });
    } catch (e) {
      dispatch({
        type: suggestedCitiesActionTypes.GET_SUGGESTED_CITIES_ERROR,
        payload: "Произошла ошибка при поиске населенного пункта",
      });
    }
  };
};
