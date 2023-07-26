
import Image from 'next/image'
import Header from "@/app/components/Header";
import Baniere from "@/app/components/Baniere";
import Showroom from "@/app/components/showroom";
import Matieres from "@/app/components/matieres";
import Contact from "@/app/components/contact";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <>
        <div className= "  ">
            <Header/>
            <Baniere/>
        </div>
        <Showroom/>
        <Matieres/>
        <Contact/>
        <Footer/>


    </>
  )
}
