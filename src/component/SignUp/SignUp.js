import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl px-8 py-5">
        <h1 className="login-title text-4xl leading-15 mb-5 font-bold">
          Sign Up
        </h1>
        <div className="form-control  w-full max-w-xs">
          <label className="label">
            <span className="label-text">ENTER YOUR NAME:</span>
          </label>
          <input
            type="text"
            placeholder="Shohayab Hasan Talha"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text">ENTER YOUR EMAIL:</span>
          </label>
          <input
            type="email"
            placeholder="info@example.com"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt"></span>
          </label>
          <label className="label">
            <span className="label-text">ENTER YOUR PASSWORD:</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt"></span>
          </label>
          <button className="w-100 btn-full">SignUp</button>
          <div className="divider">OR</div>
          <button className="btn btn-active w-100 btn-secondary">
            <FaGoogle className="mr-2 text-lg"></FaGoogle>
            SignUp with google
          </button>
          <div className="divider">OR</div>
          <div className="w-100 flex justify-center items-center py-1 ">
            <p className="text-black-900">Already Member?</p>
            <Link className="text-blue-900 ml-2" to="/login">
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
