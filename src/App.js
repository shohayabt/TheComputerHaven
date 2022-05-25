import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./component/404page/NotFound";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import { NavBar } from "./component/NavBar/NavBar";
import SignUp from "./component/SignUp/SignUp";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
