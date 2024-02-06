import React, {createContext, useState, useContext} from "react";

const AddDataLid = createContext();

export const useAddDataLid = () => {
    return useContext(AddDataLid)
}


export const AddDataLidProvider = ({children}) => {


        const [addData, setAddData] = useState({
            ism: "",
            surname: "",
            phone: Number(),
            fphone: Number(),
            address: "",
            about: "",
            year: Number(),
            free: "",
            subject1: "",
            subject2: ""
        })

        const handleInputChangeDataLid = (e, types) => {
            const { name, value } = e.target;
            setAddData({
              ...addData,
              [types]: value.toUpperCase(),
            });
            
          };
  
        return (
          <AddDataLid.Provider value={{addData, handleInputChangeDataLid}}>
            {children}
          </AddDataLid.Provider>
        );
      
  }