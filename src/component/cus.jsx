import React from "react";
import Navbar from './navbar';
import Miniabout from './miniabout';
import Sitemap from './sitemap';
import Footer from './footer';
import '../css/cus.css';

  const Cus = () =>{
    return(
        <>

    <div>

       <Navbar/>

        </div>
		

   <div className="container-fluid acc_outer">
	      
		  <div className="row">
		  
		   <img id="header" src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/dash-camera-family-page-hero-d-us___4701ba9a0a89a865ab72c26a7f60acb2.jpg" height="auto" width="100%" alt='....'/> 
		  
		  </div>
		 
		</div>

		  
       <div className="container-fluid outer pt-5 pb-5">
	      
		  <div className="acc_family" id="content-desktop">
		     
		         <h2 class="acc_title">Get Customer Support</h2>
			
			</div>
			
			{/*<section id="newsletter">*/}
    <div class="newsletter-text">
        {/*<h2><span>Get Customer Support</span></h2>*/}
        <p>Get all your issues solved here . . .  </p>
    </div>
    <div class="row">
    <div class="newsletter-form">
        <input type="text" placeholder="Enter your Name"/>
        <input type="text" placeholder="Enter your Email-address"/>
        <input type="text" placeholder="Enter your Issue"/>
        <button class="newsletter-button">Send Query</button>
    </div>
        </div>
{/*</section>*/}
				














		   </div>
		
		  <hr></hr>


		     
		  <div>
           
           <Miniabout/>
           <Sitemap/>
           <Footer/>
		 
  </div> 
		  
		</>
		       
    )
}

export default Cus;