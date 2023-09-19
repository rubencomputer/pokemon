import { Pokemon } from "pokenode-ts";
import React, { createContext, useContext, useState } from "react";

// Define el tipo de dato que contendrá el contexto (esto es opcional).
interface MyContextType {
  data: Pokemon[];
  setData: React.Dispatch<React.SetStateAction<any>>;
}

// Crea el contexto con el tipo que definiste.
const MyContext = createContext<MyContextType | undefined>(undefined);

type ContextProviderProps = {
  children: React.ReactNode;
};

// Crea el proveedor del contexto.
export const MyContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [data, setData] = useState([]);

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

// Un hook personalizado para acceder al contexto.
export const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error(
      "useMyContext debe ser usado dentro de un MyContextProvider"
    );
  }

  return context;
};
