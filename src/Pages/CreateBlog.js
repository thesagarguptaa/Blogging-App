import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createBlog } from "../Services/Operations/authAPI";
import { useSelector } from "react-redux/es/hooks/useSelector";

const CreateBlog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const { title, content } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(createBlog(title, content, token, navigate));
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-[30px] font-bold flex justify-center items-center  mb-4 text-gray-600">
          New Blog
        </h1>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 font-bold">
              Title
            </label>
            <input
              required
              type="text"
              name="title"
              value={title}
              onChange={handleOnChange}
              placeholder="Enter Your Title"
              className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-600  font-bold">
              Content
            </label>
            <textarea
              required
              name="content"
              value={content}
              onChange={handleOnChange}
              className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 h-24"
            />
            {/* <input
              type="text"
              name="content"
              placeholder="Enter Your content"
              className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 h-24"
            /> */}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 w-full"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
