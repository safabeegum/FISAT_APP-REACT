import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
        
        <Navbar/>
        <div class="text-bg-warning p-3">
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <br></br>
                <br></br>

            {/* corousel start */}
                <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div class="carousel-inner">
                <div class="carousel-item active">
                <img height="545px" width="1400px" src="https://careermudhra.com/wp-content/uploads/federal-institute-of-science-and-technology-fisat-ernakulam-jpg.webp" class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                <img height="545px"  src="https://fisat.ac.in/wp-content/uploads/2022/06/mca1-scaled-e1658138621201.jpeg" class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                <img height="545px" src="https://fisat.ac.in/wp-content/uploads/2022/06/mba-banner.jpg" class="d-block w-100" alt="..."></img>
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
                </div>
    
        {/* corousal end */}
    
          </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;
