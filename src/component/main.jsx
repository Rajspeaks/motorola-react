import React from 'react';
import Navbar from './navbar';
import Slider from './slider';
import Menu from './menu';
import Miniabout from './miniabout';
import Sitemap from './sitemap';
import Footer from './footer';

const Main = () =>{
    return(
        <div>
           
		   <Navbar/>	   
		   <Slider/>
           <Menu/>	
           <Miniabout/>   
		   <Sitemap/>
		   <Footer/>
		 
		 
        </div>
    )
}

export default Main