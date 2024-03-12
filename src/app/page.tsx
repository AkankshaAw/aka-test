import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {

  return (

  <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
    <Navbar  />
    <Footer />
  </div>
    
);

}
