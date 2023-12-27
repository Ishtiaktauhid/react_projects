import React,{useState } from "react";
import { Link,useLocation } from "react-router-dom";
import {logout} from "./Authentication/auth";
import { useNavigate } from "react-router-dom";


function Header(){
    const navigate = useNavigate();
    const [isSignedIn, setIsSignedIn ] = useState(() => {
        const userLogged = localStorage.getItem("access_token");
        return userLogged || false;
    });
    const signout = () => {
        setIsSignedIn(false);
        logout();
        navigate('/');
      }



    
    const location = useLocation();

    const isLinkActive = (path) => {
        return location.pathname == path ? 'active' : "";
    }
 return(
    <>
    
     <div className="container-fluid bg-white sticky-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
                <a href="index.html" className="navbar-brand">
                    <img className="img-fluid" src="/assets/img/logo.png" alt="Logo" />
                </a>
                <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                       <Link to={"/"}> <a className={`nav-item nav-link ${isLinkActive("/")}`}>Home</a></Link>
                        <Link to={"/About"}><a className={`nav-item nav-link ${isLinkActive("/About")}`}>About</a></Link>
                       <Link to={"/Products"}> <a className={`nav-item nav-link ${isLinkActive("/Products")}`}>Products</a></Link>
                        <Link to={"/Store"}><a  className={`nav-item nav-link ${isLinkActive("/Store")}`}>Store</a></Link>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu bg-light rounded-0 m-0">
                                <a href="feature.html" className="dropdown-item">Features</a>
                                <a href="blog.html" className="dropdown-item">Blog Article</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        {isSignedIn ? (
                        <div className="header__right__auth">
                            <button className="btn btn-link" type="button" onClick={signout}>Sign out </button>
                            <a href="./dashboard"><b>Dashboard</b></a>
                        </div>
                    ) : (
                        <div className="header__right__auth">
                            <a className="btn btn-link" href="./signin">
                            Sign in
                            </a>
                            <a className="btn btn-link" href="./register">
                            Register
                            </a>
                        </div>
                    )}
                    </div>
                    <div className="border-start ps-4 d-none d-lg-block">
                        <button type="button" className="btn btn-sm p-0"><i className="fa fa-search"></i></button>
                    </div>
                    <div className="border-start ps-4 d-none d-lg-block">
                        <button type="button" className="btn btn-sm p-0"><i className="fa fa-user"></i></button>
                    </div>
                    <div className="border-start ps-4 d-none d-lg-block">
                        <button type="button" className="btn btn-sm p-0"><i >🛒</i></button>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    </>
   
 )
}
export default Header;