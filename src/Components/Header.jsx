import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/images/Logo.jpg";
import { HiMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";


const Header = () => {
  const [toggle, setToggle] = useState(true);
  const { theme, setTheme} =useContext(ThemeContext)
  useEffect(()=>{
    console.log("Theme",theme)
  },[])

  return (
    <div className="flex item-center p-5">
      <img src={Logo} width={60} height={60} alt="Logo"  className="rounded-full" />
      <div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full  item-center ">
        <HiMagnifyingGlass className="mt-1 text-[35px]" />
        <input
          type="text"
          placeholder="Search Game"
          className="px-2 bg-transparent outline-none"
        />
      </div>
      <div>
        {theme=='light' ? (
          <HiMoon className="text-[45px] mt-2 bg-slate-200 text-black p-1 rounded-full cursor-pointer"
              onClick= {()=>{setTheme('dark');localStorage.setItem('theme','dark') }} />
        ) : (
          <HiSun className="text-[45px] mt-2 bg-slate-200 text-black p-1 rounded-full cursor-pointer"
          onClick= {()=>{setTheme('light');localStorage.setItem('theme','light')}} />
        )}
      </div>
    </div>
  );
};

export default Header;
