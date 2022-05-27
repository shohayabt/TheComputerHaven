import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import NotFound from "./component/404page/NotFound";
import AddProduct from "./component/AddProducts/AddProduct";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import { NavBar } from "./component/NavBar/NavBar";
import PrivateAuth from "./component/PrivateAuth/PrivateAuth";
import Purchase from "./component/Purchase/Purchase";
import SignUp from "./component/SignUp/SignUp";
function App() {
  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
