"use client";
import { TypewriterEffectSmooth, AuroraBackground } from "@/components/ui/Index";
import { TextRevealCard } from "./ui/Index";
import { motion } from "framer-motion";

function MainSection() {

    const words = [
        {
            text: "WELCOME,",
        },
        {
            text: "TO",
        },
        {
            text: "MY",
        },
        {
            text: "Portfolio.",
            className: " uppercase text-blue-500 dark:text-blue-500",
        },
    ];

    return (
        <section id="section">
            <AuroraBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 -mt-[50%] lg:-mt-0 items-center justify-center px-4"
                >

                    <div className="flex flex-col lg:mt-[5rem] items-center justify-center">
                        <TypewriterEffectSmooth words={words} />
                        <TextRevealCard
                            text="Hello, I am a Developer"
                            revealText="Hii, My name is Bishal"
                        >
                        </TextRevealCard>
                        <a href="/RESUME_BISHAL LAHA.pdf" download className="bg-blue-700 p-5 mt-8 rounded-full text-white text-[1.2rem] font-semibold duration-300 hover:bg-blue-600 hover:duration-300" >Download My Resume</a>
                        <div className="mt-5" >
                            <div className="flex lg:gap-2">
                                <p className="text-neutral-600 dark:text-red-300 text-[1.2rem] lg:text-[2rem] mt-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                                    Please, Dig Into My Universe
                                </p>
                                <a href="/#about" className="text-[2rem] lg:text-[2.5rem] cursor-pointer mt-5 lg:mt-6">🔽</a>
                            </div>
                            <hr className="border-2 rounded-[100%] border-white w-full mt-5" />
                        </div>
                    </div>
                </motion.div>
            </AuroraBackground>
            <hr className="border-2 border-slate-700" />
        </section>
    );
}

export default MainSection
