import React, {createContext, useState, useContext} from "react";


const ModalAdd = createContext();

export const useModal = () => {
    return useContext(ModalAdd)
}

export const ModalProvider = ({children}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

      return (
        <ModalAdd.Provider value={{ show, handleShow, handleClose }}>
          {children}
        </ModalAdd.Provider>
      );
    
}