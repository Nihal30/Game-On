import React, { useEffect, useState } from "react";

import GlobalApi from "../Services/GlobalApi";



function GenreList({genereId,selectedGenresName}) {

  const [genreList,setGenreList]=useState([])
  const [activeIndex,setActiveIndex]=useState(0)
  useEffect(()=>{
      getGenreList();
  },[])
  const getGenreList=()=>{
      GlobalApi.getGenreList.then((resp)=>{
          console.log(resp.data.results);
          setGenreList(resp.data.results);
      })
  }
return (
  <div className='px-6'>
      <h2 className='text-[40px] font-bold dark:text-white'>Genre</h2>
      {genreList.map((item,index)=>(
          <div 
          onClick={()=>{setActiveIndex(index);genereId(item.id);
              selectedGenresName(item.name)}}
          className={`flex gap-2 items-center mb-2 cursor-pointer
          hover:bg-gray-300 p-2 group
          rounded-lg hover:dark:bg-gray-600 transition-all duration-300 ease-in-out cursor-pointer
          ${activeIndex==index?"bg-gray-300 dark:bg-gray-600":null}`}>
              <img src={item.image_background} 
              className={`w-[100px] h-[100px] 
              object-cover rounded-lg group-hover:scale-110 transition-all
              ease-out duration-300 ${activeIndex==index?"scale-105":null}`}/>
              <h3 className={`dark:text-white text-[30px]
              group-hover:font-bold p-3 hover:scale-110 transition-all
              ease-out duration-300 ${activeIndex==index?"font-bold":null}`}>{item.name}</h3>
          </div>
      ))}
  </div>
)
}

export default GenreList
