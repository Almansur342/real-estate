import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [allEstate, setAllEstate] = useState(useLoaderData());
  // console.log(allEstate);
  return (
    <div className="my-6">
      <Helmet>
        <title>Real Estate|Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="mt-10 bg-slate-200 p-10">
        <h1 className="text-4xl animate__animated animate__backInLeft text-center text-black font-semibold mb-5">Featured Properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          allEstate.map(estate => <Cards
           key={estate.id}
           estate={estate}
           ></Cards>)
        }
        </div>
      </div>
    </div>
  );
};

export default Home;