import React from "react";
import Navbar from './navbar';
import Sitemap from './sitemap';
import Footer from './footer';
import '../css/razr.css';

  const Razr_family = () =>{
    return(
        <>
		<div>
           <Navbar/>
		   
  </div>
  
   <div className="container-fluid outer">
	      
		  <div className="row">
		  
		  <img id="header" src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/8b545658-0425-402c-8bb0-9e43145dd3f3___490bcf2932df7de6a72fdde7a59679c4.jpg" height="100%" width="100%" alt='....'/>
		  
		  </div>
		 
		  </div>
  
       <div className="container-fluid outer pt-5 pb-5">
	      
		  <div className="razr_family" id="content-desktop">
		     
		         <h2 class="razr_title">razr family </h2>
				 
				 
				 	 	 
			 <div class="row r1">
              <div class="col-sm-5">
                   <div class="card razr-c1">
                     <img class="card-img-top" src="https://motorolain.vtexassets.com/arquivos/ids/156259/odyssey-razr-5g-pdp-kv-render-1topuupn8.png?v=637371489510500000" alt="Card image cap" />
                       <div class="card-body">
                         <h2 class="card-title">razr 5g</h2>
						 <br/><br/><br/>
						     <h3 id="razr-price"><span>&#8377;</span> 124,999 </h3>
							 <br/>
                           <p class="card-text">
						     Legendary DNA meets the Latest Technology in an Ultra Premium Flip Design of the all new Motorola razr 5G.
							 </p>
							 
							 <br/><br/>
							 
							 <p id="razr-find-store"><a href="#"> Find Stores Near you </a></p>
						
							 
					<a href="#"><button class="razr-lm1">Learn More </button></a>
                            
                        </div>
                    </div>
				</div>


                  <div class="col-sm-6">
                     <div class="card razr-c2">
                     <img class="card-img-top" src="https://motorolain.vtexassets.com/arquivos/ids/155576/155395.png?v=637208184792070000" alt="Card image cap" />
                       <div class="card-body">
                         <h2 class="card-title">razr</h2>
						 <br/><br/><br/>
						    <h3 id="razr-price"><span>&#8377;</span> 74,999* </h3>
							<br/>
                           <p class="card-text">
						   <ul>
						       <i class="fa-solid fa-circle-check"></i>&nbsp;
							 Revolutionary 6.2"(15.74 cms) Foldable Display 
						   </ul>
						   <ul>
						    <i class="fa-solid fa-circle-check"></i>&nbsp;
                             Dual displays. Singular experience with Quick View Display 
						   </ul>
						      <ul>
                              <i class="fa-solid fa-circle-check"></i>&nbsp; 
                             Brilliant Dual Use Camera with Night Vision.
						   </ul>
						   
						   </p>
						   
						   <br/>
						   <p id="razr-find-store"><a href="#"> Find Stores Near you </a></p>
							
							 <a href="#"><button class="razr-lm2">Learn More </button></a>
                           
                        </div>
                    </div>
				   </div>
		     
            </div>
			
			</div>
			
			{/*-------------------------------------------MOBILE----------------------------------------------------*/}

			
			<div className="razr_family" id="content-mobile">
			
			  <h2 class="razr_title">razr family </h2>
              
                   <div class="card razr-c-mobile">
                       <div class="card-body">
					    <img class="card-img-top" src="https://motorolain.vtexassets.com/arquivos/ids/156259/odyssey-razr-5g-pdp-kv-render-1topuupn8.png?v=637371489510500000" alt="Card image cap" />
                         <h2 class="card-title">razr 5g</h2>
						 <br/>
						     <h3 id="razr-price">Rs. 124,999 </h3>
							 <br/>
                           <p class="card-text">
						     Legendary DNA meets the Latest Technology in an Ultra Premium Flip Design of the all new Motorola razr5G.
							 </p>
							 
							 <br/><br/><br/>
							 
							 <p id="razr-find-store"><a href="#"> Find Stores Near you </a></p>
						
					<p>		 
					<a href="#"><button class="razr-lm-mobile-1">Learn More </button></a>
					
					</p>
					
					<br/><br/><br/>
					
					<img class="card-img-top" src="https://motorolain.vtexassets.com/arquivos/ids/155576/155395.png?v=637208184792070000" alt="Card image cap" />
                       
                         <h2 class="card-title">razr</h2>
						 <br/>
						    <h3 id="razr-price">Rs. 74,999* </h3>
							<br/>
                           <p class="card-text">
						    <ul>
						       <i class="fa-solid fa-circle-check"></i>&nbsp;
							 Revolutionary 6.2"(15.74 cms) Foldable Display 
						   </ul>
						   <ul>
						    <i class="fa-solid fa-circle-check"></i>&nbsp;
                             Dual displays. Singular experience with Quick View Display 
						   </ul>
						      <ul>
                              <i class="fa-solid fa-circle-check"></i>&nbsp; 
                             Brilliant Dual Use Camera with Night Vision.
						   </ul>
						   
						   </p>
						   
						   <br/>
						   <p id="razr-find-store"><a href="#"> Find Stores Near you </a></p>
							<p>
							 <a href="#"><button class="razr-lm-mobile-2">Learn More </button></a>
                           </p>
                            
                        </div>
                    </div>
				
		   </div>
		 
		 {/*---------------------------------------------MOBILE END -----------------------------------------------*/}	
		
		
		
		</div>

		  <hr></hr>
		  
		  <div>
           
          
           <Sitemap/>
           <Footer/>
		 
  </div>
		  
		</>
		       
    )
}

export default Razr_family;