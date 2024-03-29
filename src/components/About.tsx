"use client";
import { TextGenerateEffect, Spotlight } from "@/components/ui/Index";

const words = `Hello! I am Bishal Laha, a graduate with a Bachelor's degree in Computer Science and Engineering. I am passionate about technology and eager to embark on a journey to contribute to the field of computer science. During my academic journey, I developed a strong foundation in programming language such as Java as well as web development technologies, DBMS, algorithms and data structures, which have equipped me with the necessary skills to tackle real-world challenges in the tech industry. I am excited about the prospect of applying my knowledge and skills to create innovative solutions that make a positive impact on society. Thank you for taking the time to learn more about me.`;

function About() {
    return (
        <section id="about" className="px-10 mt-[6%]">
            <h1 className="text-center text-[3rem] lg:text-[4rem] mb-10 tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-800">ABOUT ME</h1>
            <div className="relative flex flex-col-reverse gap-6 lg:flex-row w-full  justify-center">
                <div className="w-full lg:w-[60%] lg:mr-5 text-justify">
                    <Spotlight
                        className="-top-40 left-0 "
                        fill="white"
                    />
                    <TextGenerateEffect words={words} />
                </div>
                <div className="ml-5">
                    <img src="/images/img1.jpg" alt="" height={180} width={360} className="border border-transparent rounded-full hover:rotate-6 hover:duration-300 duration-300" />
                </div>
            </div>
        </section>
    )
}

export default About
