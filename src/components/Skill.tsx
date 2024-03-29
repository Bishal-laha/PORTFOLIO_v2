"use client"
import { BackgroundGradient, LampContainer } from "./ui/Index";
import { motion } from "framer-motion";
import { Progress } from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

function Skill() {
    return (
        <section id="skill" className="mt-[15%]">
            <h1 className="text-center text-[3rem] lg:text-[4rem] tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-800 mb-8 uppercase">My Skills</h1>
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    <div className="mt-[120%] lg:mt-[35%] flex flex-col lg:flex-row gap-5 text-white ">
                        <BackgroundGradient className="rounded-[22px] w-full p-8 h-full bg-white dark:bg-zinc-900">
                            <div className="flex flex-col gap-2 lg:gap-[3rem]">
                                <div className="grid grid-cols-6 space-x-2">
                                    <label className="text-[0.8rem] col-span-2 lg:text-[1rem]">HTML : </label>
                                    <Progress hasStripe value={70} className="col-span-4 mt-[0.8rem] lg:mt-[0.1rem]" />
                                </div>
                                <div className="grid grid-cols-6 space-x-2">
                                    <label className="text-[0.8rem] col-span-2 lg:text-[1rem]">CSS : </label>
                                    <Progress hasStripe value={70} className="col-span-4 mt-[0.8rem] lg:mt-[0.1rem]" />
                                </div>
                                <div className="grid grid-cols-6 space-x-2">
                                    <label className="text-[0.8rem] col-span-2 lg:text-[1rem]">Tailwind CSS : </label>
                                    <Progress hasStripe value={80} className="col-span-4 mt-[0.8rem] lg:mt-[0.1rem]" />
                                </div>
                                <div className="grid grid-cols-6 space-x-2">
                                    <label className="text-[0.8rem] col-span-2 lg:text-[1rem]">Javascript : </label>
                                    <Progress hasStripe value={80} className="col-span-4 mt-[0.8rem] lg:mt-[0.1rem]" />
                                </div>
                                <div className="grid grid-cols-6 space-x-2">
                                    <label className="text-[0.8rem] col-span-2 lg:text-[1rem]">React JS : </label>
                                    <Progress hasStripe value={80} className="col-span-4 mt-[0.8rem] lg:mt-[0.1rem]" />
                                </div>
                                <div className="grid grid-cols-6 space-x-2">
                                    <label className="text-[0.8rem] col-span-2 lg:text-[1rem]">Redux : </label>
                                    <Progress hasStripe value={70} className="col-span-4 mt-[0.8rem] lg:mt-[0.1rem]" />
                                </div>
                            </div>
                        </BackgroundGradient>
                        <BackgroundGradient className="rounded-[22px] w-full p-8 h-full bg-white dark:bg-zinc-900">
                            <div className="flex flex-col gap-2 lg:gap-[3rem]">
                                <div className="grid grid-cols-6 lg:grid-cols-5 space-x-2">
                                    <label className="text-[0.8rem] col-span-2 lg:col-span-1 lg:text-[1rem]">JAVA : </label>
                                    <Progress hasStripe value={90} className="col-span-4 mt-[0.8rem] lg:mt-[0.1rem]" />
                                </div>
                                <div className="grid grid-cols-6 lg:grid-cols-5 space-x-2">
                                    <label className="text-[0.8rem] col-span-2 lg:col-span-1 lg:text-[1rem]">DSA : </label>
                                    <Progress hasStripe value={80} className="col-span-4 mt-[0.8rem] lg:mt-[0.1rem]" />
                                </div>
                                <div className="grid grid-cols-6 lg;grid-cols-5 space-x-2">
                                    <label className="text-[0.8rem] col-span-2 lg:col-span-1 lg:text-[1rem]">SQL : </label>
                                    <Progress hasStripe value={80} className="col-span-4 mt-[0.8rem] lg:mt-[0.1rem]" />
                                </div>
                                <div className="grid grid-cols-6 lg:grid-cols-5 space-x-2">
                                    <label className="text-[0.8rem] col-span-2 lg:col-span-1 lg:text-[1rem]">DBMS : </label>
                                    <Progress hasStripe value={70} className="col-span-4 mt-[0.8rem] lg:mt-[0.1rem]" />
                                </div>
                            </div>

                        </BackgroundGradient>
                        <BackgroundGradient className="rounded-[22px] max-w-sm py-4 px-2 h-full bg-white dark:bg-zinc-900">
                            <div className="flex flex-wrap gap-5 justify-center ">
                                <div className="text-[1rem] mx-3 my-2">
                                    <CircularProgress value={40} size={100} color='green.400'>
                                        <CircularProgressLabel>60%</CircularProgressLabel>
                                    </CircularProgress>
                                    <p>Creativity</p>
                                </div>
                                <div className="text-[1rem] mx-3 my-2">
                                    <CircularProgress value={40} size={100} color='green.400'>
                                        <CircularProgressLabel>70%</CircularProgressLabel>
                                    </CircularProgress>
                                    <p>Communication</p>
                                </div>
                                <div className="text-[1rem] mx-3 my-2">
                                    <CircularProgress value={40} size={100} color='green.400'>
                                        <CircularProgressLabel>70%</CircularProgressLabel>
                                    </CircularProgress>
                                    <p>Problem Solving</p>
                                </div>
                                <div className="text-[1rem] mx-3 my-2">
                                    <CircularProgress value={40} size={100} color='green.400'>
                                        <CircularProgressLabel>80%</CircularProgressLabel>
                                    </CircularProgress>
                                    <p>Teamwork</p>
                                </div>
                            </div>
                        </BackgroundGradient>
                    </div>
                </motion.h1>
            </LampContainer>
        </section >
    )
}

export default Skill
