import React, { useEffect } from "react";

const TrendingGames = ({ gameList }) => {
  useEffect(() => {
    console.log(gameList);
  }, []);
  return (
    <div>
       <h2 className="font-bold text-[50px] dark:text-white mt-5" >Trending</h2>
  <div className="hidden md:grid  md:grid-cols-3 gap-4 lg:grid-cols-4 mt-5">
    {gameList.map((item,index)=>index<4&&(
        <div className="relative group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
            <img src={item.background_image} alt=""
            className="h-[270px] rounded-lg object-cover" />
            <h2 className=" absolute bottom-0 p-3 text-white font-bold bg-black-800 text-[20px]  item-center" >{item.name}</h2>
        </div>
    ))}
  </div>
  </div>
)};

export default TrendingGames;
