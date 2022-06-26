import React from 'react'
import {Link} from "react-router-dom";
import './News.css'
const News = () => {
  return (
   <>
   <section class="news container" >
<div className='mb-3 newslink d-flex align-items-center justify-content-between'><h1 class="ml-5  latestnews">Latest News</h1>
<a class="text-end" href="https://sahiwal.comsats.edu.pk/" target="_blank">
<p class="develop m-0 p-0  ">More</p></a>
</div>
<div className='carousel'>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./assets/images/h1.jpg" style={{width:"100%",height:"450px"}} class="d-block w-100" alt=""/>
      
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
   
      </div>
    </div>
    <div class="carousel-item">
    <img src="./assets/images/h2.jpg" style={{width:"100%",height:"450px"}} class="d-block w-100" alt=""/>
      
      <div class="carousel-caption d-none d-md-block ">
        <h5>Second slide label</h5>
    
      </div>
    </div>
    <div class="carousel-item">
    <img src="./assets/images/news.jpg" style={{width:"100%",height:"450px"}} class="d-block w-100" alt=""/>
      
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
      
      </div>
    </div>
  </div>
 
</div>
    </div>
<div class="cover ">
    
    <div class="newsfied mt-5 mb-5">
    <p class="mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
    of Lorem Ipsum.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
    of Lorem Ipsum.</p>
    
</div>

</div>

</section>
   <script type='text/javascript'>

   </script>
   </>
  )
}

export default News