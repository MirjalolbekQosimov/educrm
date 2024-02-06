import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/context/ThemeContext';
import { ModalProvider } from './components/context/Addmodal';
import { AddDataLidProvider } from './components/context/AddDataLidsFromModal';
import { SearchProvider } from './components/context/SearchContext';
import { SearchPupilProvider } from './components/context/SearchStudentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider>
    <ModalProvider>
      <AddDataLidProvider>
      <SearchProvider>
        <SearchPupilProvider>
        <App/>
        </SearchPupilProvider>
      </SearchProvider>
      </AddDataLidProvider>
    </ModalProvider>
     
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

