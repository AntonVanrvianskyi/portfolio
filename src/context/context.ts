import React from "react";

export const defaultValue = (value: boolean) => {
  return value;
};

export const Context = React.createContext(defaultValue);
