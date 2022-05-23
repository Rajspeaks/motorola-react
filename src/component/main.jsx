import React from 'react';
import Navbar from './navbar';
//import Slider from './slider';

//import Razr_header from './razr_header';
//import Razr_family from './razr_family';


//import Acc_header from './acc_header';
//import Acc_family from './acc_family';


//import Smart_header from './smart_header';
//import Smart_product from './smart';


import Mototab from './mototab';

//import Motogame from './motogame';

import Sitemap from './sitemap';
import Footer from './footer';

const Main = () =>{
    return(
        <div>
           
		   <Navbar/>
		   
		   
		   {/* <Smart_header/>
           <Smart_product/>*/}
		   
		
		   {/*<Razr_header/>          
           <Razr_family/> */}
		   
		   
		   
		   { /* <Acc_header/>          
           <Acc_family/> */}
		   
		   
		  <Mototab/>
		   
		   
			  {/*<Motogame/>*/}
		   
		   
		   
		   <Sitemap/>
		   <Footer/>
		  
           
		 
        </div>
    )
}

export default Main
