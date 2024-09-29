import React from 'react'

import Img from './images/color tree.jpg';
import Img1 from './images/orange tree.webp';
import Img2 from './images/road tree.jpg';


function Carousell() {
  return (
    <div>
        
<div id="demo" class="carousel slide" data-ride="carousel">


<ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>

<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={Img} className="w-90"/>
  </div>
  <div class="carousel-item">
    <img src={Img1} className='w-90'/>
  </div>
  <div class="carousel-item">
    <img src={Img2} className='w-90'/>
  </div>
</div>


<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>
</div>
    </div>
  )
}

export default Carousell