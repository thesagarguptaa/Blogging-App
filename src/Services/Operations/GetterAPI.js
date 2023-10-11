import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { blogpoints } from "../apis";

const { GETALLBLOG_API, GETUSERBLOG_API } = blogpoints;

export async function getALLblogs() {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    console.log("BEFORE Calling BACKEND API FOR For All blogs");
    const response = await apiConnector("GET", GETALLBLOG_API);
    console.log("AFTER Calling BACKEND API FOR All blogs");

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response.data.resp;
  } catch (error) {
    console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error);
    toast.error("Could Not Get Enrolled Courses");
  }
  toast.dismiss(toastId);
  return result;
}

export async function getUserblogs(token) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    console.log("BEFORE Calling BACKEND API FOR For User blogs");
    const response = await apiConnector("POST", GETUSERBLOG_API, { token });
    console.log("AFTER Calling BACKEND API FOR User blogs");

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    console.log(response);

    result = response;
  } catch (error) {
    console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error);
    toast.error("Could Not User BLOGS");
  }
  toast.dismiss(toastId);
  return result;
}
