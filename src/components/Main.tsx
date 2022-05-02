import React, { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import FormContainer from "./FormContainer";
import WeatherContainer from "./WeatherContainer";
import LoaderIcon from "./icons/LoaderIcon";
import "../style/Main.scss";

const Main: React.FC = () => {
  const { error: errorWeather, isLoading: isLoadingWeather } = useTypedSelector(
    (state) => state.weather
  );
  const { error: errorSuggest, isLoading: isLoadingSuggest } = useTypedSelector(
    (state) => state.suggestedCities
  );
  const selectedTitle =
    JSON.parse(localStorage.getItem("selectedTitle")!) || "Москва";
  const [selectedCityTitle, selectedCityTitleHandler] = useState(selectedTitle);

  const getSelectedCity = (data: string) => {
    selectedCityTitleHandler(data);
  };

  return (
    <div className="main">
      <div className="main__container">
        {isLoadingWeather && <LoaderIcon />}
        {isLoadingSuggest && <LoaderIcon />}
        <FormContainer getSelectedCity={getSelectedCity} />
        {errorWeather && <div className="main__error">{errorWeather}</div>}
        {errorSuggest && <div className="main__error">{errorSuggest}</div>}
        {selectedCityTitle && (
          <h2 className="main__title">{selectedCityTitle}</h2>
        )}
        {!errorWeather && (
          <WeatherContainer selectedCityTitle={selectedCityTitle} />
        )}
      </div>
    </div>
  );
};

export default Main;
