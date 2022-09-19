import React from 'react';
import './App.css';
import Main from './component/main';
import About from './component/about';
import Razr_family from './component/razr_family';
import Razr_home from './component/razr_home';
import Edge_family from './component/edge_family';
import G_family from './component/g_family';
// import G22_Home from './component/g22_home';
import Morefeatures from './component/morefeatures';
import Mototab from './component/mototab';
import Mototab2 from './component/mototab2';
import Acc_family from './component/acc_family';
import Cus from './component/cus';
import Teams from './component/teams';
import Smart_product from './component/smart_product';
import { BrowserRouter, Switch, Route, Routes, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
      <Route exact path ="https://rajspeaks.github.io/motorola-react" element={<Main />}></Route>
      <Route exact path ="/about" element={<About />}></Route>
      <Route exact path ="/razr_family" element={<Razr_family />}></Route>
      <Route exact path ="/razr_home" element={<Razr_home />}></Route>
      <Route exact path ="/edge_family" element={<Edge_family />}></Route>
      <Route exact path ="/g_family" element={<G_family />}></Route>
//       <Route exact path ="/g22_home" element={<G22_Home />}></Route>
      <Route exact path ="/morefeatures" element={<Morefeatures />}></Route>
			<Route exact path ="/mototab" element={<Mototab />}></Route>
      <Route exact path ="/mototab2" element={<Mototab2 />}></Route>
      <Route exact path ="/acc_family" element={<Acc_family />}></Route>
      <Route exact path ="/teams" element={<Teams />}></Route>
			<Route exact path ="/smart_product" element={<Smart_product />}></Route>
          



          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
