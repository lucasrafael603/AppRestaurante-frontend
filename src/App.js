import React from 'react';
import Routes from '../src/routes/index'
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes/>
    </BrowserRouter>
    </>
  )
}

export default App;
