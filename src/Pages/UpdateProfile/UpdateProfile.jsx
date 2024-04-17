import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleUpdate=(e)=>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    console.log(name,photo);
    updateUserProfile(name,photo)
    .then(result =>{
      console.log('profile updated');
      navigate('/')

    })
    .catch(error =>{
      console.error(error);
    })
  }


  return (
    <div className="bg-slate-200 my-10 p-10">
      <Helmet>
        <title>Real Estate|UpdateProfile</title>
      </Helmet>
      <div data-aos="flip-left" data-aos-duration='1000' className="max-w-lg rounded-xl mx-auto p-8 sm:flex sm:space-x-6 bg-white text-black border-2">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img src={user?.photoURL || 'Image Not Found'} alt="" className="object-cover object-center w-full h-full rounded bg-gray-500" />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">{user?.displayName || 'Mansur Abdullah'}</h2>

          </div>
          <div className="space-y-1 ">
            <span className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
              </svg>
              <p className="text-gray-400">{user?.email || 'Email Not Found'}</p>
            </span>
          </div>
        </div>
      </div>

      <div >
      <form onSubmit={handleUpdate} className="max-w-lg mx-auto border-2 p-5 bg-white rounded-md mt-4 space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo" name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <button className="w-full bg-green-600 p-3 mt-5 text-white font-bold text-lg">Update Profile</button>
        </div>
      </form>
      </div>
      
    </div>

  );
};

export default UpdateProfile;