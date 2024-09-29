import React from 'react';
import './App.css';

import { Outlet} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">

      <h2 className='text-danger'>hii hello world</h2>

      <h1>Wellcom To React</h1>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
export default App;
