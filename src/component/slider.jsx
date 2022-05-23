import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/slider.css';

const Slider = () =>{
    return(
        <>
        <div className='container-fluid'>
            <div className="row">
            <div className='col-18 col-md-12 col-lg-12 col-xl-12 slider p-0 m-0'>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
  </ol>
                <div class="carousel-inner">
                    
                <div class="carousel-item active">
                           
                           <img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/f4b90ed5-16a2-4690-b075-0349a4cb8398___ea751eca19b67e0df02b8b4c2cb6de5d.jpg"  alt="..."  height="570px" width="100%"/>    
                           
                           <div class="carousel-caption desk">
                            
                            <img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/501ee66e-2abc-45fa-ab6c-af8763558666___ea6845f49dd3a0ebaf012f64941b96a7.svg" alt="..."></img>
                         <div className="game"><div className="resgame">
						 UNLEASH GAME-CHANGING PERFORMANCE. <br/> FIND YOUR EDGE.
						 </div></div>
                         <div className="offer">At just ₹44,999</div>
                         <div className="sbi"><img src="https://motorolain.vteximg.com.br/arquivos/bank_strips.png" alt="..."></img></div>
                         <div className="sale">Sale is live on</div>
                         <div className="flip"><img src="https://motorolain.vtexassets.com/arquivos/lockup-flipkart.png" alt="..." width="88px"></img></div>
                         <div class="slider-btn">
                                    <button id="carobutton">Know More</button>
                         </div>
                  </div>     
                </div>  
                        
                        <div class="carousel-item">
                            
                            <img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/19cf0ca3-d485-4b66-8b0c-4e63748a7806___d9a68af03003880352ac9c543e2be969.jpg"  alt="..." height="570px" width="100%"/>
                            <div class="carousel-caption">
                                <div className="a">
                                            <img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/b3110905-a086-4afc-92bb-156c5f072b8e___e2fdf41475e26782ac8c34f4133e0974.svg" alt="..." max-width="400px"></img>
                                </div>
                                <div className="b">
                                    POWER UP YOUR JOURNEY
                                </div>
                                <div className="c">Available On <span><img src="https://motorolain.vtexassets.com/arquivos/lockup-flipkart.png" alt="..." width="88px"></img></span></div>
                                <div class="d">
                                    <button>Know More</button>
                         </div>

                            </div>
                        </div>
                        <div class="carousel-item">
                           
                            <img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/01e14406-26d0-4091-9907-bc2196d6d6dc___3ffc5a10ed58d03a21c0266b06e7b55e.jpg"  alt="..." height="570px" width="100%"/>
                            <div class="carousel-caption">
                                <div className="e">
                                            <img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/7f0e9b46-65b5-4aad-a725-5cf920e20c8a___5b15a0a6394a862f60266f5e44bd65c5.svg" alt="..." max-width="400px"></img>
                                </div>
                                <div className="f">
                                  BOOST YOUR EXPERIENCE
                                </div>
                                <div className="g">Available On <span><img src="https://motorolain.vtexassets.com/arquivos/lockup-flipkart.png" alt="..." width="88px"></img></span></div>
                                <div class="h">
                                    <button>Know More</button>
                         </div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            
                            <img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/ddb6a4cc-329d-44b0-9ac7-8eedc16d60de___6d15d6cd59738414dc063093489cd691.jpg" alt="..." height="570px" width="100%"/>
                            <div class="carousel-caption">
                                <div className="e">
                                            <img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/94bf829e-375c-4b7d-9181-d640e4d781ab___761d6bcc8b825755f53003fb2f0b932d.svg" alt="..." max-width="400px"></img>
                                </div>
                                <div className="f">
                                 PICTURE THE POSSIBILITIES
                                </div>
                                <div className="g">Available On <span><img src="https://motorolain.vtexassets.com/arquivos/lockup-flipkart.png" alt="..." width="88px"></img></span></div>
                                <div class="h">
                                    <button>Know More</button>
                         </div>

                            </div>
                        </div>

                </div>
                <a class="carousel-control left" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control right" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Slider