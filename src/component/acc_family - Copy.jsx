import React from "react";
import Navbar from './navbar';
import Miniabout from './miniabout';
import Sitemap from './sitemap';
import Footer from './footer';
import '../css/acc.css';

  const Acc_family = () =>{
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
		     
		         <h2 class="acc_title">All Accessories </h2>
				 <h2 class="acc_sub_title">Get support on:</h2>
				 <h2 class="acc_next_title"><u>Customer Support</u></h2>


				 <h4 class="allacc">all accessories</h4>
				 	 	 
			 <div class="row acc-r1">
                  <div class="col-sm-6">
                     <div class="card acc-c1"> 
                     <img class="acc-card-img-top" src="https://motorolain.vtexassets.com/arquivos/ids/156348/lmsa-ecom-card-pdp-render.png?v=637381762572900000" alt="Card image cap" />
                       <div class="card-body">
                         <h2 class="acc-card-title">rescue and smart assistant tool</h2>
						 <br/>
						 <h2 class="acc-card-title">rescue and smart assistant tool</h2>
							<br/>
                           <p class="acc-card-text">
						  Our Rescue and Smart Assistant tool can help diagnose and resolve issues on your Motorola phone or Lenovo phone/tablet.
						   
						   </p>
						   
						   <br/>
						  
							
							 <a href="#"><button class="acc-lm1">Learn More </button></a>
                           
                        </div>
                    </div>
				   </div>
		     
            </div>
			
			</div>
			
			
					<div className="razr_family" id="content-mobile">
			
			  <h2 class="acc_title">razr family </h2>
              
                   <div class="card razr-c-mobile">
                       <div class="card-body">
					    <img class="acc-card-img-top" src="https://motorolain.vtexassets.com/arquivos/ids/156259/odyssey-razr-5g-pdp-kv-render-1topuupn8.png?v=637371489510500000" alt="Card image cap" />
                         <h2 class="acc-card-title">rescue and smart assistant tool</h2>
						 <br/>
						 <h2 class="acc-card-title">rescue and smart assistant tool</h2>
						 <br/>
						   
							 <br/>
                           <p class="acc-card-text">
						     Our Rescue and Smart Assistant tool can help diagnose and resolve issues on your Motorola phone or Lenovo phone/tablet.
							 </p>
							 
							 <br/><br/><br/>
						
					<p>		 
					<a href="#"><button class="acc-lm-mobile-1">Learn More </button></a>
					
					</p>

        </div>
        </div>
        </div>























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

export default Acc_family;