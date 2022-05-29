import React from "react";
import '../css/menu.css';

const img1="pic1.jpeg"
const img2="pic2.jpeg"
const img3="pic3.jpeg"

const Menu = () =>{
    return(
        <>

{/*------------------------------------------DESKTOP VERSION----------------------------------------------------
*/}
        <div className="container-fluid a1" id="content-desktop">
        <div className="container a6">
            <div className="row">
                <div className="col-md-3 col-sm-12 a2">
                    <h1>hellomoto</h1>
                    <div className="btn"><button>smartphones</button></div>
                </div>
                <div className="col-md-3 col-sm-12 a3">
                    <img src={img1} height='410px' width='230px'></img>
                    <img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/cf2fdf61-97d5-4957-92f8-f04b7b8216ee___d631d79e6c836170a76e4b7b616df207.png" crossorigin="anonymous" height='40px' width='200px'></img>
                    <div className="listing1 pt-5">
                    <ul className="menu-textstyle">
                    
                        <li>
                       <i class="fa-solid fa-circle-check"></i>&nbsp;
                        World's most advanced 48MP selfie camera
                        </li>
                        <li>
                        <i class="fa-solid fa-circle-check"></i>&nbsp;
                            Infinitely Capable 2.7" Quick View Display
                        </li>
                        <li>
                        <i class="fas fa-check-circle"></i>&nbsp;
                        Ultra-Premium Flip Design with 6.2" OLED screen
                        </li>
                        <li>
                        <i class="fas fa-check-circle"></i>&nbsp;
                        5G Ready with Blazing Fast Performance
                        </li>
                    </ul>
                    <div className="bt1"><button>Learn More</button></div>
                </div>
                </div>
                <div className="col-md-3 col-sm-12 a4">
                    <img src={img2} height='410px' width='230px'></img>
                    <img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/6e1ded93-e230-4b02-8996-3b516aa79af3___25f21b8e8b5bc9cf3cfb8c7715411607.svg" height='50px' width='200px'></img>
                    <div className="listing2">
                    <ul className="menu-textstyle">
                    
                        <li>
                       <i class="fa-solid fa-circle-check"></i>&nbsp;
                        Ultra-fast Qualcomm Snapdragon 750G processor
                        </li>
                        <li>
                        <i class="fa-solid fa-circle-check"></i>&nbsp;
                            Truly 5g ready with 11 5G bands
                        </li>
                        <li>
                        <i class="fas fa-check-circle"></i>&nbsp;
                       Immersive 6.7" Max Vision HDR10 Display
                        </li>
                        <li>
                        <i class="fas fa-check-circle"></i>&nbsp;
                        Massive 5000 mAh battery
                        </li>
                        <li>
                        <i class="fas fa-check-circle"></i>&nbsp;
                       6 GB RAM with 128 GB storage
                        </li>
                    </ul>
                    <div className="bt2"><button>Learn More</button></div>
                </div>                
                </div>
                <div className="col-md-3 col-sm-12 a5">
                    <img src={img3} height='410px' width='230px'></img>
                    <img src="https://motorolain.vtexassets.com/assets/vtex.file-manager-graphql/images/6e1ded93-e230-4b02-8996-3b516aa79af3___25f21b8e8b5bc9cf3cfb8c7715411607.svg" crossorigin="anonymous" height='50px' width='200px'></img>
                    <div className="listing3 pt-4">
                    <ul className="menu-textstyle">
                    
                        <li>
                       <i class="fa-solid fa-circle-check"></i>&nbsp;
                        Gigantic 6000 mAh battery
                        </li>
                        <li>
                        <i class="fa-solid fa-circle-check"></i>&nbsp;
                            Incredible 64MP Triple Camera with Night Vision Mode
                        </li>
                        <li>
                        <i class="fas fa-check-circle"></i>&nbsp;
                       6.8" Max Vision Display
                        </li>
                        <li>
                        <i class="fas fa-check-circle"></i>&nbsp;
                       Qualcomm Snapdragon 662 processor with 4 GB RAM
                       </li>
                       <li>
                        <i class="fas fa-check-circle"></i>&nbsp;
                       IP52 rated water repellant design
                       </li>
                    </ul>
                    <div className="bt3"><button>Learn More</button></div>
					
                </div>
                </div>
            </div>
			
          
	    </div>
	</div>
	
    <hr/>

{/*----------------------------------------------MOBILE VERSION---------------------------------------------*/}
	
        </>
    )
}

export default Menu