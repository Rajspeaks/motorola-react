import React from "react";
import Navbar from './navbar';
import Miniabout from './miniabout';
import Sitemap from './sitemap';
import Footer from './footer';
import '../css/g22.css';

  const G22_Home = () =>{
    return(
        <>
		<div>
           <Navbar/>
		   
  </div>
  

     
        <div className="container-fluid g22_outer">

        <div class="row">
       
          <h1 class="headtag">Take your photos further</h1>


          <p className='paratag'>
                    <i class="fa-solid fa-arrow-left"></i> &nbsp;    Scroll through to learn more &nbsp;  <i class="fa-solid fa-arrow-right"></i>
          </p>


{/*-----------------------------------------------CAROUSAL PART-------------------------------------------------------------------*/}


      <div id="demo" class="carousel slide" data-ride="carousel">

          <div class="carousel-indicators center">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 3"></button>
          </div>
  
 
            <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img class='g22-car' src="https://www.motorola.in/arquivos/moto-G22-Gallery-Ultrawide-d-z4monnp3.jpg" alt="Los Angeles"/>
                  </div>
                  <div class="carousel-item">
                      <img class='g22-car' src="https://www.motorola.in/arquivos/moto-G22-Gallery-Portrait-Mode-d-bug1dqmm.jpg" alt="Chicago"/>
                  </div>
                  <div class="carousel-item">
                      <img class='g22-car' src="https://www.motorola.in/arquivos/moto-G22-Gallery-Macro-Vision-d-ao1utlva.jpg" alt="New York"/>
                  </div>
                  <div class="carousel-item">
                      <img class='g22-car' src="https://www.motorola.in/arquivos/moto-G22-Gallery-Night-Vision-d-6xbg3d9c.jpg" alt="New York"/>
                  </div>
                  <div class="carousel-item">
                      <img class='g22-car' src="https://www.motorola.in/arquivos/moto-G22-Gallery--Face-Beauty-d-h9tuqgya.jpg" alt="New York"/>
                  </div>
                  <div class="carousel-item">
                  <img class='g22-car' src="https://www.motorola.in/arquivos/moto-G22-Gallery-Panorama-d-pqvkt7i7.jpg" alt="New York"/>
                  </div>
            </div>
  
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </a>
      </div>

              <h2 class='head2tag'>Night Vision</h2>

              <p className='para2tag'>Bring more details out of the dark and take vivid photos on both the rear and<br/> selfie cameras. Your images come out bright and clear even in low-light<br/> conditions.</p>


  </div>

  <div class='row rowgap'>


  <h1 class='head3tag'>90Hz 6.5" IPS LCD display</h1>

  <iframe src="https://player.vimeo.com/video/686589792?h=17ad691f03&autoplay=1&loop=1&autopause=0&muted=1&texttrack=en" height='600px' width='500px' alt='...'/>

  </div>

  <div class="row row-first">

     <div className="col-sm-3">

     <h1 class='head4tag'>90 Hz </h1>
     <br/>
     <p class='para4tag'>Speedy refresh rate for <br/>smoother visuals</p>

     </div>

    <div className="col-sm-3">

     <h1 class='head4tag'>6.5” Max<br/> Vision </h1>
     <br/>
     <p class='para4tag'>Ultra-wide screen for<br/> maximum viewing</p>

     </div>

     <div className="col-sm-3">

     <h1 class='head4tag'>Brilliant <br/>colours </h1>
     <br/>
     <p class='para4tag'>Vibrant details for an<br/> immersive experience</p>

     </div>

     <div className="col-sm-3">

     <h1 class='head4tag'>20:9 aspect <br/>ratio</h1>
     <br/>
     <p class='para4tag'>Scroll less and see more on your screen</p>

     </div>


  </div>


  <div className='row row-second'>

    <div class='col-sm-6'>
    </div>
    
    <div className='col-sm-6'>
    
     <h1 class="head5tag">Ad free near stock-AndroidTM 12</h1>

     <p class='para5tag'>Improved privacy features and a reimagined UI give you more control over your<br/> smartphone experience, so you can focus on the things that matter. Get an ad free<br/> experience with a clean and pure Android 12 implementation.</p>
    
   </div>

  </div>


{/*------------------------------------------------------------ROW PART------------------------------------------------------------------*/}
   <div className="mec-header">
      <h3 className="fet-head">More features you'll appreciate</h3>
      </div>

  <div className="row innerrow2-ank">

    <div className="mec-multi-editorial-column col-md-3 col-sm-12" >
            
                <div className="mec-image">
                <img class='rowimg'src="https://motorolaimgrepo.myvtex.com/arquivos/moto-G22-Performancet24t622c.jpg" alt=""></img>
                </div>
                <div className="mec-description">
                <h2 class='row-head'>Power at your fingertips</h2>
                <p class='row-para'>Feel the smooth, responsive performance of the MediaTek Helio G37 processor with every touch, tap, and swipe.</p>
            
            </div>
        </div>


        <div className="mec-multi-editorial-column col-md-3 col-sm-12" >
           
            <div className="mec-image">
            <img class='rowimg' src="https://motorolaimgrepo.myvtex.com/arquivos/moto-G22-Storage5r0oj63a.jpg" alt=""></img>
            </div>
            <div className="mec-description">
            <h2 class='row-head'>Room for everything</h2>
             <p class='row-para'>Store photos, films, music, and more with up to 64 GB<sup>8</sup> of built-in storage<sup>4</sup>. Add up to 1 TB more with a microSD card<sup>5</sup>, while getting two dedicated nano SIM card slots.</p>
            
            </div>
        </div>


        <div className="mec-multi-editorial-column col-md-3 col-sm-12">
            
            <div className="mec-image"><img class='rowimg' src="https://motorolaimgrepo.myvtex.com/arquivos/moto-G22-side FPS + Face unlockk5696vi7.jpg" alt=""></img>
            </div>
            <div className="mec-description">
            <h2 class='row-head'>Instant access</h2>
             <p class='row-para'>Unlock your phone by touching the fingerprint reader or glancing at the camera.</p>
            
            </div>
        </div>


        <div className="mec-multi-editorial-column col-md-3 col-sm-12" >
            
            <div className="mec-image"><img class='rowimg' src="https://motorolaimgrepo.myvtex.com/arquivos/moto-G22-Water Repellent3rgcp04b.jpg" alt=""></img></div>
            <div className="mec-description">
            <h2 class='row-head'>Business grade security</h2>
            <p class='row-para'>Your data is protected from malware, phishing, and other threats by the ThinkShield<sup>®️</sup> for mobile suite of <br/>hardware and software <br/>security features.</p>
            
            </div>
        </div>

        </div>

{/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        






</div>

  


  <div>
           
           <Miniabout/>
           <Sitemap/>
           <Footer/>
     
  </div> 
      
    </>
           
    )
}

export default G22_Home;