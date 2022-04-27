import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dispatchStore } from "../store";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { getSuggestedCitiesAction } from "../store/action-creators/suggestedCitiesAction";
import { suggestedCitiesActionTypes } from "../types/suggestedCities";
import { inputActionTypes } from "../types/input";
import FormIcon from "./icons/FormIcon";
import ButtonClear from "./UI/ButtonClear";
import SupportIcon from "./icons/SupportIcon";
import cn from "classnames";
import "../style/Form.scss";

const WeatherForm: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading, suggestedCities } = useTypedSelector(
    (state) => state.suggestedCities
  );
  const { inputValue } = useTypedSelector((state) => state.inputValue);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (inputValue) {
        dispatchStore(getSuggestedCitiesAction(inputValue));
      } else {
        dispatch({
          type: suggestedCitiesActionTypes.GET_SUGGESTED_CITIES_CLEAR,
        });
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [inputValue, dispatch]);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: inputActionTypes.ADD_INPUT,
      payload: e.target.value,
    });
  };

  const clearInputHandler = () => {
    dispatch({
      type: inputActionTypes.ADD_INPUT,
      payload: "",
    });
    dispatch({
      type: suggestedCitiesActionTypes.GET_SUGGESTED_CITIES_CLEAR,
    });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const formClasses = cn("form", {
    "form--dropdown": suggestedCities.length > 0,
  });

  const formInputClasses = cn("form__input", {
    "form__input--dropdown": suggestedCities.length > 0,
  });

  return (
    <form className={formClasses} onSubmit={submitHandler} action="">
      <input
        className={formInputClasses}
        onChange={inputHandler}
        type="text"
        value={inputValue}
        placeholder="Город или населенный пункт"
        required
        disabled={isLoading}
      />
      <FormIcon notEmptyInput={inputValue} name={"loupe"} />
      <ButtonClear
        clearInputHandler={clearInputHandler}
        notEmptyInput={inputValue}
        inputAvailibiliy={isLoading}
      />
      <span className="form__logo">
        <SupportIcon name={"logo"} size={"160px"} />
      </span>
    </form>
  );
};

export default WeatherForm;
