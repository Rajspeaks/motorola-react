import React from "react";
import Navbar from './navbar';
import Sitemap from './sitemap';
import Footer from './footer';
import '../css/razr_home.css';

  const Razr_home = () =>{
    return(
        <>
		<div>
           <Navbar/>
		   
  </div>


              <div className="container-fluid razr-outer">
        
      <div className="row">
      
      <img src="https://motorolain.vtexassets.com/arquivos/ids/156259-800-auto?width=50&height=100&aspect=true" height="100%" width="100%" alt='....'/>
      
      </div>
     
    </div>


   <div>
           
          
           <Sitemap/>
           <Footer/>
     
  </div> 
      
    </>
           
    )
}

export default Razr_home;