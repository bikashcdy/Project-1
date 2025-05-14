
// import { Field, Form, Formik } from "formik"
// import { useContext, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "./AuthContext";


// const CreateBlog = () => {
//     const [image,setImage] = useState(null);
//         const navigate = useNavigate();

//       const {user} = useContext(AuthContext);

//     const handleImageChange = (event)=>{
//        const file = event.target.files[0];
//          if(file){
//             setImage(file);
//          }
//     }

//     const handleSubmit = async(values)=>{
//         console.log(values,image,user);
//         const formData = new FormData();
//            formData.append("title",values?.title)
//            console.log(formData)
//            formData.append("content",values?.content);
//            if(image) formData.append("image",image);
//            formData.append("author",user?._id);

//           try {
//                await axios.post("https://blog-hqx2.onrender.com/blog/create",formData)
//                 navigate("/");
//           } catch (error) {
//             console.log(error)
//           }
//     }
    
//   return (
//     <div className="mt-10 ml-10">
//         <Formik
//           initialValues={{
//              title:"",
//              content:"",
//           }}
//           onSubmit={(values)=>{
//             handleSubmit(values);
//           }}
//         >
//             <Form>
//                 <label htmlFor="title" className="text-xl mr-4">Title</label>
//                 <Field type="text" name="title" placeholder="enter blog title" className="border" />
//                 <label htmlFor="title" className="text-xl mr-4">Content</label>
//                 <Field type="text" name="content" placeholder="enter blog content" className="border" />

//                 <div className="mt-4">
//                     <label htmlFor="Image">Upload blog image</label> <br />
//                       <input type="file" name="image" onChange={(event)=>handleImageChange(event)} className="border bg-amber-300" />
//                 </div>

//                 <button type="submit" className="p-2 bg-blue-500 rounded-lg text-white mt-10 cursor-pointer">Submit blog</button>
//             </Form>





//         </Formik>
//     </div>
//   )
// }

// export default CreateBlog
import { Field, Form, Formik } from "formik";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const CreateBlog = () => {
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      if (!user || !user._id) {
        setErrorMessage("Please log in to create a blog post");
        return;
      }

      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("content", values.content);
      if (image) formData.append("image", image);
      formData.append("author", user._id);

      // Log FormData contents
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      console.log("Sending request:", { title: values.title, content: values.content, image, author: user._id });

      const token = localStorage.getItem("token"); // Adjust based on storage
      await axios.post("https://blog-hqx2.onrender.com/blog/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/");
    } catch (error) {
      console.error("Error creating blog:", error);
      if (error.response) {
        console.log("Server Response:", error.response.data);
        setErrorMessage(error.response.data.error || "Failed to create blog post");
      } else {
        setErrorMessage("Network error, please try again");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-10 ml-10">
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      <Formik
        initialValues={{
          title: "",
          content: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="title" className="text-xl mr-4">
                Title
              </label>
              <Field
                type="text"
                name="title"
                placeholder="Enter blog title"
                className="border"
              />
            </div>
            <div>
              <label htmlFor="content" className="text-xl mr-4">
                Content
              </label>
              <Field
                type="text"
                name="content"
                placeholder="Enter blog content"
                className="border"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="image">Upload blog image</label>
              <br />
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                className="border bg-amber-300"
              />
            </div>
            <button
              type="submit"
              className="p-2 bg-blue-500 rounded-lg text-white mt-10 cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit blog"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateBlog;        