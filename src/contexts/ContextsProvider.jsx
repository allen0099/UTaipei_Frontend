import { ChosenContext } from "@/contexts/choose";
import { useState } from "react";

export default function ContextsProvider({ children }) {
  const [chosen, setChosen] = useState({});

  return (
    <>
      <ChosenContext.Provider
        value={{ chosenContext: chosen, setChosenContext: setChosen }}
      >
        {children}
      </ChosenContext.Provider>
    </>
  );
}
