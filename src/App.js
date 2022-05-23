import React from 'react';
import './App.css';
import Main from './component/main';
import { BrowserRouter, Switch, Route, Routes, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route exact path ="/" element={<Main />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
