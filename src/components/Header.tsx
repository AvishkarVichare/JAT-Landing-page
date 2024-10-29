// import { useState } from "react";
"use client"
import { useEffect, useState } from "react";

export default function Header(){
    // const [scrollY, setScrollY] = useState(0);
    const [blackBg, setBlackBg] = useState(false)
    const [showHead, setShowHead] = useState(true);
    const [openNav, setOpenNav] = useState(false);

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
      <header className={` ${blackBg ? 'before:bg-black tracking-wide ease-in-out duration-300 before:opacity-50' : 'before:bg-black ease-in-out duration-300 before:opacity-80'} text-gray-600 body-font sticky top-0 z-[10] before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:z-[9]`}>
  
  <div onClick={() => openNav ? setOpenNav(false) : setOpenNav(true)} className={`flex p-2 rounded-lg md:hidden flex-col gap-[6px] absolute top-2 left-2 z-[100]`}>
    <div className='w-7 h-[2px] rounded-xl bg-white'></div>
    <div className='w-7 h-[2px] rounded-xl bg-white'></div>
    <div className='w-7 h-[2px] rounded-xl bg-white'></div>
  </div>

  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className={`h-[50px] relative z-[12] md:block hidden`} src="/jack-of-all-trades-high-resolution-logo-transparent.png" alt="" />
      <img className={`${openNav ? 'h-fit flex' : 'h-0 hidden'} h-[50px] relative z-[12]`} src="/jack-of-all-trades-high-resolution-logo-transparent.png" alt="" />
    </a>

    <nav className="md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center hidden md:flex">
      <a href="#home" className={`mr-5 ${!blackBg ? 'text-white' : 'text-black'} hover:text-gray-900 relative z-[12]`}>HOME</a>
      <a href="#about" className={`mr-5 ${!blackBg ? 'text-white' : 'text-black'} hover:text-gray-900 relative z-[12]`}>ABOUT</a>
      <a href="#product" className={`mr-5 ${!blackBg ? 'text-white' : 'text-black'} hover:text-gray-900 relative z-[12]`}>PRODUCT</a>
      <a href="#team" className={`mr-5 ${!blackBg ? 'text-white' : 'text-black'} hover:text-gray-900 relative z-[12]`}>TEAM</a>
    </nav>

    <nav className={`md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center flex flex-col gap-3 md:hidden transition-all duration-300 ease-in-out overflow-hidden ${openNav ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
      <a href="#home" className={`mr-5 ${!blackBg ? 'text-white' : 'text-white'} hover:text-gray-900 relative z-[12]`}>HOME</a>
      <a href="#about" className={`mr-5 ${!blackBg ? 'text-white' : 'text-white'} hover:text-gray-900 relative z-[12]`}>ABOUT</a>
      <a href="#product" className={`mr-5 ${!blackBg ? 'text-white' : 'text-white'} hover:text-gray-900 relative z-[12]`}>PRODUCT</a>
      <a href="#team" className={`mr-5 ${!blackBg ? 'text-white' : 'text-white'} hover:text-gray-900 relative z-[12]`}>TEAM</a>
    </nav>

    <button className={`md:block hidden relative z-[12] inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0`}>Contact</button>
    <button className={`${openNav ? 'flex' : 'hidden'} relative z-[12] inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0`}>Contact</button>
  </div>
</header>

        
// <header className={` ${blackBg? 'before:bg-black tracking-wide ease-in-out duration-300 before:opacity-[0.5]':'before:bg-black ease-in-out duration-300 before:opacity-[0.8]'} text-gray-600 body-font  sticky top-0 z-[10] before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0   before:z-[9] `}>



// <div onClick={()=>openNav?setOpenNav(false):setOpenNav(true)} className={` flex p-2 rounded-lg md:hidden flex-col gap-[6px] absolute top-2 left-2 z-[100]`}>

// <div className='w-7 h-[2px] rounded-xl bg-white'></div>
// <div className='w-7 h-[2px] rounded-xl bg-white'></div>
// <div className='w-7 h-[2px] rounded-xl bg-white'></div>
// </div>

    
//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//     <img className={` h-[50px] relative z-[12] md:block hidden`} src="/jack-of-all-trades-high-resolution-logo-transparent.png" alt="" />
//       <img className={`${openNav?'h-fit flex':'h-0 hidden'} h-[50px] relative z-[12]`} src="/jack-of-all-trades-high-resolution-logo-transparent.png" alt="" />
//     </a>
//     <nav className="md:ml-auto md:mr-auto  flex-wrap items-center text-base justify-center hidden md:flex">
//       <a className={`mr-5  ${!blackBg?'text-white':'text-black'} hover:text-gray-900 relative z-[12]`}>HOME</a>
//       <a className={`mr-5  ${!blackBg?'text-white':'text-black'} hover:text-gray-900 relative z-[12]`}>ABOUT</a>
//       <a className={`mr-5  ${!blackBg?'text-white':'text-black'} hover:text-gray-900 relative z-[12]`}>PRODUCT</a>
//       <a className={`mr-5  ${!blackBg?'text-white':'text-black'} hover:text-gray-900 relative z-[12]`}>TEAM</a>
//     </nav>


//     <nav className={`${openNav?'h-fit flex':'h-0 hidden'} md:ml-auto md:mr-auto  flex-wrap items-center text-base justify-center flex flex-col gap-3 md:hidden ease-in-out duration-300`}>
//       <a className={`mr-5  ${!blackBg?'text-white':'text-white'} hover:text-gray-900 relative z-[12]`}>HOME</a>
//       <a className={`mr-5  ${!blackBg?'text-white':'text-white'} hover:text-gray-900 relative z-[12]`}>ABOUT</a>
//       <a className={`mr-5  ${!blackBg?'text-white':'text-white'} hover:text-gray-900 relative z-[12]`}>PRODUCT</a>
//       <a className={`mr-5  ${!blackBg?'text-white':'text-white'} hover:text-gray-900 relative z-[12]`}>TEAM</a>
//     </nav>

//     <button className={` md:block hidden relative z-[12] inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0`}>Contact</button>
//     <button className={`${openNav?'h-fit flex':'h-0 hidden'} relative z-[12] inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0`}>Contact</button>
//   </div>
// </header>

    )
}