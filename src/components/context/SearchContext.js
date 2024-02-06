import React, {createContext, useState, useContext} from "react";
import PeopleTables from "../json files/people.json"


const SearchContext = createContext();


export const useSearch = () => {
    return useContext(SearchContext)
}


export const SearchProvider = ({children}) => {
    const [searchValues, setSearchValues] = useState({
        category1: '',
        category2: '',
        category3: '',
        category4: '',
        category5: '',
        category6: '',
      });
    
      const handleInputChange = (e, category) => {
        const { name, value } = e.target;
        setSearchValues({
          ...searchValues,
          [category]: value.toLowerCase(),
        });
      };
    
      const filteredResults = [];
    
      if (searchValues.category1) {
        const nameResults = PeopleTables.filter((peopleTable) =>
          peopleTable.name.toLowerCase().includes(searchValues.category1.toLowerCase())
        );
        filteredResults.push(...nameResults);
      }
      if (searchValues.category2) {
        const surnameResults = PeopleTables.filter((peopleTable) =>
          peopleTable.surname.toLowerCase().includes(searchValues.category2.toLowerCase())
        );
        filteredResults.push(...surnameResults);
      }
      if (searchValues.category3) {
        const raqamResults = PeopleTables.filter((peopleTable) =>
          peopleTable.raqam.toLowerCase().includes(searchValues.category3.toLowerCase())
        );
        filteredResults.push(...raqamResults);
      }
      if (searchValues.category4) {
        const aboutResults = PeopleTables.filter((peopleTable) =>
          peopleTable.haqida.toLowerCase().includes(searchValues.category4.toLowerCase())
        );
        filteredResults.push(...aboutResults);
      }
      if (searchValues.category5) {
        const subjectsResults = PeopleTables.filter((peopleTable) =>
          peopleTable.fanlar.toLowerCase().includes(searchValues.category5.toLowerCase())
        );
        filteredResults.push(...subjectsResults);
      }
      if (searchValues.category6) {
        const dateResults = PeopleTables.filter((peopleTable) =>
          peopleTable.sinov.toLowerCase().includes(searchValues.category6.toLowerCase())
        );
        filteredResults.push(...dateResults);
      }
    return (
        <SearchContext.Provider value={{searchValues, handleInputChange, filteredResults}}>
        {children}
        </SearchContext.Provider>
           
        
    )
}