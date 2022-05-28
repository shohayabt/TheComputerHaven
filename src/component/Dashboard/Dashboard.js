import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="dashboard px-10 py-12">
      <div className="dashboard">
        <div class="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content">
            <label
              for="my-drawer-2"
              class="btn-full signout  drawer-button lg:hidden"
            >
              Open drawer
            </label>
            <div className="title">
              <h1> WELCOME TO DASHBOARD</h1>
            </div>
            <Outlet />
          </div>
          <div class="drawer-side">
            <label for="my-drawer-2" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
              {/* <!-- Sidebar content here --> */}
              <li>
                <Link to="/dashboard/myProfile">MY PROFILE</Link>
              </li>
              <li>
                <Link to="/dashboard">ADD REVIEW</Link>
              </li>
              <li>
                <Link to="/dashboard/users">ALL USERS</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
