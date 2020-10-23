import React from 'react'
import "./style.css"

export default function Carousel() {
    return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel-slide container "  data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                 <img className="d-block w-100" src="./JJ.png" alt="First slide"></img>  
            </div>
            <div className="carousel-item ">
                <img className="d-block w-100" src="./wallpaper-.jpg" alt="Second slide"></img>
            </div>  
            <div className="carousel-item ">
                <img className="d-block w-100" src="./logo512.png" alt="Third slide"></img>
            </div>
         </div>
        </div>
    </div>
    )
}
