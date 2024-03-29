"use client"


function Footer() {
    return (
        <div className="w-full">
            <hr className="border-2 border-t-sky-900" />
            <footer className="bg-black text-gray-400 py-12">
                <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 lg:px-[5rem] text-center">
                    <div className="flex flex-col items-center">
                        <h2 className="text-white text-left text-lg font-semibold mb-4">About Me</h2>
                        <img src="/images/logo3.png" alt="Logo" width={200} height={200} className="rounded-lg" />
                    </div>
                    <div>
                        <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                        <ul>
                            <li>
                                <a
                                    href="/#about"
                                    className="hover:text-white transition-colors duration-300"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#project"
                                    className="hover:text-white transition-colors duration-300"
                                >
                                    Project
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#skill"
                                    className="hover:text-white transition-colors duration-300"
                                >
                                    Skill
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#contact"
                                    className="hover:text-white transition-colors duration-300"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-white text-lg font-semibold mb-4 text-center">Follow Us</h2>
                        <div className="flex justify-center space-x-4">
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Facebook
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Twitter
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
                <p className="text-center text-xs pt-8">© 2024 My Portfolio. All rights reserved.</p>
            </footer>
        </div>
        // </div>
    )
}

export default Footer
