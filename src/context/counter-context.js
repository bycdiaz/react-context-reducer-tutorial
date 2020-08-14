import React, { useState, createContext } from "react";

// creates context object
export const CounterContext = createContext();
console.log(CounterContext);

// create provider for components to consume context and subscribe to changes
export const CounterContextProvider = props => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={[count, setCount]}>
      { props.children }
    </CounterContext.Provider>
  )
}
