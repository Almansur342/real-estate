import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
const Cards = ({estate}) => {
  console.log(estate);
  const {image,estate_title,segment_name,price,status,area,facilities,location} = estate;
  return (
  <div className="card shadow-2xl bg-white p-6">
  <figure className='relative'>
    <img className='h-56 w-full object-cover' src={image} alt="Shoes" />
    <h1 className='absolute bottom-0 right-0 px-6 font-semibold text-lg text-white bg-[#23BE0A] rounded py-1 glass'>{status}</h1>
    </figure>
  <div className="">
    <h2 className="text-xl text-[#23BE0A] font-semibold my-2">{estate_title}</h2>
    <p className='text-lg font-medium'>#{segment_name}</p>
    <div className='flex items-center gap-1'>
    <IoLocationOutline />
     {location}
    </div>
    <hr className='my-4' />
    <div className='flex justify-between mb-4'>
       <div>{area}</div>
       <div>{price}</div>
    </div>
    <div className='mb-4'>
      <h1 className='text-lg font-medium'>Facilities:</h1>
      <li className='ml-5'>{facilities[0]}</li>
      <li className='ml-5'>{facilities[1]}</li>
      <li className='ml-5'>{facilities[2]}</li>
    </div>
    <div className="card-actions">
    <button className="px-6 font-semibold text-xl text-white bg-[#23BE0A] rounded py-2">View Property</button>
    </div>
  </div>
</div>
  );
};

export default Cards;
Cards.propTypes = {
  estate:PropTypes.object,
}