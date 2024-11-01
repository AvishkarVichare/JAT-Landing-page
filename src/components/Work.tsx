export default function Work(){
    return(

    //     <div className="container mx-auto px-4 py-12">
    //     <h2 className="text-3xl font-bold text-center mb-8">What we Do</h2>
    //     <div className="flex justify-center relative">
    //       <div className="w-full md:w-1/3 p-4">
    //         <div className="bg-green-100 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
    //           <img src="path-to-your-image-1.jpg" alt="Product 1" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
    //           <h3 className="text-2xl font-semibold">Bulk Orders</h3>
    //           <p className="text-gray-700 mt-2">high-quality agricultural products, including grains and cotton.</p>
    //           <a href="#" className="inline-block mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">Learn More</a>
    //         </div>
    //       </div>
    //       <div className="w-full md:w-1/3 p-4">
    //         <div className="bg-green-100 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
    //           <img src="path-to-your-image-2.jpg" alt="Product 2" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
    //           <h3 className="text-2xl font-semibold">AutoEase</h3>
    //           <p className="text-gray-700 mt-2">Mobile application which will make life of both consumer and vehicle mechanic easy</p>
    //           <a href="#" className="inline-block mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">Learn More</a>
    //         </div>
    //       </div>
      
    //       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-24 rounded-lg"></div>
    //     </div>
    //   </div>

    <div id="about" className="container mx-auto px-4 py-12">
  <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">What We Do</h2>
  <div className="flex md:flex-row flex-col justify-center relative">
    {/* Left Section */}
    <div className="w-full md:w-1/3 p-4">
      <div className="bg-green-100 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <img src="path-to-your-image-1.jpg" alt="Bulk Orders" className="w-full h-48 object-cover rounded-t-lg mb-4 border-b-4 border-green-500"/>
        <h3 className="text-2xl font-semibold text-green-700">Bulk Orders</h3>
        <p className="text-gray-700 mt-2">High-quality agricultural products, including grains and cotton.</p>
        <a href="#" className="inline-block mt-4 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-300">Learn More</a>
      </div>
    </div>

    {/* Vertical Line */}
    <div className="md:block hidden absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-40 rounded-lg"></div>

    {/* Right Section */}
    <div className="w-full md:w-1/3 p-4">
      <div className="bg-green-100 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <img src="path-to-your-image-2.jpg" alt="AutoEase" className="w-full h-48 object-cover rounded-t-lg mb-4 border-b-4 border-green-500"/>
        <h3 className="text-2xl font-semibold text-green-700">AutoEase</h3>
        <p className="text-gray-700 mt-2">A mobile application that makes life easier for consumers and vehicle mechanics.</p>
        <a href="#" className="inline-block mt-4 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-300">Learn More</a>
      </div>
    </div>
  </div>
</div>

      

    )
}