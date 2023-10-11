const Blog = require("../model/Blog");
const User = require("../model/User");

//create a Blog
exports.createBlog = async (req, res) => {
  try {
    console.log("here is my create blog ", req);
    const { title, content } = req.body;
    console.log("fetch data", title, content);
    console.log(req.user.id);

    const userID = req.user.id;
    console.log(userID);

    //validation
    if (!title || !content) {
      return res.json({
        success: false,
        message: "Enter all Fields",
      });
    }
    console.log("validation ");

    //check user exist or not
    const user = User.findById({ userID });
    console.log("user find");

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User didnot exist ",
      });
    }

    const response = await Blog.create({
      title,
      content,
    });

    console.log("blog created", response);

    const update = await User.findByIdAndUpdate(
      { _id: userID },
      {
        $push: {
          blogs: response._id,
        },
      },
      { new: true }
    );

    console.log("user updated", update);
    res.status(200).json({
      success: true,
      response,
      update,
      message: "blog Created Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create blog",
      error: error.message,
    });
  }
};

//Update a Blog
exports.updateBlog = async (req, res) => {
  try {
    console.log("update handler");
    console.log(req);
    const { title, content } = req.body;
    const BlogID = req.body.ID;
    console.log(title, content, BlogID);

    if (!BlogID) {
      return res.status(400).json({
        success: false,
        message: "ID didnot ",
      });
    }

    const update = await Blog.findByIdAndUpdate(
      BlogID,
      {
        title,
        content,
      },

      { new: true }
    );

    res.status(200).json({
      success: true,
      update,
      message: "blog Update Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to update blog",
      error: error.message,
    });
  }
};

//delete blg

exports.deleteBlog = async (req, res) => {
  try {
    console.log(" i am delete");
    console.log(req.body.blogId);
    const blogID = req.body.blogId;

    const userID = req.user.id;

    console.log(blogID, userID);

    await User.findByIdAndUpdate(userID, {
      $pull: {
        blogs: blogID,
      },
    });

    const response = await Blog.findByIdAndDelete({
      _id: blogID,
    });

    if (!response) {
      return res
        .status(404)
        .json({ success: false, message: "blog not found" });
    }

    return res.status(200).json({
      success: true,
      message: "blog deleted",
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "blog didnot deleted ",
    });
  }
};

//getUserblog
exports.getUserBlog = async (req, res) => {
  try {
    //fetch data

    console.log("i am in handler");
    console.log(req);

    const userID = req.user.id;
    console.log(userID);

    //fetch blogs
    const update = await User.findById(userID).populate("blogs").exec();

    return res.status(200).json({
      success: true,
      message: " get blogs",
      update,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "did not fetched",
    });
  }
};

//getAllBlogs
exports.getAllBlogs = async (req, res) => {
  try {
    let resp = await Blog.find({});

    return res.status(200).json({
      success: true,
      resp,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "code error",
    });
  }
};
