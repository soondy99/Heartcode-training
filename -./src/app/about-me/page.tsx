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
                                {/* Hello! */}
                            </span>{" "}

                            An avid runner, they find joy in the great outdoors, relishing the thrill of hitting the trails and exploring new landscapes. Each run is an adventure, a chance to connect with nature while pushing personal limits. Whether navigating serene forest paths or challenging mountain terrains, the experience invigorates both body and spirit.

                            </p>
                        
                    </div>
                );
            })}

        </>
    );
};

const DummyContent1 = () => {
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
                                {/* Hello! */}
                            </span>{" "}

                            Beyond running, their passion for adventure extends to coding and computing. They love tackling new projects that challenge their creativity and problem-solving skills. For them, programming is an exploration in its own right, where every line of code opens up new possibilities and learning opportunities.

                            When it’s time to unwind, they know how to relax and recharge. Whether lounging with a good book, enjoying a quiet day at home, or taking in the beauty of nature, they find balance in both activity and tranquility. This blend of adventure and relaxation fuels their drive to embrace life fully, ready for whatever comes next.
                        </p>
                        
                    </div>
                );
            })}

        </>
    );
};

const DummyContent2 = () => {
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
                                {/* Hello! */}
                            </span>{" "}

                            When it’s time to unwind, they know how to relax and recharge. Whether lounging with a good book, enjoying a quiet day at home, or taking in the beauty of nature, they find balance in both activity and tranquility. This blend of adventure and relaxation fuels their drive to embrace life fully, ready for whatever comes next.
                        </p>
                        
                    </div>
                );
            })}

        </>
    );
};


const data = [
    {
        category: "",
        title: "Outdoor",
        src: "/Sunset.jpeg",
        content: <DummyContent />,
    },
    {
        category: "",
        title: "Adventure",
        src: "/mountain.jpeg",
        content: <DummyContent1 />,
    },
    {
        category: "",
        title: "Relax",
        src: "/beach1.jpeg",
        content: <DummyContent2 />,
    },
]; 

