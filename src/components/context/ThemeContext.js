import React, {createContext, useState, useContext} from "react";


const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({children}) => {
    const [isNightMode, setIsNightMode] = useState(
        localStorage.getItem("nightMode") === "true"
      );

      const toggleNightMode = () => {
        setIsNightMode((prev) => !prev);
      };

      return (
        <ThemeContext.Provider value={{ isNightMode, toggleNightMode }}>
          {children}
        </ThemeContext.Provider>
      );
    
}