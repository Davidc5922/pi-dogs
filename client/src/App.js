import './App.css';
import { Route, Switch, BrowserRouter as Router, useParams } from 'react-router-dom';
//import { Route,BrowserRouter,Routes } from "react-router-dom";

// import Detail from "./components/detail.jsx"
// import DogCreate from "./components/DogCreate.jsx"
// import Home from "./components/Home.jsx"
import LandingPage from "./components/LandingPage.jsx"

function App() {
  return (
  
  
  <div className="App">
    <LandingPage /> 
    </div>
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