import './App.css';

import { Router,Routes,BrowserRouter } from "react-router-dom";

import Detail from "./components/detail.jsx"
import DogCreate from "./components/DogCreate.jsx"
import Home from "./components/Home.jsx"
import LandingPage from "./components/LandingPage.jsx"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Routes>
        <Router exact path='/' element={<LandingPage />} />
        <Router exact path='/home' element={<Home />} />
        <Router path='/dogs' element={<DogCreate />} />
        <Router path='/home/:id' element={<Detail />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
