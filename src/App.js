import React from 'react';
import './App.css';
import Main from './component/main';
import Razr_family from './component/razr_family';
import Mototab from './component/mototab';
import Mototab2 from './component/mototab2';
import Smart_product from './component/smart_product';
import { BrowserRouter, Switch, Route, Routes, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route exact path ="/" element={<Main />}></Route>
			<Route exact path ="/razr_family" element={<Razr_family />}></Route>
			<Route exact path ="/mototab" element={<Mototab />}></Route>
      <Route exact path ="/mototab2" element={<Mototab2 />}></Route>
			<Route exact path ="/smart_product" element={<Smart_product />}></Route>
          



          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
