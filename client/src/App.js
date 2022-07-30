import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage.jsx'
import Home from './components/Home.jsx';
import DogCreate from './components/DogCreate.jsx'
import Detail from './components/detail.jsx'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/home' element={<Home />} />
          <Route path='/dogs' element={<DogCreate />} />
          <Route path='/home/:id' element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}


export default App;

{/* <BrowserRouter>
// <div className='app'>
   
   //<Router>
   //<LandingPage />
     <Route exact path='/'></Route>
     {/* <Router exact path='/home' element={<Home />} />
     <Router path='/dogs' element={<DogCreate />} />
     <Router path='/home/:id' element={<Detail />} /> */}
   //</Router>
 //</div>
//</BrowserRouter> */}