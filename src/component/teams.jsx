import React from "react";
import Navbar from './navbar';
import Miniabout from './miniabout';
import Sitemap from './sitemap';
import Footer from './footer';
import '../css/teams.css';

  const Teams = () =>{
    return(
        <>

    <div>

       <Navbar/>

        </div>
		

   <div className="container-fluid acc_outer">
	      
		  <div className="row">
		  
		   <img id="header" src="https://cdn.pixabay.com/photo/2015/08/23/11/36/banner-902697_960_720.jpg" height="auto" width="100%" alt='....'/> 
		  
		  </div>
		 
		</div>

		  
       <div className="container-fluid outer pt-5 pb-5">
	      
		  <div className="acc_family" id="content-desktop">
		     
		         <h2 class="acc_title-teams">Team Members</h2>
			
			</div>
	
<div class="row">
  <div class="column column-teams">
    <div class="card-teams-teams">
      <img src="rajdeep.jpg" alt="das" width= "200px" height="200px" />
      <div class="container container-teams">
        <h2>Rajdeep Das</h2>
        {/*<p class="title-teams-teams"></p>*/}
        {/*<p>Some text that describes me lorem ipsum ipsum lorem.</p>*/}
        {/*<p>example@example.com</p>*/}
      {/*  <p><button class="button-teams">Contact</button></p>*/}
      </div>
    </div>
  </div>


	
  <div class="column column-teams">
    <div class="card-teams-teams">
      <img src="saikat.jpg" alt="biswas" width= "200px" height="200px" />
      <div class="container container-teams">
        <h2>Saikat Biswas</h2>
        {/*<p class="title-teams-teams"></p>*/}
        {/*<p>Some text that describes me lorem ipsum ipsum lorem.</p>*/}
        {/*<p>example@example.com</p>*/}
      {/*  <p><button class="button-teams">Contact</button></p>*/}
      </div>
    </div>
  </div>

  <div class="column column-teams">
    <div class="card-teams">
      <img src="somesh.jpg" alt="das"  width= "200px" height="200px"/>
      <div class="container container-teams">
        <h2>Somesh Das</h2>
        {/*<p class="title-teams">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button-teams">Contact</button></p>*/}
      </div>
    </div>
  </div>

  <div class="column column-teams">
    <div class="card-teams">
      <img src="ankita.jpg" alt="dey"  width= "200px" height="200px"/>
      <div class="container container-teams">
        <h2>Ankita Dey</h2>
        {/*<p class="title-teams">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button-teams">Contact</button></p>*/}
      </div>
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

export default Teams;