import { useState } from "react";
import NavBar from "./Components/common/NavBar";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Myblogs from "./Pages/Myblogs";
import CreateBlog from "./Pages/CreateBlog";
import Home from "./Pages/Home";
import Update from "./Components/Update";

function App() {
  return (
    <div className="w-screen min-h-screen  bg-zinc-100 flex flex-col font-inter ">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/Myblogs" element={<Myblogs />} />
        <Route path="/CreateBlog" element={<CreateBlog />} />
        <Route path="/updateBlog" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
