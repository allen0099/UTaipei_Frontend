import { createContext } from "react";

export const ChosenContext = createContext({
  chosenContext: {},
  setChosenContext: (value) => {
    console.log(value);
  },
});
