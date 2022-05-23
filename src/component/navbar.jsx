import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/navbar.css';

//const img = 'pic/moto_logo.png';
const Navbar = () =>{
    return(
        <div className="container-fluid menu">
           <div className="row">
               <div className="col-md-3 col-sm-12">
                   <div className="img">
                   <img src="https://motorolain.vtexassets.com/_v/public/assets/v1/published/motorolain.motorola-store-theme@0.31.0/public/react/5d4ba2fa7e82032ee9c6d0684cf4d382.svg" alt='...' height="50px" width="100px"></img>
                   </div>
               </div>
                <div className='col-md-6 col-sm-12 nave'>
                        <div className='nav_area'>
                            <nav>
                                <ul>
                                    <li class="dropdown"><NavLink to="/" class="btn btn-secondary dropdown-toggle"className='nav' role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">Phones</NavLink>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <ul  className='chobi'>
                                      <li className='cho'><a  class="dropdown-item" href="#"><span><figure><img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/cbfa540b-da93-4ee5-94e7-439b4c0e177b___02b335b7de50002f336a99f4907fe7b3.png" alt="..."></img><figcaption>razr family</figcaption></figure></span></a>
                                   </li>
                                   <li className='ch'> <a  class="dropdown-item" href="#"><span><figure><img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/ce94a465-e7ef-4534-889c-cde9e3efaef3___32e80f77432c50b1f2cedf1f73f59f5e.png" alt="..."></img><figcaption>motorola edge family</figcaption></figure></span></a></li>
                                   <li className='c'> <a  class="dropdown-item" href="#"><span><figure><img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/e28c1032-4071-41c9-aa5f-f608f538e378___bf1898da74876b62e52e2af5984325d9.png" alt="..."></img><figcaption>motorola G family</figcaption></figure></span></a></li>
                                    </ul>
                                    </div>
                                     </li>
                                     <li class="dropdown"><NavLink to="/" class="btn btn-secondary dropdown-toggle" className='nav' role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">Tablets</NavLink>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <ul  className='chobi'>
                            
                                      <li className='cho'><a  class="dropdown-item" href="#"><span><figure><img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/5020bb3b-9374-49fa-b9ba-557b727c03d2___2fc815624f40189d44a09612200d0e8c.png" alt="..."></img><figcaption>Moto Tab G70</figcaption></figure></span></a>
                                   </li>
                                   <li className='ch'> <a  class="dropdown-item" href="#"><span><figure><img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/ceda6f7e-b382-4322-83e6-cfa25ebd0772___9e9cbf1bb760fead61ba0301e768dc44.png" alt="..."></img><figcaption>Moto Tab G20</figcaption></figure></span></a></li>
                                  
                                    </ul>
                                    </div>
                                     </li>
                                     <li class="dropdown"><NavLink to="/" class="btn btn-secondary dropdown-toggle"className='nav' role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">Accessories</NavLink>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <ul  className='chobi'>
                                    <li className='cho'><a  class="dropdown-item" href="#"><span><figure><img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/accessories-all@2x_0___8be1faaf12ef7d3b8b3e53a281ecbb15.png" alt="..."></img><figcaption>All Accessories</figcaption></figure></span></a>
                                   </li>
                                   
                                    </ul>
                                    </div>
                                     </li>
                                     <li class="dropdown"><NavLink to="/" class="btn btn-secondary dropdown-toggle" className='nav'role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">Smart Products</NavLink>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <ul  className='chobi'>
                                    <li className='cho'><a  class="dropdown-item" href="#"><span><figure><img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/All%20Motorola%20Home%20208x240___0b2ca965c8d8837669e2d3f9664352b4.png" alt="..."></img><figcaption>All Motorola Home</figcaption></figure></span></a>
                                    </li>
                                    
                                    </ul>
                                    </div>
                                     </li>
                                     <li class="dropdown"><NavLink to="/" class="btn btn-secondary dropdown-toggle" className='nav'role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">Smart Products</NavLink>
                                    
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <ul  className='chobi'>
                                    <li className='cho'><a  class="dropdown-item" href="#"><span><figure><img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/top-nav-andorid-android-robot-2x_0___4ebb3b17eb6d13d2982b07f38245ee40.png" alt="..."></img><figcaption>software updates</figcaption></figure></span></a>
                                   </li>
                                   <li className='ch'> <a  class="dropdown-item" href="#"><span><figure><img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/top-nav-andorid-android-robot-2x_0___4ebb3b17eb6d13d2982b07f38245ee40.png" alt="..."></img><figcaption>Android 10</figcaption></figure></span></a></li>
                                   <li className='c'> <a  class="dropdown-item" href="#"><span><figure><img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/df4e5f56-28ed-4166-a8cc-dc5ef78b6e87___552b08eac0ad4b2bae509f0f37ab8d51.png" alt="..."></img><figcaption>Android 11</figcaption></figure></span></a></li>
                                    </ul>
                                    </div>
                                  
                                     </li>
                                  
                                </ul>
                            </nav>
                        </div>
                    </div> 
                    <div class="fixed-top">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="mobile-text">
     <ul>
         <li><div class="dropdown">
  <h4 class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
    Phones
  </h4>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#"><figure><img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/cbfa540b-da93-4ee5-94e7-439b4c0e177b___02b335b7de50002f336a99f4907fe7b3.png" alt="..."></img><span>razr family</span></figure></a>
    <a class="dropdown-item" href="#"><figure><img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/ce94a465-e7ef-4534-889c-cde9e3efaef3___32e80f77432c50b1f2cedf1f73f59f5e.png" alt="..."></img><span>motorola edge family</span></figure></a>
    <a class="dropdown-item" href="#"><figure><img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/ce94a465-e7ef-4534-889c-cde9e3efaef3___32e80f77432c50b1f2cedf1f73f59f5e.png" alt="..."></img><span>motorola g family</span></figure></a>
  </div>
</div>
         </li>
         
         <li><div class="dropdown">
  <h4 class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
    Tablets 
  </h4>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#"><figure><img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/5020bb3b-9374-49fa-b9ba-557b727c03d2___2fc815624f40189d44a09612200d0e8c.png" alt="..."></img><span>Moto Tab G70</span></figure></a>
    <a class="dropdown-item" href="#"><figure><img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/ceda6f7e-b382-4322-83e6-cfa25ebd0772___9e9cbf1bb760fead61ba0301e768dc44.png" alt="..."></img><span>Moto Tab G20</span></figure></a>
  </div>
</div>
         </li>
         
         <li><div class="dropdown">
  <h4 class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
  Accessories 
  </h4>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#"><figure><img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/accessories-all@2x_0___8be1faaf12ef7d3b8b3e53a281ecbb15.png" alt="..."></img><span>All Accessories</span></figure></a>
   
  </div>
</div>
         </li>
         <li>
         <div class="dropdown">
  <h4 class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
  Smart Products 
  </h4>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#"><figure><img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/All%20Motorola%20Home%20208x240___0b2ca965c8d8837669e2d3f9664352b4.png" alt="..."></img><span>All Motorola Home</span></figure></a>
  </div>
</div>
         </li>
         <li>
         <div class="dropdown">
  <h4 class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
  Software 
  </h4>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#"><figure><img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/top-nav-andorid-android-robot-2x_0___4ebb3b17eb6d13d2982b07f38245ee40.png" alt="..."></img><span>software updates</span></figure></a>
    <a class="dropdown-item" href="#"><figure><img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/92813251-2300-48e6-9bc1-ec273618b990___4ebb3b17eb6d13d2982b07f38245ee40.png" alt="..."></img><span>Android 10</span></figure></a>
    <a class="dropdown-item" href="#"><figure><img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/df4e5f56-28ed-4166-a8cc-dc5ef78b6e87___552b08eac0ad4b2bae509f0f37ab8d51.png" alt="..."></img><span>Android 11</span></figure></a>
  </div>
</div>
         </li>
     </ul>
    </div>
  </div>
  <nav class="navbar navbar-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
   

                    {/* <div className='col-md-3 col-sm-12 search'>
                    {/* <form action="/" method="get">
                       
                 <input
                     type="search"
                        id="header-search"
                   placeholder="Search"
                    name="s" 
                 />
        <button type="submit"><NavLink to="" className="nav_icon"><i class="fas fa-search"></i></NavLink></button>
    </form> */}
    {/* <button> <i class="fas fa-search" aria-hidden="true"></i></button>
                    </div> */}
                   	
			<div className="col-md-3 col-sm-12 nav-item dropdown search-dropdown">
				<a data-toggle="dropdown" class="nav-item nav-link " href="#"><i class="fa fa-search"></i></a>
				<a data-toggle="dropdown" class="nav-item nav-link  d-none" href="#"><i class="fa fa-close"></i></a>
				<div class="dropdown-menu">
					<div>
                        <form>
                            <div class="input-group search-box">								
                                <input type="text" id="search" class="form-control" placeholder="Search here..."></input>
								
                            </div>
                        </form>                        
                    </div>
                </div>
            </div>
           </div>
        </div>
        
        
    )
}

export default Navbar;