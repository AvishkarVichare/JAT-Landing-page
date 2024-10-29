import ProducdtCard from "./ProductCard";

export default function ProducdtMainDisplay(){

    const test = [1,3,2,4,5,6,7,8,9,10]

    return(
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex justify-center">
    <div className="flex flex-wrap -m-4 gap-3 justify-center">
    
    {
        test.map(()=>{
            return(
                <ProducdtCard></ProducdtCard>
            )
        })
    }
     
    
    </div>
  </div>
</section>
    )
}