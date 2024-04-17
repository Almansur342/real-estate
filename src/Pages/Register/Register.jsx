import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const Register = () => {
  const {createUser,updateUserProfile} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, watch, formState: { errors },} = useForm();
  const onSubmit = data => {
    console.log(data);
    const {email,password,name,photo} = data;
    console.log(email,password,name,photo);
    if(password.length < 6){
          toast.error("password must be six character or longer");
          return;
        }else if(!/[A-Z]/.test(password)){
          toast.error('Password should have at least an uppercase');
          return;
        } else if(!/[a-z]/.test(password)){
          toast.error('Password should have at least a lowercase');
          return;
        }
     
    createUser(email,password)
    .then(result =>{
      toast.success('created successfully');
      updateUserProfile(name,photo)
      .then(()=>{
      navigate(location?.state ? location.state : '/')
      })
     
    })
    .catch(error =>{
      console.error(error);
    })
  }

  // const handleRegister = (e) =>{
  //   e.preventDefault();
  //   const form = new FormData(e.currentTarget);
  //   const name = form.get('name');
  //   const photo = form.get('photo');
  //   const email = form.get('email');
  //   const password = form.get('password');
  //   console.log(name,email,photo,password);
  //   if(password.length < 6){
  //     toast.error("password must be six character or longer");
  //     return;
  //   }else if(!/[A-Z]/.test(password)){
  //     toast.error('Password should have at least an uppercase');
  //     return;
  //   } else if(!/[a-z]/.test(password)){
  //     toast.error('Password should have at least a lowercase');
  //     return;
  //   }
 
  //   createUser(email,password)
  //   .then(result =>{
  //     toast.success('created successfully');
  //     updateUserProfile(name,photo)
  //     .then(()=>{
  //     navigate(location?.state ? location.state : '/')
  //     })
     
  //   })
  //   .catch(error =>{
  //     console.error(error);
  //   })
  // }
  return (
    <div className="bg-slate-200  max-w-md md:max-w-5xl lg:max-w-7xl p-1 md:p-10 lg:p-10">
      <Helmet>
        <title>Real Estate|Register</title>
      </Helmet>
       <form onSubmit={handleSubmit(onSubmit)} className="w-4/5 md:w-3/5 lg:w-2/5 mx-auto p-3 lg:p-9 my-5 bg-white space-y-3 rounded">
       <h1 className="text-3xl animate__animated animate__backInDown font-semibold text-center uppercase">Register</h1>
       <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">User Name:</span>
          </label>
          <input type="text" placeholder="User name" name="name" className="input input-bordered" 
          {...register("name", { required: true })}
          />
          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Email:</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered"
             {...register("email", { required: true })}
            />
             {errors.email && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">photoURL
              :</span>
          </label>
          <input type="text" placeholder="photoURL
          " className="input input-bordered" name="photo"
          {...register("photo", { required: true })}
          />
            {errors.photo && <span className="text-red-500">This field is required</span>}
        </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-semibold text-base">Password:</span>
            </label>
            <input
             type={showPassword ? "text" : "password"}
              placeholder="password"
               name="password" 
               className="input input-bordered"
               
               {...register("password", { required: true })}
               />

            <span className="absolute bottom-3 right-4 text-xl" onClick={()=> setShowPassword(!showPassword)}>{
              showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }</span>
             {errors.password && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <button className="btn mt-6 bg-[#23BE0A] text-white ext-base lg:text-lg mb-3 uppercase">create an account</button>
          </div>
          <Link className="flex justify-center text-xs lg:text-base" to="/login">Already have an account?<span className="text-[#23BE0A] ml-1">Sign in.</span></Link>
        </form>
        <ToastContainer />
    </div>
  );
};

export default Register;