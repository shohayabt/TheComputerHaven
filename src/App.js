import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import NotFound from "./component/404page/NotFound";
import AddProduct from "./component/AddProducts/AddProduct";
import AddReview from "./component/AddReview/AddReview";
import Blog from "./component/Blog/Blog";
import Dashboard from "./component/Dashboard/Dashboard";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import MyOrder from "./component/MyOrder/MyOrder";
import MyProfile from "./component/MyProfile/MyProfile";
import { NavBar } from "./component/NavBar/NavBar";
import NeedAdmin from "./component/NeedAdmin/NeedAdmin";
import PrivateAuth from "./component/PrivateAuth/PrivateAuth";
import Portfolio from "./component/Protfolio/Portfolio";
import Purchase from "./component/Purchase/Purchase";
import SignUp from "./component/SignUp/SignUp";
import Users from "./component/Users/Users";
function App() {
  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/myPortfolio" element={<Portfolio></Portfolio>} />
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/product/:id"
          element={
            <PrivateAuth>
              <Purchase />
            </PrivateAuth>
          }
        ></Route>
        <Route
          path="/addProduct"
          element={
            <PrivateAuth>
              <AddProduct />
            </PrivateAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateAuth>
              <Dashboard />
            </PrivateAuth>
          }
        >
          <Route index element={<AddReview />}></Route>
          <Route
            path="/dashboard/myProfile"
            element={<MyProfile></MyProfile>}
          ></Route>
          <Route
            path="/dashboard/users"
            element={
              <NeedAdmin>
                <Users></Users>
              </NeedAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/addProduct"
            element={
              <NeedAdmin>
                <AddProduct />
              </NeedAdmin>
            }
          ></Route>
          <Route path="/dashboard/myOrder" element={<MyOrder />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
