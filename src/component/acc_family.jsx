import React from "react";
//import Navbar from './navbar';
import Acc_header from './acc_header';
//import Sitemap from './sitemap';
//import Footer from './footer';
import '../css/acc.css';

  const Acc_family = () =>{
    return(
        <>
		{/* <div>
           <Navbar/>
		   <Acc_header/>
  </div> */}
       <div className="container-fluid outer pt-5 pb-5">
	      
		  <div className="acc_family" id="content-desktop">
		     
		         <h2 class="acc_title">All Accessories </h2>
				 <h2 class="acc_title">Get support on:</h2>
				 <h2 class="acc_title"><u>Customer Support</u></h2>
				 	 	 
			 <div class="row r1">
             


                  <div class="col-sm-6">
                     <div class="card c2"> all accessories
                     {/*<img class="card-img-top" src="image.png" alt="Card image cap" />*/}
                       <div class="card-body">
                         <h2 class="card-title">rescue and smart assistant tool</h2>
						 <br/>
						 <h2 class="card-title">rescue and smart assistant tool</h2>
							<br/>
                           <p class="card-text">
						  Our Rescue and Smart Assistant tool can help diagnose and resolve issues on your Motorola phone or Lenovo phone/tablet.
						   
						   </p>
						   
						   <br/>
						  
							
							 <a href="#"><button class="lm2">Learn More </button></a>
                           
                        </div>
                    </div>
				   </div>
		     
            </div>
			
			</div>
			
			
				
		   </div>

		
		  <hr></hr>
		  {/*   
		  <div>
           
          
           <Sitemap/>
           <Footer/>
		 
  </div> */}
		  
		</>
		       
    )
}

export default Acc_family;