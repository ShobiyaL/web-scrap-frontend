// import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
// import {env} from '../../config'
import axios from 'axios';
import Searchbar from './components/searchbar/Searchbar';
import Listings from './components/listings/Listings';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {

useEffect(()=>{
  loadData();
},[]);
let loadData = async ()=>{
  let products= await axios.get(`https://web-scraping-node.herokuapp.com/getProduct?product=shirts`);
  console.log(products);
}

  return (
    <div >
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Searchbar />}/>
        <Route path='/results' element={<Listings />}/>
      </Routes>
    </BrowserRouter>
      
    </div>
    
  );
}

export default App;
