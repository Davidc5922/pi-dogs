import './App.css';

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