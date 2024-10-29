import heroImg from '../../public/Hero.webp'


export default function Hero() {
    const a = ""
    return (
        <section className="text-gray-600 body-font bg-green-50">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            {/* <img className="object-cover object-center rounded" alt="hero" src="/Hero.webp"/> */}
            <img className="object-cover object-center rounded" alt="hero" src="/Hero.webp"/>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">"Before They Sold Out: Secure Premium Grains, Cotton, and Bulk Commodities!"
              <br className="hidden lg:inline-block"/>
            </h1>
            <p className="mb-8 leading-relaxed">"Partner with us to ensure your business has access to the highest quality supplies. Don't let demand outpace your resources—explore our offerings today!"</p>
            <div className="flex justify-center">
              <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none text-white bg-[#a6844a] hover:bg-[#d1a65f] ease-in-out duration-300 rounded  text-[12px] md:text-base mt-1 md:mt-0">Trade</button>
             
              <button className="ml-4 inline-flex bg-gray-300 text-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Know More</button>
            </div>
            
          </div>
        </div>
      </section>
        //       <div className={`] xl:h-[100vh] ease-in-out duration-700 relative `}>
         

        //     <div className='text-white absolute top-0 bottom-0 my-auto left-0 right-0 mx-auto  z-[80] flex flex-col items-center justify-center h-fit'>

        //         <h2 className="font-[Noto] text-[2rem] lg:text-[3rem] font-bold">
        //             Rooms
        //         </h2>
        //         <h5 className='px-10 lg:p-0 lg:w-[800px] lg:text-[18px] text-center mt-6 '>
        //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam fuga beatae incidunt consequuntur vitae autem soluta aspernatur a corporis cum.
        //         </h5>
        //     </div>


        //     {/* carousel one  */}
        //     {/* <div className="embla " ref={emblaRef}>


        //         <div className="embla__container ">
        //             {
        //                 imgs.map((e, index) => {
        //                     return (
        //                         <div key={index} className="relative embla__slide flex justify-center  before:bg-[#35342a] before:absolute before:opacity-[.3] before:w-full before:h-[600px] before:block">
        //                             <img className=' object-cover object-center w-full h-[500px] lg:h-[600px]' src={e} alt="image" />
        //                         </div>
        //                     )
        //                 })
        //             }
        //         </div>
        //     </div> */}


        //     <a href='#rooms' className='absolute bottom-[-20px] xl:bottom-[50px] bg-[#a6844a] hover:bg-[#d1a65f] ease-in-out duration-300 text-white font-bold py-3 px-7 md:px-10 left-2 right-2 w-fit mx-auto text-[18px] md:text-[22px] '>
        //         Trade
        //     </a>
        // </div>

    )
}