import React from "react";
import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import { signOut } from "firebase/auth";
export const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);

  const [navbar, setnavbar] = useState(false);
  const responsiveToggle = (e) => {
    if (navbar) {
      setnavbar(false);
    } else {
      setnavbar(true);
    }
  };

  return (
    <header className="header-section">
      <div className="container d-flex-b">
        <div className="logo">
          <Link to="/">
            CAR <span>DEALER</span>
          </Link>
        </div>
        <nav className={!navbar ? "main-menu" : "show"}>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li>{!user ? <></> : <Link to="/addProduct">ADD PRODUCT</Link>}</li>
            <li>{!user ? <></> : <Link to="/myitems">MY ITEMS</Link>}</li>
            <li>{!user ? <></> : <Link to="/management">MANAGEMENT</Link>}</li>
            <li>{user ? <></> : <Link to="/login">LOGIN</Link>}</li>
            <li>
              {user ? (
                <button className="btn signout" onClick={() => signOut(auth)}>
                  SIGN OUT
                </button>
              ) : (
                ""
              )}
            </li>
          </ul>
        </nav>
        <div className="menuToggleBar" onClick={responsiveToggle}>
          {!navbar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </div>
    </header>
  );
};
