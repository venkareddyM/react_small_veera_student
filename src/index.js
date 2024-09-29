import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  './../node_modules/bootstrap/js/dist/carousel'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import About from './About';
import Services from './Services';
import Products from './Products';
import Nopage from './Nopage';
import Carousell from './Carousell';
import Productdetails from './Productdetails';
import Footer from './Footer';
import Register from './Register';


export default function Abc() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="Products" element={<Products />} />
          <Route path="Productdetails" element={<Productdetails />} />
          <Route path="Carousell" element={<Carousell />} />
          <Route path="Footer" element={<Footer />} />
          <Route path="Register" element={<Register />} />
          <Route path="*" element={<Nopage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Abc />);




// {/* // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals(); */}
