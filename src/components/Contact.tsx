"use client"
import { Card, CardBody } from "@chakra-ui/react"
import { Form } from "./Index"
import { Boxes } from "./ui/Index"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";



function Contact() {
    return (
        <section id="contact">
            <hr className="border-2 border-t-sky-900" />
            <div className="relative w-full pb-[190%] lg:pb-[10%] overflow-hidden bg-slate-900 flex flex-col items-center justify-center  rounded-lg">

                <div className="absolute inset-0 w-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none ">
                    <h1 className="text-center text-[2.7rem] lg:text-[4rem] mb-8 uppercase mt-8 tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-800 ">Contact me</h1>
                </div>
                <Boxes />
                <div className="w-full mt-[40%] lg:mt-[15%] ml-[15%] lg:ml-[30%]">
                    <div>
                        <div className="lg:w-[300px] w-[200px] h-[200px] lg:h-[300px] rounded-[100%] ml-[14%] lg:ml-0 p-3 bg-slate-100 relative">
                            <img src="/images/logo1.png" className="w-full h-full rounded-[100%]" alt="" />
                        </div>
                        <div className="flex flex-col gap-3 -mt-3">
                            <Link href="https://github.com/Bishal-laha" target="_blank">
                                <Card maxW={300} minH={150}>
                                    <CardBody>
                                        <div className="text-[3rem] cursor-pointer text-red-800"><FaGithub /><span className="mt-5 text-[1.9rem] font-bold">Connect With Me</span></div>
                                    </CardBody>
                                </Card>
                            </Link>
                            <Link href="https://www.linkedin.com/in/bishal-laha-b72806204" target="_blank">
                                <Card maxW={300} minH={150}>
                                    <CardBody>
                                        <div className="text-[3rem] cursor-pointer text-red-800"><FaLinkedin /><span className="mt-5 text-[1.9rem] font-bold">Connect With Me</span></div>
                                    </CardBody>
                                </Card>
                            </Link>
                            <Link href="#">
                                <Card maxW={300} minH={150}>
                                    <CardBody>
                                        <div className="text-[3rem] cursor-pointer text-red-800"><FaInstagram /><span className="mt-5 text-[1.9rem] font-bold">Connect With Me</span></div>
                                    </CardBody>
                                </Card>
                            </Link>
                        </div>
                    </div>
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default Contact
