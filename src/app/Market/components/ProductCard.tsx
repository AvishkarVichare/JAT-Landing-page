export default function ProducdtCard(){
    return(
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full  shadow-md">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/tuur.jpeg"/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Grain</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Dal</h2>
          <p className="mt-1">INR 200</p>
          <button className="flex mx-auto text-white bg-[#a6844a] hover:bg-[#d1a65f] ease-in-out duration-300 border-0 py-2 px-6 focus:outline-none  rounded">Details</button>
        </div>
      </div>
    )
}