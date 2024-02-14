import { useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage';
import './App.css' //idk what styling to use but this seems ok for now
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainPage/>
    </>
  )
}

export default App;
