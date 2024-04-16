import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  const [allEstate, setAllEstate] = useState(useLoaderData());
  // console.log(allEstate);
  return (
    <div className="my-6">
      <Banner></Banner>
      <div className="mt-10 bg-slate-200 p-10">
        <h1 className="text-4xl text-center text-black font-semibold mb-5">Featured Properties</h1>
        <div className="grid grid-cols-3 gap-6">
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