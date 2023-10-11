import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../Services/Operations/authAPI";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    password: "",
  });

  const { Name, email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(Name, email, password, navigate));
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-[30px] font-bold flex justify-center items-center  mb-4 text-gray-600">
          Sign In
        </h1>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Name
            </label>
            <input
              required
              type="text"
              name="Name"
              value={Name}
              onChange={handleOnChange}
              placeholder="Enter Your Name"
              className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter Your email"
              className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
