import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import About1 from "./Submenu/about1";
import Product1 from "./Submenu/product";
import Store1 from "./Submenu/store";

function Home(){
   
      const option1 = {
        items: 1, // Number of items to display
        margin: 10, // Margin between items
        nav: true, // Show navigation buttons
        autoplay:true,
        responsive: {
          0: {
            items: 1, // Number of items to display on small screens
          },
          600: {
            items: 1, // Number of items to display on medium screens
          },
        },
      };


    return(

        <div className="Home">
            <Header />
           
 

    
    
    
    


   
    <div className="container-fluid px-0 mb-5">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="/assets/img/carousel-1.jpg" alt="Image" />
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 text-center">
                                    <p className="fs-4 text-white animated zoomIn">Welcome to <strong className="text-dark">TEA House</strong></p>
                                    <h1 className="display-1 text-dark mb-4 animated zoomIn">Organic & Quality Tea Production</h1>
                                    <a href="" className="btn btn-light rounded-pill py-3 px-5 animated zoomIn">Explore More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="/assets/img/carousel-2.jpg" alt="Image" />
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 text-center">
                                    <p className="fs-4 text-white animated zoomIn">Welcome to <strong className="text-dark">TEA House</strong></p>
                                    <h1 className="display-1 text-dark mb-4 animated zoomIn">Organic & Quality Tea Production</h1>
                                    <a href="" className="btn btn-light rounded-pill py-3 px-5 animated zoomIn">Explore More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  
{/* About Portion start */}

  <About1 />

  {/* About Portion End */} 

{/* carousel part start */}
<Product1 />
{/* carousel part end */}
 
   

   
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <img className="img-fluid" src="/assets/img/article.jpg" alt="" />
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="section-title">
                        <p className="fs-5 fw-medium fst-italic text-primary">Featured Acticle</p>
                        <h1 className="display-6">The history of tea leaf in the world</h1>
                    </div>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna. Tempor erat elitr rebum at clita.</p>
                    <a href="" className="btn btn-primary rounded-pill py-3 px-5">Read More</a>
                </div>
            </div>
        </div>
    </div>
   


    <div className="container-fluid video my-5">
        <div className="container">
            <div className="row g-0">
                <div className="col-lg-6 py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="py-5">
                        <h1 className="display-6 mb-4">Tea is a drink of <span className="text-white">health</span> and <span className="text-white">beauty</span></h1>
                        <h5 className="fw-normal lh-base fst-italic text-white mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit</h5>
                        <div className="row g-4 mb-5">
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <span className="text-dark">Great tea assortment</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <span className="text-dark">Spices & additives</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <span className="text-dark">Unique accessories</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <span className="text-dark">Good for health & beauty</span>
                                </div>
                            </div>
                        </div>
                        <a className="btn btn-light rounded-pill py-3 px-5" href="">Explore More</a>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="h-100 d-flex align-items-center justify-content-center" style={{ minHeight: "300px" }} >
                        <button type="button" className="btn-play" data-bs-toggle="modal"
                            data-src="https://www.youtube.com/embed/xvex2DsiBJA?si=SRooKDpMNi21lgte" data-bs-target="#videoModal">
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


    
    <div className="modal modal-video fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content rounded-0">
                <div className="modal-header">
                    <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
           
                    <div className="ratio ratio-16x9">
                        <iframe className="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always"
                            allow="autoplay"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>



  
    {/* Store Portion Start */}
    <Store1 />
    {/* Store Portion End */}
   


    
    <div className="container-fluid testimonial py-5 my-5">
        <div className="container py-5">
            <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"500px"}}>
                <p className="fs-5 fw-medium fst-italic text-white">Testimonial</p>
                <h1 className="display-6">What our clients say about our tea</h1>
            </div>
            <OwlCarousel className="owl-carousel testimonial-carousel wow fadeInUp"{...option1} data-wow-delay="0.5s">
                <div className="testimonial-item p-4 p-lg-5">
                    <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                    <div className="d-flex align-items-center justify-content-center">
                        <img className="img-fluid flex-shrink-0" src="/assets/img/testimonial-1.jpg" alt="" />
                        <div className="text-start ms-3">
                            <h5>Client Name</h5>
                            <span className="text-primary">Profession</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item p-4 p-lg-5">
                    <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                    <div className="d-flex align-items-center justify-content-center">
                        <img className="img-fluid flex-shrink-0" src="/assets/img/testimonial-2.jpg" alt="" />
                        <div className="text-start ms-3">
                            <h5>Client Name</h5>
                            <span className="text-primary">Profession</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item p-4 p-lg-5">
                    <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                    <div className="d-flex align-items-center justify-content-center">
                        <img className="img-fluid flex-shrink-0" src="/assets/img/testimonial-3.jpg" alt="" />
                        <div className="text-start ms-3">
                            <h5>Client Name</h5>
                            <span className="text-primary">Profession</span>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    </div>
   

    
    <div className="container-xxl contact py-5">
        <div className="container">
            <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"500px"}} >
                <p className="fs-5 fw-medium fst-italic text-primary">Contact Us</p>
                <h1 className="display-6">Contact us right now</h1>
            </div>
            <div className="row justify-content-center wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-8">
                    <p className="text-center mb-5">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                    <div className="row g-5">
                        <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.3s">
                            <div className="btn-square mx-auto mb-3">
                                <i className="fa fa-envelope fa-2x text-white"></i>
                            </div>
                            <p className="mb-2">info@example.com</p>
                            <p className="mb-0">support@example.com</p>
                        </div>
                        <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.4s">
                            <div className="btn-square mx-auto mb-3">
                                <i className="fa fa-phone fa-2x text-white"></i>
                            </div>
                            <p className="mb-2">+012 345 67890</p>
                            <p className="mb-0">+012 345 67890</p>
                        </div>
                        <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.5s">
                            <div className="btn-square mx-auto mb-3">
                                <i className="fa fa-map-marker-alt fa-2x text-white"></i>
                            </div>
                            <p className="mb-2">123 Street</p>
                            <p className="mb-0">New York, USA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   <Footer />

   
    
        </div>
    )
}
export default Home 