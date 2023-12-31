import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Profile from "./Components/Profile";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

  const rootElement = document.getElementById("root"); 
  render(
    <BrowserRouter>
    <p>Header</p>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="Profile" element={<Profile/>} />
  
      </Routes>
    </BrowserRouter>,
    rootElement
  );

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
