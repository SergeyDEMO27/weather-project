export interface inputState {
  inputValue: string;
}

export enum inputActionTypes {
  ADD_INPUT = "ADD_INPUT",
}

interface inputAction {
  type: inputActionTypes.ADD_INPUT;
  payload: string;
}

export type inputActions = inputAction;
