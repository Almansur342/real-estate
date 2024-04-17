import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const Login = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const { signIn} = useContext(AuthContext);
  const handleSignIn = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    signIn(email,password)
    .then(result =>{
      toast.success("Login successfully");
      console.log(result.user);
      navigate(location?.state ? location.state : '/')
      // navigate after login
      // navigate(location?.state ? location.state : '/')
    })


    .catch(error =>{
      console.error(error);
    })
  }
  return (
    <div className="bg-slate-200 p-10">
      <form onSubmit={handleSignIn} className="w-2/5 bg-white mx-auto p-9 my-10 space-y-3 rounded">
       
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Email:</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Password:</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <button className="btn mt-6 bg-[#23BE0A] text-white text-lg mb-3 uppercase">Sign In</button>
        </div>
        <Link className="flex justify-center" to="/register">New here? <span className="text-[#23BE0A] ml-1">Create an account</span></Link>
        <div className="divider">OR</div>
        <div className="justify-around flex gap-5">
        <button className="shadow-2xl bg-lime-200 px-6 rounded flex items-center gap-2 text-lg font-semibold py-2"><FcGoogle />Google</button>
         <button className="bg-blue-500 px-6 rounded text-white flex gap-2 font-semibold items-center py-2"><FaGithub />
 Github</button>
        </div>
         
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;