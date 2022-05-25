import React, { useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // login-with-google-account
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  if (user || googleUser) {
    console.log(user || googleUser);
    navigate(from, { replace: true });
  }

  useEffect(() => {
    const notify = (message) => toast(message);
    if (error) {
      notify(error.message);
    }
  }, [error, googleError]);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl px-8 py-5">
        <h1 className="login-title text-4xl leading-15 mb-5 font-bold">
          Login
        </h1>
        <form
          className="form-control  w-full max-w-xs"
          onSubmit={(event) => {
            event.preventDefault();
            signInWithEmailAndPassword(email, password);
          }}
        >
          <label className="label">
            <span className="label-text">ENTER YOUR EMAIL:</span>
          </label>
          <input
            type="email"
            placeholder="info@example.com"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setEmail(e.target.value)}
            required
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
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="label">
            <span className="label-text-alt"></span>
          </label>
          <button className="w-full btn-full">Login</button>
          <div className="divider">OR</div>
          <button
            className="btn btn-active w-100 btn-secondary"
            onClick={() => signInWithGoogle()}
          >
            <FaGoogle className="mr-2 text-lg"></FaGoogle>
            Login with google
          </button>
          <div className="divider">OR</div>
          <div className="w-100 flex flex-col justify-center items-center py-1 ">
            <Link className="text-blue-900" to="/signup">
              CREATE NEW ACCOUNT
            </Link>
            <a className="pt-2 text-blue-900" href="#">
              RESET PASSWORD
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
