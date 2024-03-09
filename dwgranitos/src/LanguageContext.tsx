// LanguageContext.js
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext({
  idioma: false,
  toggleIdioma: () => {},
  setLanguage: (newIdioma: boolean | ((prevState: boolean) => boolean)) => {},
});

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [idioma, setIdioma] = useState(false);

  const toggleIdioma = () => {
    setIdioma(!idioma);
  };

  const setLanguage = (
    newIdioma: boolean | ((prevState: boolean) => boolean)
  ) => {
    setIdioma(newIdioma);
  };

  return (
    <LanguageContext.Provider value={{ idioma, toggleIdioma, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
