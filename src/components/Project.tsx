"use client"
import { HoverEffect } from "./ui/Index";
import { projects } from "../data/project_details"



function Project() {
    return (
        <section id="project" className="mt-[30%] lg:mt-[10%]">
            <h1 className="text-center text-[2.7rem] lg:text-[4rem] mb-8 uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-800">My Projects</h1>
            <div className="w-full relative ">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="flex flex-row flex-wrap gap-3 w-full ">
                    <div className="mx-auto px-2 lg:px-8">
                        <HoverEffect items={projects} />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Project
