import React, { useContext } from "react";
import { FaGofore } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { dataContext } from "./providers/AuthProviders";

const Register = () => {
    const {handleGoogleLoginBtn} = useContext(dataContext);
    // console.log(authData);

    const handleGoogleLogin = () => {
        handleGoogleLoginBtn()
        .then(result => {
            console.log(result);
        })
        .catch(error =>{
            console.log(error);
        })
    } 
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col gap-7">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold underline">Register!!!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="confirm"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Allready have an Account!!!
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                
                <button onClick={handleGoogleLogin} className="btn btn-outline btn-info mt-3"><FaGofore className="mr-2 h-4 w-4 text-red-700"></FaGofore>Login With Google</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
