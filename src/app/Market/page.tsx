import Footer from "@/components/Footer";
import ProducdtCard from "./components/ProductCard";
import ProducdtMainDisplay from "./components/ProductMainDisplay";

export default function Market(){
    return(
        <div>
            <h2 className="text-center">MarketPlace</h2>
            <div className="font-bold">
                Filter
            </div>
            <ProducdtMainDisplay></ProducdtMainDisplay>
            <Footer></Footer>
        </div>
    )
}