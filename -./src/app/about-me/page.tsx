"use client"

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import sunset from "@/app/assets/Sunset.jpeg"
import mountain from "@/app/assets/mountain.jpeg"
import beach from "@/app/assets/beach.jpeg"
import Image from "next/image";
import { Vortex } from "@/components/ui/vortex";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";




export default function AboutMe() {

    
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));


    return (

        <div >

            <Vortex

                
                backgroundColor="black"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">


                <div className="w-full h-full py-20">
                    <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                        About Me
                    </h2>
                    <Carousel items={cards} />
                </div>


                // Basic
                {/* <div className="flex flex-row gap-2">
                        <p className="font-bold">Name: Ah Soon</p>

                    </div>
                    <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                    <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to stay active through sports and outdoor adventure</div>
                
               
                            Hello! I am Soon
                      
                            An avid runner with a passion for coding and computing.
                            <p>Whether hitting the trails or tackling a new programming project, they love staying active and engaged with technology. </p>
                            <p>Always eager to learn and explore new challenges! </p>
                            <p> Fun Fact: This was jointly generated with ChatGPT. </p>
                      

                        <div className="flex justify-center space-x-4">

                        <Image src={sunset} alt="" height={425} width={425} className="rounded-full" />
                        <Image src={mountain} alt="" height={425} width={425} className="rounded-full" />
                        <Image src={beach} alt="" height={425} width={425} className="rounded-full" /> */}
                {/* <Image src={sunset} alt="" height={300} width={300} />
                            <Image src={mountain} alt="" height={300} width={300} /> */}

                {/* </div> */}


                

















            </Vortex >


        </div >
    );
}



















 const DummyContent = () => {
    return (
        <>
            {[...new Array(1).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                                Hello! I am Soon
                            </span>{" "}
                            An avid runner with a passion for coding and computing.
                            Whether hitting the trails or tackling a new programming project, they love staying active and engaged with technology.
                            Always eager to learn and explore new challenges!
                            Fun Fact: This was jointly generated with ChatGPT.
                        </p>
                        <Image
                            src={sunset}
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                    </div>
                );
            })}

        </>
    );
};

const data = [
    {

        title: "Outdoor",
        src: "/Sunset.jpeg",
        content: <DummyContent />,
    },
    {

        title: "Adventure",
        src: "/mountain.jpeg",
        content: <DummyContent />,
    },
    {

        title: "Relax",
        src: "/beach.jpeg",
        content: <DummyContent />,
    },
]; 

