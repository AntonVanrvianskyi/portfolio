import React, {createContext, useContext, useMemo, useState} from 'react';



const MyContext = createContext(undefined);

export const MyContextProvider = ({ children }) => {
  const [myValue, setMyValue] = useState<string>();

  const value = useMemo(()=>{
    return{
      myValue,
      setMyValue
    }
  },[setMyValue, myValue])

  return (
      <MyContext.Provider value={value}>
        {children}
      </MyContext.Provider>
  );
};

// Використовуємо хук для спрощеного доступу до значень контексту
export const useMyContext = () => {
  return useContext(MyContext);
};
