import img1 from '../../assets/pexels-alex-staudinger-1732414.jpg'
import img2 from '../../assets/pexels-binyamin-mellish-106399.jpg'
import img3 from '../../assets/pexels-binyamin-mellish-1396132.jpg'
import img4 from '../../assets/pexels-expect-best-323780.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Banner = () => {
  return (
    <div className="carousel w-full rounded">
  <div id="slide1" className="carousel-item relative w-full">
    <img data-aos="zoom-in" data-aos-duration = '1000' src={img1} className="w-full h-[470px] brightness-75" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    <div className='w-2/5 absolute transform -translate-y-1/2 left-[100px] top-1/2'>
      <h1 data-aos="fade-right" data-aos-duration = '1000' className='text-white text-lg md:text-2xl lg:text-3xl font-bold '>Unlock Your Dream <span className='text-white'>Home</span></h1>
      <p data-aos="fade-right" data-aos-duration = '1200' className='text-white text-xs md:text-base lg:text-lg mt-3 brightness-200'>Explore our curated collection of exquisite properties. From cozy apartments to luxurious estates, find the perfect place to call home.</p>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img data-aos="zoom-in" data-aos-duration = '1000' src={img2} className="w-full h-[450px] brightness-75" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    <div className='w-2/5 absolute transform -translate-y-1/2 left-[100px] top-1/2'>
      <h1 data-aos="fade-right" data-aos-duration = '1000' className='text-white text-lg md:text-2xl lg:text-3xl font-bold '>Invest in Your Future</h1>
      <p data-aos="fade-right" data-aos-duration = '1200' className='text-white text-xs md:text-base lg:text-lg mt-3 brightness-200'>Discover prime commercial spaces and investment properties.we have got options that fit your vision</p>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img data-aos="zoom-in" data-aos-duration = '1000' src={img3} className="w-full h-[450px] brightness-75" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    <div className='w-2/5 absolute transform -translate-y-1/2 left-[100px] top-1/2'>
      <h1 data-aos="fade-right" data-aos-duration = '1000' className='text-white text-lg md:text-2xl lg:text-3xl font-bold '>Redefine Luxury Living</h1>
      <p data-aos="fade-right" data-aos-duration = '1200' className='text-white text-xs md:text-base lg:text-lg mt-3 brightness-200'>Step into opulence with our handpicked selection of high-end properties. From sprawling estates to penthouses with panoramic views, elevate your lifestyle</p>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img data-aos="zoom-in" data-aos-duration = '1000' src={img4} className="w-full h-[450px] brightness-75" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    <div className='w-2/5 absolute transform -translate-y-1/2 left-[100px] top-1/2'>
      <h1 data-aos="fade-right" data-aos-duration = '1000' className='text-white text-lg md:text-2xl lg:text-3xl font-bold '>Your Home, Your Story</h1>
      <p data-aos="fade-right" data-aos-duration = '1200' className='text-white text-xs md:text-base lg:text-lg mt-3 brightness-200'>Explore properties that resonate with your aspirations and create memories that last a lifetime.</p>
    </div>
  </div>
</div>
  );
};

export default Banner;