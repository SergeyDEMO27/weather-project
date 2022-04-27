import { inputActionTypes, inputActions, inputState } from "../../types/input";

const defaultState: inputState = {
  inputValue: "",
};

export const inputReducer = (
  state = defaultState,
  action: inputActions
): inputState => {
  switch (action.type) {
    case inputActionTypes.ADD_INPUT:
      return { inputValue: action.payload };
    default:
      return state;
  }
};
