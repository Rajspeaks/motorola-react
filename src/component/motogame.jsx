import React from "react";
import '../css/motogame.css';

    const Motogame= () =>{
    return(
        <>
<div class="container-fluid gameouter">
		 
  <div class="row" id="header">
		 
           <div class="col-sm-6"> 	 
               <div id="demo" class="carousel slide" data-bs-ride="carousel">

 
                     <div class="carousel-indicators">
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                     </div>
  
 
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                         <img src="https://motorolain.vtexassets.com/arquivos/ids/156984-800-auto?width=800&height=auto&aspect=true" alt="Los Angeles" class="d-block" width="100%"/>
                        </div>
                        <div class="carousel-item">
                         <img src="https://motorolain.vtexassets.com/arquivos/ids/156985-800-auto?width=800&height=auto&aspect=true" alt="Chicago" class="d-block" width="100%"/>
                        </div>
                        <div class="carousel-item">
                          <img src="https://motorolain.vtexassets.com/arquivos/ids/156986-800-auto?width=800&height=auto&aspect=true" alt="New York" class="d-block" width="100%"/>
                        </div>
                        <div class="carousel-item">
                           <img src="https://motorolain.vtexassets.com/arquivos/ids/156988-800-auto?width=800&height=auto&aspect=true" alt="New York" class="d-block" width="100%"/>
                        </div>
                     </div>

                          <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon"></span>
                          </button>
                          <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                          <span class="carousel-control-next-icon"></span>
                          </button>
               </div>

            </div>



            <div class="col-sm-6">
			
			  <div class="container">
			    <img id="header2" src="https://motorolain.vtexassets.com/arquivos/Motorola-edge-30-pro-lockup-ffffff.svg" height='50px' widgth='100px' alt='...'/>
                         <div className="game">
					     <div className="resgame">
					     UNLEASH GAME-CHANGING PERFORMANCE. <br/> FIND YOUR EDGE.
					     </div>
						 </div>
                         <div className="offer">At just ₹44,999</div>
                         <div className="sbi"><img src="https://motorolain.vteximg.com.br/arquivos/bank_strips.png" alt="..."></img></div>
                         <div className="sale">Sale is live on</div>
                         <div className="flip"><img src="https://motorolain.vtexassets.com/arquivos/lockup-flipkart.png" alt="..." width="88px"></img></div>
                         
                         <button class="h">Know More</button>
          
              </div>    
    </div>






		
		
	<div class="row">
        <iframe class="player1"
          src="https://player.vimeo.com/video/668532931?h=c4164404ca&autoplay=1&loop=1&autopause=0&muted=1&texttrack=en"
          frameborder="0"
          allowfullscreen="allowfullscreen"
        ></iframe>
    </div>
		
		<div class="row" id="header2">
        <iframe class="player2"
          src="https://player.vimeo.com/video/668543002?h=2225d6fb90&autoplay=1&loop=1&autopause=0&muted=1&texttrack=en"
          frameborder="0"
          allowfullscreen="allowfullscreen"
        ></iframe>
      </div>
		</div>
		
		
		</div>
		
		</>
		       
    )
}

export default Motogame;
		