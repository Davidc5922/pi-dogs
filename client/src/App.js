import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage.jsx'
import Home from './components/Home.jsx';
import DogCreate from './components/DogCreate.jsx'
import Detail from './components/detail.jsx'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/'><LandingPage /></Route>
           <Route exact path='/home' ><Home /></Route>
          <Route path='/dogs' ><DogCreate /></Route>
          <Route path='/home/:id'><Detail /></Route> 
        </Switch>
      </div>
    </BrowserRouter>
=======
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
>>>>>>> b7b69ba346d6529aff5562b58ca857c4cff25d92
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