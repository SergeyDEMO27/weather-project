import React from "react";
import { useDispatch } from "react-redux";
import { dispatchStore } from "../store";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { suggestedCitiesActionTypes } from "../types/suggestedCities";
import { getWeatherAction } from "../store/action-creators/weatherAction";
import { inputActionTypes } from "../types/input";
import SuggestItem from "./SuggestItem";
import getCityTitle from "../utils/getCityTitle";
import "../style/Suggest.scss";

interface ISuggestProps {
  getSelectedCity: (data: string) => void;
}

const Suggest: React.FC<ISuggestProps> = ({ getSelectedCity }) => {
  const dispatch = useDispatch();
  const { suggestedCities } = useTypedSelector(
    (state) => state.suggestedCities
  );

  if (suggestedCities.length === 0) {
    return null;
  }

  const onClickHandler = (e: React.MouseEvent) => {
    const eventTarget = e.target as HTMLElement;
    if (
      eventTarget.className === "suggest-item__title" ||
      eventTarget.tagName === "LI"
    ) {
      const title = getCityTitle(eventTarget.textContent);
      if (title) {
        dispatchStore(getWeatherAction(title));
        getSelectedCity(title);
        dispatch({
          type: inputActionTypes.ADD_INPUT,
          payload: "",
        });
        dispatch({
          type: suggestedCitiesActionTypes.GET_SUGGESTED_CITIES_CLEAR,
        });
      }
    }
  };

  return (
    <div className="suggest">
      <ul className="suggest__list" onClick={onClickHandler}>
        {suggestedCities.map((city) => {
          return <SuggestItem key={city} city={city} />;
        })}
      </ul>
    </div>
  );
};

export default Suggest;
