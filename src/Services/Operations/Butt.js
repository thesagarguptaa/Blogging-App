import toast from "react-hot-toast";

import { apiConnector } from "../apiconnector";
import { blogpoints } from "../apis";
import { setLoading } from "../../slices/authslices";

const { DELETEBLOG_API } = blogpoints;

const UPDATEBLOG_API = "https://blogging-4upa.onrender.com/api/v1/updateBlog";

export async function deleteblogs(token, blogId, navigate) {
  const toastId = toast.loading("Loading...");
  console.log("deleteblog", token, blogId);
  try {
    console.log("BEFORE Calling BACKEND API FOR For User blogs");
    const response = await apiConnector("post", DELETEBLOG_API, {
      token,
      blogId,
    });
    console.log("AFTER Calling BACKEND API FOR User blogs");

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    console.log(response);
    navigate("/");
  } catch (error) {
    console.log("DELETEBLOG_API API ERROR............", error);
    toast.error("Could Not DELETE");
  }
  toast.dismiss(toastId);
}

export function updateBlog(title, content, ID, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      console.log(title, content, ID);
      const response = await apiConnector("POST", UPDATEBLOG_API, {
        title,
        content,
        ID,
      });

      console.log("UPDATEE_BLOG API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("UPDATE Successful");

      navigate("/");
    } catch (error) {
      console.log("UPDATE BLOG API ERROR............", error);
      toast.error("UPDATE Failed");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}
