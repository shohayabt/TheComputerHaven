import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import { signOut } from "firebase/auth";
export const NavBar = () => {
  const [user] = useAuthState(auth);
  const [navbar, setnavbar] = useState(false);
  const responsiveToggle = (e) => {
    if (navbar) {
      setnavbar(false);
    } else {
      setnavbar(true);
    }
  };

  return (
    <header className=" header-section px-10">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            I'm <span>Katie</span>
          </Link>
        </div>
        <div>
          <nav className={!navbar ? "main-menu" : "show"}>
            <ul>
              <li>
                <Link to="/home">HOME</Link>
              </li>
              <li>{user ? <></> : <Link to="/login">LOGIN</Link>}</li>
              <li>
                {!user ? <></> : <Link to="/addProduct">ADD PRODUCT</Link>}
              </li>
              <li>{!user ? <></> : <Link to="/dashboard">DASHBOARD</Link>}</li>
              <li>
                {user ? (
                  <button
                    className="btn-full signout"
                    onClick={() => {
                      signOut(auth);
                      localStorage.removeItem("accessToken");
                    }}
                  >
                    SIGN OUT
                  </button>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </nav>
        </div>
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
