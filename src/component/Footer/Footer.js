import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase";

const Footer = () => {
  const [user] = useAuthState(auth);
  return (
    <footer className="footer px-10 py-12 bg-neutral text-neutral-content">
      <div>
        <span className="footer-title">Services</span>
        <Link to="/" className="link link-hover uppercase">
          Branding
        </Link>
        <Link to="/" className="link link-hover uppercase">
          Design
        </Link>
        <Link to="/" className="link link-hover uppercase">
          Marketing
        </Link>
        <Link to="/" className="link link-hover uppercase">
          Advertisement
        </Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to="/blog" className="link link-hover uppercase">
          BLOG
        </Link>
        <Link to="/myPortfolio" className="link link-hover uppercase">
          PORTFOLIO
        </Link>
        <Link to="/dashboard" className="link link-hover uppercase">
          DASHBOARD
        </Link>
        <Link to="/" className="link link-hover uppercase">
          {user && (
            <button
              style={{ margin: "0px" }}
              className="btn-full signout mx-0"
              onClick={() => {
                signOut(auth);
                localStorage.removeItem("accessToken");
              }}
            >
              LOG OUT
            </button>
          )}
        </Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link to="/" className="link link-hover uppercase">
          Terms of use
        </Link>
        <Link to="/" className="link link-hover uppercase">
          Privacy policy
        </Link>
        <Link to="/" className="link link-hover uppercase">
          Cookie policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
