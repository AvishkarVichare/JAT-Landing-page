// import { useState } from "react";
"use client"
import { useEffect, useState } from "react";

export default function Header(){
    // const [scrollY, setScrollY] = useState(0);
    const [blackBg, setBlackBg] = useState(false)
    const [showHead, setShowHead] = useState(true);

    const navTransition = ()=>{
        if(window.scrollY > 100){
            setBlackBg(true);
            setShowHead(false);
        }
        else{
            setBlackBg(false);
            setShowHead(true);
        }
    }


    useEffect(() => {
      window.addEventListener('scroll', navTransition);    ;
      return () => {
        window.removeEventListener('scroll', navTransition);
      }
    }, [])
    

    return(
        
// <header className=" text-gray-600 body-font  sticky top-0 z-[10] before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:bg-gray-300 before:opacity-[0.5] before:z-[9]">
    
//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//       {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//       </svg> */}
//       <img className="h-[50px] bg-gray-400 rounded-xl relative z-[12]" src="/jack-of-all-trades-high-resolution-logo-transparent.png" alt="" />
//       {/* <span className="ml-3 text-xl">JAT</span> */}
//     </a>
//     <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//       <a className="mr-5 hover:text-gray-900 relative z-[12]">HOME</a>
//       <a className="mr-5 hover:text-gray-900 relative z-[12]">ABOUT</a>
//       <a className="mr-5 hover:text-gray-900 relative z-[12]">PRODUCT</a>
//       <a className="mr-5 hover:text-gray-900 relative z-[12]">TEAM</a>
//     </nav>
//     <button className="relative z-[12] inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Contact
//       {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
//         <path d="M5 12h14M12 5l7 7-7 7"></path>
//       </svg> */}
//     </button>
//   </div>
// </header>

<header className={`fixed z-[100] ease-in-out duration-300 w-full tracking-wide	 font-[500] font-[Roboto Mono] text-white body-font opacity-[.8]  ${blackBg ? 'bg-black opacity-[.5]':'bg-gray-50'} shadow-md`}>

<div className=" mx-auto hidden md:flex flex-wrap py-2 px-10 lg:px-12 xl:px-[150px] flex-col  md:flex-row items-center relative ">
<a href='/' className=" lg:flex  title-font font-medium items-center text-gray-200 mb-4 md:mb-0">

<span className="xl:ml-3 hidden md:block lg:text-xl font-bold ">
{/* Jack of All Trades */}
<img className="h-[45px]" src="/jack-of-all-trades-high-resolution-logo-transparent.png" alt="" />
</span>
</a>
<nav className="md:ml-auto relative hidden  md:flex flex-wrap items-center text-[18px] justify-center gap-10 lg:gap-[60px]">
<a href='/' className={` hover:text-gray-900  ${!showHead?'text-white':' text-black'}`}>Home</a>
<a href='#about' className={` hover:text-gray-900  ${!showHead?'text-white':' text-black'}`}>About</a>
<a href='/gallery' className={` hover:text-gray-900  ${!showHead?'text-white':' text-black'}`}>Gallery</a>
<a href='#rooms' className={` hover:text-gray-900  ${!showHead?'text-white':' text-black'}`}>Rooms</a>
<a href='#contact' className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none  bg-[#a6844a] hover:bg-[#d1a65f] ease-in-out duration-300 rounded text-base mt-4 md:mt-0">Contcats
</a>
</nav>
</div>

{/* burger */}
{/* <div onClick={()=>openNav?setOpenNav(false):setOpenNav(true)} className={`${!showHead?'bg-black opacity-[.5]':''} flex p-2 rounded-lg md:hidden flex-col gap-[6px] absolute top-2 left-2 z-[100]`}> */}
<div  className={`${!showHead?'bg-black opacity-[.5] text-white':''} flex p-2 rounded-lg md:hidden flex-col gap-[6px] absolute top-2 left-2 z-[100]`}>

<div className='w-7 h-[2px] rounded-xl bg-white'></div>
<div className='w-7 h-[2px] rounded-xl bg-white'></div>
<div className='w-7 h-[2px] rounded-xl bg-white'></div>
</div>

{/* <nav className={`md:ml-auto relative    md:hidden justify-center text-[14px] md:text-[18px]  md:gap-[60px] before:w-full ${openNav?'before:h-[180px] h-[180px]':'before:h-[0px] h-0 '} before:transition-all before:duration-300 before:bg-black opacity-[.7] before:absolute before:top-0`}> */}
<nav className={`md:ml-auto relative    md:hidden justify-center text-[14px] md:text-[18px]  md:gap-[60px] before:w-full  before:transition-all before:duration-300 before:bg-black opacity-[.7] before:absolute before:top-0`}>

{/* <a href='/' className="">
<span className="text-[2rem]   ">Pooja Lakehouse</span>
</a> */}
{/* <div className={`relative pt-3 ${openNav?'flex':'hidden'}  gap-2 items-center flex-col `}> */}
<div className={`relative pt-3  gap-2 items-center flex-col `}>
<a href='/' className=" hover:text-gray-900 shadow-xl">Home</a>
<a href='#about' className=" hover:text-gray-900 shadow-xl">About</a>
<a href='/gallery' className=" hover:text-gray-900 shadow-xl">Gallery</a>
<a href='#rooms' className=" hover:text-gray-900 shadow-xl">Rooms</a>
<a href='#contact' className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none  bg-[#a6844a] hover:bg-[#d1a65f] ease-in-out duration-300 rounded  text-[12px] md:text-base mt-1 md:mt-0">Contcats
</a>
</div>
</nav>
</header>
    )
}