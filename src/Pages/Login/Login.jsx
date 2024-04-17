import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-base-200 p-10">
      <form className="w-2/5 bg-white mx-auto p-9 my-10 space-y-3">
       
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
      </form>
    </div>
  );
};

export default Login;