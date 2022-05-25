import React from 'react';
import './App.css';
import Navbar from './component/navbar/Index';
import { BrowserRouter } from 'react-router-dom';
import Form from './component/form/Index';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="App container-fluid py-4">
          <Form />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
