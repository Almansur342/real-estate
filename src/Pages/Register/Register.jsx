import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaEye,FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const {createUser,updateUserProfile} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleRegister = (e) =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name,email,photo,password);
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
  return (
    <div className="bg-slate-200 p-10">
       <form onSubmit={handleRegister} className="w-2/5 bg-white mx-auto p-9 my-10 space-y-3 rounded">
       <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">User Name:</span>
          </label>
          <input type="text" placeholder="User name" name="name" className="input input-bordered" required />
        </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Email:</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">photoURL
              :</span>
          </label>
          <input type="text" placeholder="photoURL
          " className="input input-bordered" name="photo" required />
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
               
               required />
            <span className="absolute bottom-3 right-4 text-xl" onClick={()=> setShowPassword(!showPassword)}>{
              showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }</span>
          </div>
          <div className="form-control">
            <button className="btn mt-6 bg-[#23BE0A] text-white text-lg mb-3 uppercase">create an account</button>
          </div>
          <Link className="flex justify-center" to="/login">Already have an account?<span className="text-[#23BE0A] ml-1">Sign in.</span></Link>
        </form>
        <ToastContainer />
    </div>
  );
};

export default Register;