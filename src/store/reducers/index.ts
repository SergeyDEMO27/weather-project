import { combineReducers } from "redux";
import { weatherReducer } from "../reducers/weatherReducer";
import { suggestedCitiesReducer } from "../reducers/suggestedCitiesReducer";
import { inputReducer } from "../reducers/inputReducer";

export const rootReducer = combineReducers({
  weather: weatherReducer,
  suggestedCities: suggestedCitiesReducer,
  inputValue: inputReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
