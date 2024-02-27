"use client";
import React, { createContext, useState, ReactNode } from "react";

interface MouseContextProps {
  cursorType: string;
  cursorChangeHandler: (cursorType: string) => void;
}

export const MouseContext = createContext<MouseContextProps>({
  cursorType: "",
  cursorChangeHandler: () => { },
});

interface MouseContextProviderProps {
  children: ReactNode;
}

const MouseContextProvider = (props: MouseContextProviderProps) => {
  const [cursorType, setCursorType] = useState("default");

  const cursorChangeHandler = (cursorType: string) => {
    setCursorType(cursorType);
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;
