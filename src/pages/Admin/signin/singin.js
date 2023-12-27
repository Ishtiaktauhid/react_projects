import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {login} from "../../Authentication/auth";
import './signin.css';


function Signin(){
    const navigate = useNavigate();
    
     const [inputs, setInputs ] = useState([]);
     const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values =>({...values, [name]: value}))
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        let check = await login(inputs);
        if(check)
            navigate('/');
        
        else
            alert("Sorry password is wrong!");
       }
      
    return(
        <>
            {/* <div className="row ">
                <div className="col-sm-6 offset-sm-3">
                    <form onSubmit={handleSubmit}>
                        <div className="container">
                            <label for="uname"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email Address"  name="email" onChange={handleChange} required/>

                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} required/>

                            <button type="submit">Login</button>
                            <label>
                            <input type="checkbox" checked="checked" name="remember"/> Remember me
                            </label>
                        </div>

                        <div className="container">
                            <button type="button" className="cancelbtn">Cancel</button>
                        </div>
                    </form>
                  
                   
                </div>
            </div> */}


<div className="login-wrap" style={{backgroundColor:" "}}>
      <div className="login-container1">
        <div className="container5 mt-5">
          <h1
            className="text-center"
            style={{ margin: "20px", fontSize: "30px", letterSpacing: "10px" }}
          >
            Sign in
          </h1>
          <div className="u-icon">
            <span className="fa fa-user custom-icon"></span>
          </div>
          <div className="row">
            <div className="col-sm-6 login-img">
              <img
                src="assets/images/sufa.png"
                className=" img-fluid"
                alt="sfdgdfg"
              />
            </div>
            <div className="col-sm-6">
              <form onSubmit={handleSubmit}>
                <label for="uname">
                  <b>Email</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                />
                <label for="psw">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter  Password"
                  name="password"
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  style={{ marginTop: "20px", fontSize: "20px" }}
                >
                  Login{" "}
                </button>
                {/* <div className="form-group form-check">
                  <input
                    type="checkbox"
                    name="checkbox"
                    className="form-check-input"
                    id="checkbox"
                    onChange={handleChange} // Call handleChange when the input changes
                    required
                  />{" "}
                  <label htmlfor="checkbox">
                    <span
                      className="remembermargin"
                      style={{ fontSize: "20px" }}
                    >
                      {" "}
                      Remember Me{" "}
                    </span>
                  </label>
                </div> */}

                <div className="px-3 pt-0 mt-0">
                  Don't have an account? <a href="/register">Register</a> Now
                </div>
                {/* <div className="container">
                <button type="button" className="cancelbtn">
                  Cancel
                </button>
              </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
            
   
  

   
        </>
    )
}
export default Signin;