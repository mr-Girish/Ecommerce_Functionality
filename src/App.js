import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ViewDetails from './Components/ViewDetails';
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route exact path='/'  element={<Navbar/>}/>
            <Route exact path='/viewdetails/:id'  element={<ViewDetails/>}/>
          </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
