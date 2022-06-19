import React from 'react';
import '../css/slider.css';

const Slider = () =>{
    return(
        <>
        <div className='container-fluid slider-outer' id='content-desktop'>
            <div className="row">
            <div className='col-12 col-md-12 col-lg-12 col-xl-12 slider p-0 m-0'>
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <div class="carousel-indicators center">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
          </div>
                <div class="carousel-inner">
                    
                <div class="carousel-item active">
                           
                           <img class='slider-carousal' src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/f4b90ed5-16a2-4690-b075-0349a4cb8398___ea751eca19b67e0df02b8b4c2cb6de5d.jpg"  alt="..."  height="570px" width="100%"/>    
                           
                           <div class="carousel-caption">
                            <div class='au'>
                            <img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/501ee66e-2abc-45fa-ab6c-af8763558666___ea6845f49dd3a0ebaf012f64941b96a7.svg" alt="..."></img>
                           </div>
                           
                           <div class='game-head'>UNLEASH GAME-CHANGING PERFORMANCE.</div>
                         <div className="game-text"> FIND YOUR EDGE.</div>
                         <div className="offer-text">At just ₹44,999 (including bank offer)</div>
                         <div className="sbi-img"><img src="https://motorolain.vteximg.com.br/arquivos/bank_strips.png" alt="..."></img></div>
                         <div className="sale-text">Sale is live on</div>
                         <div className="flip-img"><img src="https://motorolain.vtexassets.com/arquivos/lockup-flipkart.png" alt="..." width="88px"></img></div>
                         <div class="slider-btn">
                                    <button>Know More</button>
                         </div>
                  </div>     
                </div>  
                        
                        <div class="carousel-item">
                            
                            <img class='slider-carousal' src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/19cf0ca3-d485-4b66-8b0c-4e63748a7806___d9a68af03003880352ac9c543e2be969.jpg"  alt="..." height="570px" width="100%"/>
                            <div class="carousel-caption">
                                <div className="a">
                                <img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/b3110905-a086-4afc-92bb-156c5f072b8e___e2fdf41475e26782ac8c34f4133e0974.svg" alt="..."></img>
                                </div>
                                <div className="b">
                                POWER UP YOUR JOURNEY
                                </div>
                                <div className="c">Available On 
                                <span>
                                <img src="https://motorolain.vtexassets.com/arquivos/lockup-flipkart.png" alt="..." width="88px"></img>
                                </span>
                                </div>
                                <div class="slider-btn">
                                    <button type='button'>Know More</button>
                         </div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            
                            <img class='slider-carousal' src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/adb4717b-32ab-43c6-87a8-2789f7710b02___402d6ef032554b5a5e8f7c04df394f53.jpg"  alt="..." height="570px" width="100%"/>
                            <div class="carousel-caption">
                                <div className="aw">
                                            <img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/c09b48d2-31ad-44cc-b14c-263a20dc2f2b___48b2630b1230bb5f470c4158cc7d3646.svg" alt="..."></img>
                                </div>
                                <div className="bw">
                                WORLD'S THINNEST 5G SMARTPHONE
                                </div>
                                <div className="cw">Starting at ₹27,999. Sale is Live on 
                                <span>
                                <img src="https://motorolain.vtexassets.com/arquivos/lockup-flipkart.png" alt="..." width="88px"></img>
                                </span>
                                </div>
                                <div class="slider-btn-w">
                                    <button type='button'>Know More</button>
                         </div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            
                            <img class='slider-carousal' src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/ddb6a4cc-329d-44b0-9ac7-8eedc16d60de___6d15d6cd59738414dc063093489cd691.jpg" alt="..." height="570px" width="100%"/>
                            <div class="carousel-caption">
                                <div className="ep">
                                <img class='slider-carousal' src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/94bf829e-375c-4b7d-9181-d640e4d781ab___761d6bcc8b825755f53003fb2f0b932d.svg" alt="..."></img>
                                </div>
                                <div className="bp">
                                 PICTURE THE POSSIBILITIES
                                </div>
                                <div className="c">Available On <span><img src="https://motorolain.vtexassets.com/arquivos/lockup-flipkart.png" alt="..." width="88px"></img></span></div>
                                <div class="slider-btn">
                                    <button type='button'>Know More</button>
                         </div>

                            </div>
                        </div>

                </div>
                <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="false"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
                </div>
                </div>
            </div>
        </div>


{/*--------------------------------------------------------------MOBILE VERSION---------------------------------------------------------*/}

 <div className='container-fluid slider-outer' id='content-mobile'>
     
     <div id="myCarousel" class="carousel slide" data-ride="carousel">
  
 <div class="carousel-indicators center">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
</div>

 
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class='mobile-slider' src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/ed3f5fa4-20fa-4545-9810-ee524ba3da3d___69f266efc1aade3866d40f7eaece5aab.jpg" alt="..."/>
       
      <div class="carousel-caption">
      <div className="a">
     <img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/501ee66e-2abc-45fa-ab6c-af8763558666___ea6845f49dd3a0ebaf012f64941b96a7.svg" alt="..."></img>
     </div>
          
        <h3 class='mobile-slider-header'>UNLEASH GAME-CHANGING PERFORMANCE.<br/>FIND YOUR EDGE.</h3>
        <h4>At Just Rs. 44,999 (including bank offer)</h4>
      </div>

    </div>

    <div class="carousel-item">
      <img class='mobile-slider' src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/e19a2ebe-72b3-443d-8901-9f0eb0a21c6c___754cd85607ff3d37f01cc57945dad3c4.jpg" alt="..."/>
     <div class="carousel-caption">
     <div className="a">
     <img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/b3110905-a086-4afc-92bb-156c5f072b8e___e2fdf41475e26782ac8c34f4133e0974.svg" alt="..."></img>
     </div>
     <h3 class='mobile-slider-header'>POWER UP YOUR JOURNEY</h3>
        <h4>At Just Rs. 44,999 (including bank offer)</h4>
   </div>

    </div>

    <div class="carousel-item">
      <img class='mobile-slider' src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/a1cf15b2-2dc1-44d3-86c3-c60141bedaa6___bc70e8cd10bdaa19b5520fc6015fa267.jpg" alt="..." />
   
      <div class="carousel-caption">
      <div className="a">
     <img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/c09b48d2-31ad-44cc-b14c-263a20dc2f2b___48b2630b1230bb5f470c4158cc7d3646.svg" alt="..."></img>
     </div>
     <h3 class='mobile-slider-header'>WORLD'S THINNEST SMARTPHONE</h3>
        <h4>At Just Rs. 27,999 (including bank offer)</h4>
   
     </div>

    </div>

     <div class="carousel-item">
      <img class='mobile-slider' src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/ecc7fda6-3a0e-4c4f-9bd9-637f601d6715___9f592aee2305959ba89ee8e2f0a0f3ec.jpg" alt="..."/>
       <div class="carousel-caption">
       <div className="a">
     <img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/94bf829e-375c-4b7d-9181-d640e4d781ab___761d6bcc8b825755f53003fb2f0b932d.svg" alt="..."></img>
     </div>
     <h3 class='mobile-slider-header'>PICTURE THE POSSIBILITIES</h3>
        <h4>At Just Rs. 44,999 (including bank offer)</h4>
   
       </div>
    </div>

  </div>

  
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

</div>

        </>
    )
}
export default Slider

