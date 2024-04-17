import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineCheck } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Details = () => {
  const { id } = useParams();
  const estateDetails = useLoaderData();
  const [matched, setMatched] = useState({});

  useEffect(() => {
    if (estateDetails) {
      const singleDetails = estateDetails.find(item => item.id == id);
      setMatched(singleDetails);
    }
  }, [estateDetails, id]);

  // console.log(matched);
  const { image, estate_title, segment_name, price, status, area, facilities, location, description } = matched || {};
  return (
    <div className="my-10 bg-slate-200 p-10">
      <Helmet>
        <title>Real Estate|Details</title>
      </Helmet>
      <div>
        <h1 className="text-3xl text-[#23BE0A] font-semibold my-2">{estate_title}</h1>
        <div className='flex items-center gap-1 text-lg mb-5'>
          <IoLocationOutline />
          {location}
        </div>
        <img className="w-[1150px] mx-auto rounded h-[470px] object-cover" src={image} alt="" />
        <div className="mt-9 bg-white p-7">
          <h1 className="text-2xl font-semibold">Overview:</h1>
          <div className="flex justify-around">
          <p className="font-medium text-lg">Type: <span className="text-[#131313B3]">{segment_name}</span></p>
          <p className="font-medium text-lg">Price: <span className="text-[#131313B3]">{price}</span></p>
          <p className="font-medium text-lg">Area: <span className="text-[#131313B3]">{area}</span></p>
          <p className="font-medium text-lg">Purpose: <span className="text-[#131313B3]">For {status}</span></p>
          </div>
          <h1 className="text-2xl font-semibold mt-4">Features:</h1>
          <div className="flex gap-16 ml-16 text-lg">
            <div className="flex items-center gap-1">
            <AiOutlineCheck />
            <p>{facilities==undefined ? 'undefined' : `${facilities[0]}`}</p>
            </div>
            
            <div className="flex items-center gap-1">
            <AiOutlineCheck />
            <p>{facilities==undefined ? 'undefined' : `${facilities[1]}`}</p>
            </div>
            <div className="flex items-center gap-1">
            <AiOutlineCheck />
            <p>{facilities==undefined ? 'undefined' : `${facilities[2]}`}</p>
            </div>
          </div>
          <hr className="my-6" />
          <h1 className="text-2xl font-semibold mt-4">Description:</h1>
          <p className="ml-10 text-[#131313B3] text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;