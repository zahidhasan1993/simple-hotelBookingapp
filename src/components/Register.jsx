import React, { useContext, useState } from "react";
import { FaGofore } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { dataContext } from "./providers/AuthProviders";

const Register = () => {
    const {handleGoogleLoginBtn,createUser} = useContext(dataContext);
    const [error,setError] = useState('')
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

    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      const confirmPassword = form.confirm.value;
      if(password !== confirmPassword){
          setError('Your Password did not matched!!!')
          return
      }
      else if(password.length < 6 ){
        setError('password must be 6 charecters')
        return 

      }

      createUser(email,password)
      .then(result => {
        const newUser = result.user;
        setError('');
        
        console.log(newUser);
      })
      .catch(error => {
        console.log(error.message);
      })
      // console.log(console.error());
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col gap-7">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold underline">Register!!!</h1>
        </div>
        <div  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
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
                required
              />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  name="confirm"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Allready have an Account!!!
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                
                <button onClick={handleGoogleLogin} className="btn btn-outline btn-info mt-3"><FaGofore className="mr-2 h-4 w-4 text-red-700"></FaGofore>Login With Google</button>

              </div>
            </div>
          </form>
          {
            error ? <p className="text-red-700">{error}</p> : <></>
          }
        </div>
      </div>
    </div>
  );
};

export default Register;
