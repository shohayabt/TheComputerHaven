import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import auth from "../../firebase";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { async } from "@firebase/util";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // UPDATING PROFILE
  const [displayName, setDisplayName] = useState("");
  const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);

  // SIGN IN WITH GOOGLE
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  // SIGN IN WITH EMAIL AND PASSWORD
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // SEND  EMAIL VERIFICATION
  const [sendEmailVerification, sending, verificationError] =
    useSendEmailVerification(auth);
  // NAVIGATE TO HOME
  if (user || googleUser) {
    console.log(user || googleUser);
    navigate(from, { replace: true });
  }
  if (error || googleError) {
    const notify = async (message) => await toast(message);
    notify(error?.message || error?.message);
  }
  return (
    <section>
      <div className="flex justify-center items-center h-screen">
        <div className="card w-96 bg-base-100 shadow-xl px-8 py-5">
          <h1 className="login-title text-4xl leading-15 mb-5 font-bold">
            Sign Up
          </h1>
          <form
            className="form-control  w-full max-w-xs"
            onSubmit={async (event) => {
              event.preventDefault();
              createUserWithEmailAndPassword(email, password);
              await updateProfile({ displayName });
              await sendEmailVerification(email);
            }}
          >
            <label className="label">
              <span className="label-text">ENTER YOUR NAME:</span>
            </label>
            <input
              type="text"
              placeholder="Shohayab Hasan Talha"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <label className="label">
              <span className="label-text">ENTER YOUR EMAIL:</span>
            </label>
            <input
              type="email"
              placeholder="info@example.com"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setEmail(e.target.value)}
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
            />
            <label className="label">
              <span className="label-text-alt"></span>
            </label>
            <button className="w-100 btn-full">SignUp</button>
            <div className="divider">OR</div>
            <button
              className="btn btn-active w-100 btn-secondary"
              onClick={async () => await signInWithGoogle()}
            >
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
