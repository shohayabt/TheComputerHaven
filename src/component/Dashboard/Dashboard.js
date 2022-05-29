import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <section className="dashboard px-10 py-12">
      <div className="dashboard">
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              for="my-drawer-2"
              className="btn-full signout  drawer-button lg:hidden"
            >
              Open drawer
            </label>
            <div className="title">
              <h1> WELCOME TO DASHBOARD</h1>
            </div>
            <Outlet />
          </div>
          <div className="drawer-side">
            <label for="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
              <li>
                <Link to="/dashboard/myProfile">MY PROFILE</Link>
              </li>
              {!admin && (
                <li>
                  <Link to="/dashboard">ADD REVIEW</Link>
                </li>
              )}
              <li>
                <Link to="/dashboard/myOrder">MY ORDER</Link>
              </li>
              {admin && (
                <li>
                  <Link to="/dashboard/users">ALL USERS</Link>
                </li>
              )}
              {admin && (
                <li>
                  <Link to="/dashboard/addProduct">ADD PRODUCT</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
