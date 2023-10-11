const BASE_URL = process.env.REACT_APP_BASE_URL;

// AUTH ENDPOINTS
export const endpoints = {
  SIGNUP_API: "https://blogging-4upa.onrender.com/api/v1/signUp",
  LOGIN_API: "https://blogging-4upa.onrender.com/api/v1/login",
};

//Blog
export const blogpoints = {
  CREATEBLOG_API: "https://blogging-4upa.onrender.com/api/v1/createBlog",
  UPDATEBLOG_API: "https://blogging-4upa.onrender.com/api/v1/updateBlog",
  DELETEBLOG_API: "https://blogging-4upa.onrender.com/api/v1/deleteBlog ",
  GETALLBLOG_API: "https://blogging-4upa.onrender.com/api/v1/getAllBlogs",
  GETUSERBLOG_API: "https://blogging-4upa.onrender.com/api/v1/getUserBlog",
};
