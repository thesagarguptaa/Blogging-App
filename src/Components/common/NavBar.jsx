import React from "react";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import image from "../../assets/image.png";
import { logout } from "../../Services/Operations/authAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <div className="flex h-14 items-center justify-center border-b-[1px] bg-slate-700 ">
      <div className="flex w-11/12 max-w-maxContent items-center  justify-between">
        {/* Image */}
        <Link to="/">
          <img
            src={image}
            width={60}
            height={40}
            className="  hover:translate-y-5   lg:w-[60px]  lg:h-[60px] w-[30px]  h-[30px]  transition-all duration-200  "
            alt="here is my page"
          />
        </Link>

        {/* Login/SignUp/Dashboard */}

        <div className="flex gap-x-4 items-center">
          {token === null && (
            <Link to="/login">
              <button className="border border-black  px-[12px] py-[8px] hover:translate-y-5  hover:bg-slate-500 transition-all duration-200  rounded-lg">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="border border-black  px-[12px] py-[8px] hover:translate-y-5   hover:bg-slate-500 transition-all duration-200  rounded-lg ">
                Sign Up
              </button>
            </Link>
          )}

          {token !== null && (
            <Link to="/Myblogs">
              <button className="border border-black  px-[12px] py-[8px] hover:translate-y-5  hover:bg-slate-500 transition-all duration-200 rounded-lg ">
                My Blogs
              </button>
            </Link>
          )}
          {token !== null && (
            <Link to="/CreateBlog">
              <button className="border border-black  px-[12px] py-[8px] hover:translate-y-5  hover:bg-slate-500 transition-all duration-200 rounded-lg ">
                Create Blog
              </button>
            </Link>
          )}
          {token !== null && (
            <button
              onClick={handleLogout}
              className="border border-black  px-[12px] py-[8px] hover:translate-y-5  hover:bg-slate-500 transition-all duration-200 rounded-lg"
            >
              LogOut
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
