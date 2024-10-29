export default function Product1(){
    return(
        <section id="product" className="flex items-center bg-green-50 md:items-start flex-col-reverse md:flex-row justify-between pt-[0px] pb-10 md:pt-[5px] ">
    <div className=" md:pl-[80px] sm:px-0 xl:pl-[150px] flex items-center md:items-start flex-col w-[300px] md:w-[500px] lg:w-[700px]  ">

        <div className="mb-10">
            <img className="w-[50px] md:w-[80px] " src="assets/paytm-upi-img.png" alt=""/>
        </div>
        <div>
            <h1 className="text-[2rem] md:text-[2.3rem] lg:text-[3rem] xl:text-[3.4rem] font-[700] ">
                AutoEase
            </h1>
            <p className=" md:w-[15px] lg:text-[18px] xl:text-[21px]  text-gray-800 md:w-[350px] lg:w-[500px] ">
            By bridging the gap between consumers and mechanics, our app enhances communication, improves service efficiency, and ultimately makes vehicle maintenance easier and more accessible for everyone. Join us in transforming the way we care for our vehicles!
            </p>
            <button className="bg-black text-[15px] md:text-base text-white flex pl-6 md:pl-7 pr-4 md:pr-4 rounded-[30px] py-3 mt-10 group hover:text-black hover:bg-white border-2 border-black ease-in duration-[100ms]	">
                Download  App
                <img className="w-[23px] md:w-[30px] group-hover:invert-[100%]" src="assets/apple.png" alt=""/>
                <img className="w-[23px] md:w-[30px] group-hover:invert-[100%]" src="/play.png" alt=""/>
            </button>
        </div>
    </div>

    <div className="w-[200px] h-[210px] md:w-[350px] lg:w-[520px] " >
        <img className="right-0 absolute md:static w-[200px] md:w-[350px] lg:w-[520px] " src="assets/hero-paytm.png" alt=""/>
    </div>
</section>
    )
}