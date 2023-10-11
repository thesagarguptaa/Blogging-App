import React from "react";

import { getALLblogs } from "../Services/Operations/GetterAPI";
import { useState, useEffect } from "react";
import Spinner from "../Components/common/Spinner/Spinner";
const Home = () => {
  const [Cards, setCards] = useState(null);

  const getEnrolledCourses = async () => {
    try {
      const response = await getALLblogs();
      setCards(response);
    } catch (error) {
      console.log("Unable to Fetch Enrolled Courses");
    }
  };

  useEffect(() => {
    getEnrolledCourses();
  }, []);

  console.log(Cards);

  return (
    <div>
      <div className="flex justify-center items-center text-2xl font-bold  underline text-slate-800">
        ALL Blogs
      </div>

      {!Cards ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : !Cards.length ? (
        <p className="flex justify-center items-center mt-36 font-bold leading-10 underline text-[35px] text-slate-900">
          You have to create any blog
        </p>
      ) : (
        Cards.map((blog, index) => (
          <div className="flex flex-col   mt-9 bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col items-center  justify-center">
              <h2 className="text-[35px] font-bold  mb-4 underline">
                {blog.title}
              </h2>

              <p className="text-gray-600  leading-6  font-semibold">
                {blog.content}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
