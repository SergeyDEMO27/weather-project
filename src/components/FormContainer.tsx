import React from "react";
import WeatherForm from "./WeatherForm";
import Suggest from "./Suggest";
import "../style/FormContainer.scss";

interface IFormContainerProps {
  getSelectedCity: (data: string) => void;
}

const FormContainer: React.FC<IFormContainerProps> = ({ getSelectedCity }) => {
  return (
    <div className="FormContainer">
      <WeatherForm />
      <Suggest getSelectedCity={getSelectedCity} />
    </div>
  );
};

export default FormContainer;
