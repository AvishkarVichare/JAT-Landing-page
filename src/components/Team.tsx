export default function Team(){
    return(
        <section id="team" className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">...........</p>
    </div>
    <div className="flex justify-center flex-wrap -m-2">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full ">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:scale-105 transition-transform duration-300 hover:bg-green-100">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Name1</h2>
            <p className="text-gray-500">UI Designer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:scale-105 transition-transform duration-300 hover:bg-green-100">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Name 2</h2>
            <p className="text-gray-500">CTO</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:scale-105 transition-transform duration-300 hover:bg-green-100">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Name 3</h2>
            <p className="text-gray-500">Founder</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:scale-105 transition-transform duration-300 hover:bg-green-100">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">John Doe</h2>
            <p className="text-gray-500">DevOps</p>
          </div>
        </div>
      </div>
   
    
     
    </div>
  </div>
</section>
    )
}