import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Product1 from "@/components/Product1";
import Team from "@/components/Team";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Header></Header>

    <Hero></Hero>

    <Work></Work>

    <Product1></Product1>

    <Team></Team>

    <Footer></Footer>

   </>
  );
}
