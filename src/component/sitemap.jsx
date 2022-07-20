import React from "react";
import {Link} from 'react-router-dom';
import '../css/sitemap.css';

const Sitemap = () =>{
    return(
        <>
            <div className="container-fluid outer pt-5 pb-5">
           
    
   
   <div className="container" id="content-mobile">
    <div className="dropdown">
  <h2 class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
    motorola <i class="fa-solid fa-circle-chevron-down"  id="setarrow_motorola"></i></h2>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <ul>
  
    <Link to="/razr_family" style={{ textDecoration: 'none' }} class="dropdown-item"><li>razr family</li></Link>
  <li><Link to="/g_family" style={{ textDecoration: 'none' }} class="dropdown-item">moto g family</Link></li>
<li>    <a class="dropdown-item" href="#">all phones</a></li>


</ul>
 </div>
 
 </div>

    <hr></hr>
    
    
   <div class="dropdown">
 <h2 class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
    motorola home <i class="fa-solid fa-circle-chevron-down" id="setarrow_motorola_home"></i></h2>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <ul>
  
    <li><a class="dropdown-item" href="#">all accessories</a></li>
  <li>  <a class="dropdown-item" href="#">bluetooth devices</a></li>
<li>    <a class="dropdown-item" href="#">wireless headphones</a></li>
  
</ul>
 
<hr></hr>

 </div>
 
 </div>
 
 <hr></hr>
 
  <div class="dropdown">
  <h2 class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
    support <i class="fa-solid fa-circle-chevron-down"  id="setarrow_support"></i></h2>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <ul>
  
    <li><a class="dropdown-item" href="#">moto e play</a></li>
  <li>  <a class="dropdown-item" href="#">moto edge 20 fusion</a></li>
<li>    <a class="dropdown-item" href="#">moto dynamic grey</a></li>


</ul>

 </div>
 
 </div>
 
 <hr></hr>
 
 
   <div class="dropdown"> 
  <h2 class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
    about <i class="fa-solid fa-circle-chevron-down"  id="setarrow_about"></i></h2>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <ul>
  
    <li><a class="dropdown-item" href="#">about us</a></li>
  <li>  <a class="dropdown-item" href="#">team</a></li>
<li>    <a class="dropdown-item" href="#">brands</a></li>


</ul>

 </div>
 
 </div>
</div>

                     <div className="container" id="content-desktop">
                        <div className="row innerrow1 pb-4">
                              <div className="col-md-3 col-sm-12">
                                <h2>motorola</h2>
                              </div>
                        
                        
                              <div className="col-md-3 col-sm-12">
                               <h2>motorola home</h2>
                              </div>
                              
                              <div className="col-md-3 col-sm-12">
                              <h2>support</h2>
                              </div>
                   
                              <div className="col-md-3 col-sm-12">
                             <h2>about</h2>
                              </div>
                    
                        </div>
                
                
            <div className="row innerrow2">
            
                <div className="col-md-3 col-sm-12">
                    <li>
                                <ul>razr family</ul>
                                <ul>moto g family</ul>
                                <ul>all phones</ul>
                    </li>
                </div>
                <div className="col-md-3 col-sm-12">
                    <li>
                                <ul>all accessories</ul>
                                <ul>bluetooth devices </ul>
                                <ul>wireless headphones</ul>
                    </li>
                </div>
                <div className="col-md-3 col-sm-12">
                    <li>
                                <ul>moto e play</ul>
                                <ul>moto edge 20 fusion</ul>
                                <ul>moto dynamic grey</ul>
                    </li>
                </div>
                <div className="col-md-3 col-sm-12">
                    <li>
                                <ul>about us</ul>
                                <ul>team</ul>
                                <ul>brands</ul>
                    </li>
                </div>
                
             </div>
                
         </div>
    
            </div>
      
        </>
    )
}

export default Sitemap