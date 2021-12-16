import { createContext, useState } from "react";
import data from "../data.json";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [filtred, setFiltred] = useState("");

  const [dataFiltred, setDataFiltred] = useState(data);

  const handleChange = (e) => {
    
    const inputVal = e.target.value;
    const dataFilter = data.filter((element) =>
    inputVal
    ? element.title.toLowerCase().includes(inputVal.toLowerCase())
    : data
    );
    setFiltred(inputVal);
    setDataFiltred(dataFilter)
  }

  return (
    <MainContext.Provider
      value={{ filtred, dataFiltred, handleChange }}
    >
      {children}
    </MainContext.Provider>
  );
};
