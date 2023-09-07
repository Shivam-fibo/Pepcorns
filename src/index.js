import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Componet/Navbar/Navbar';
import HomePage from './Componet/HomePage/HomePage';
import DeckInfo from './Componet/DeckInfo/DeckInfo';
import Footer from './Componet/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
<Navbar/>

<br />
<HomePage/>
<br />
 <DeckInfo/> 
<br />
<Footer/>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
