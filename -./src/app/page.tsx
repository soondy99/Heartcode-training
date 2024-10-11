import drugs from "@/app/assets/drugs.png"
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";

export default function Home() {

  const words: string[] = ["weed", "shrooms", "coke", "ice", "crack"];

  return (

      <div className="bg-[url('/drugs1.jpeg')] bg-cover" >

      

      <div className="flex flex-col justify-center h-dvh">

        <div className="font-bold text-5xl text-center text-[#00bfff]">Don't </div>

        <div className="font-bold text-5xl text-center text-[#FFCCE5]">do </div>

        <div className="font-bold text-5xl text-center">
          
        <FlipWords words={words}/>

        </div>

        <p className="text-xl text-center text-[#FFFFCC] "> A drug a day does not always keep the doctor away!</p>



      </div>
      
      {/* <Image src={drugs} alt="" height = {300} width = {300} /> */}


    </div>
  );
}
