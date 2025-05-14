// import React, { useContext } from 'react';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { AuthContext } from '../context/AuthContext'; 

// toast.configure();

// const About = () => {
//   const { About: saveUserData } = useContext(AuthContext);

//   const formik = useFormik({
//     initialValues: {
//       bio: '',
//       location: '',
//       skills: ''
//     },
//     validationSchema: Yup.object({
//       bio: Yup.string().required('Bio is required'),
//       location: Yup.string().required('Location is required'),
//       skills: Yup.string().required('Skills are required'),
//     }),
//     onSubmit: async (values) => {
//       try {
//         const response = await axios.post("https://blog-hqx2.onrender.com/user/about", values);
//         const { user, token } = response.data;

//         saveUserData(user, token);
//         toast.success('About info updated successfully!');
//       } catch (error) {
//         console.error(error);
//         toast.error('Failed to update about info');
//       }
//     }
//   });

//   return (
//     <div className="about-form">
//       <h2>About Me</h2>
//       <form onSubmit={formik.handleSubmit}>
//         <div>
//           <label>Bio:</label>
//           <textarea
//             name="bio"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.bio}
//           />
//           {formik.touched.bio && formik.errors.bio && <div className="error">{formik.errors.bio}</div>}
//         </div>

//         <div>
//           <label>Location:</label>
//           <input
//             type="text"
//             name="location"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.location}
//           />
//           {formik.touched.location && formik.errors.location && <div className="error">{formik.errors.location}</div>}
//         </div>

//         <div>
//           <label>Skills:</label>
//           <input
//             type="text"
//             name="skills"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.skills}
//           />
//           {formik.touched.skills && formik.errors.skills && <div className="error">{formik.errors.skills}</div>}
//         </div>

//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };

// export default About;
