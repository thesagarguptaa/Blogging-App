import React from "react";
import UserBlogs from "../Components/display/UserBlogs";
import { useState, useEffect } from "react";
import { getUserblogs } from "../Services/Operations/GetterAPI";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Spinner from "../Components/common/Spinner/Spinner";

const Myblogs = () => {
  const { token } = useSelector((state) => state.auth);
  const [Cards, setCards] = useState(null);

  const getEnrolledCourses = async () => {
    try {
      const response = await getUserblogs(token);
      setCards(response.data.update.blogs);
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
        My Blogs
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
        Cards.map((blog, index) => <UserBlogs blog={blog} index={index} />)
      )}
    </div>
  );
};

export default Myblogs;
