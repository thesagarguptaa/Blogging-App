import React, { useState } from "react";
import { deleteblogs } from "../../Services/Operations/Butt";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Update from "../Update";

const UserBlogs = ({ blog, index }) => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [Card, setCard] = useState(false);

  const DELETEME = async () => {
    try {
      const response = await deleteblogs(token, blog._id, navigate);
      console.log(response);
    } catch (error) {
      console.log("Unable to Fetch Enrolled Courses");
    }
  };

  useEffect(() => {}, []);

  const handleUpdate = () => {
    setCard(true);
  };

  console.log("blod", blog._id);

  return (
    <div>
      <div>
        {Card ? (
          <div>
            {" "}
            <Update blogs={blog._id} />{" "}
          </div>
        ) : (
          <div className="flex flex-col   mt-9 bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col items-center  justify-center">
              <h2 className="text-[35px] font-bold  mb-4 underline ">
                {blog.title}
              </h2>
              <p className="text-gray-600  leading-6  font-semibold">
                {blog.content}
              </p>
            </div>

            <div className="mt-4 flex justify-center">
              <button
                className="bg-slate-800 hover:bg-red-800 text-white px-4 py-2  rounded-lg  mr-8"
                onClick={DELETEME}
              >
                Delete
              </button>
              <button
                className="bg-slate-800 hover:bg-blue-900 text-white px-4 py-2  rounded-lg "
                onClick={handleUpdate}
              >
                {" "}
                Update
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserBlogs;
