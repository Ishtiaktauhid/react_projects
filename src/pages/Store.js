import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Store1 from "./Submenu/store";






function Store() {
   return(
     <>
     <Header />
     {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-2 text-dark mb-4 animated slideInDown">Store</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item text-dark" aria-current="page">Store</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}
    <Store1 />
   
   <Footer />
     </>
   )

}
export default Store;