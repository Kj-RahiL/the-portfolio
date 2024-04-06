import { useState } from "react";
import { Link } from "react-scroll";


const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed z-10 w-full flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
            <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                <h2>John.</h2>
            </div>

            <ul className="navbar-menu hidden md:flex items-center justify-between gap-6 text-xl text-white cursor-pointer">
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="services" smooth={true} duration={500}>
                        Services
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="testimonials" smooth={true} duration={500}>
                        Testimonials
                    </Link>
                </li>
            </ul>


            <div className="hidden md:block">
                <ul className=" cursor-pointer flex gap-2  rounded-full px-6 py-2 text-white text-xl">
                    <Link to="contact" smooth={true} duration={500}>
                        <svg className="w-4" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff">
                        </svg>
                        Contact
                    </Link>
                </ul>
            </div>

            <div onClick={() => setOpen((pv) => !pv)} className="relative flex transition-transform md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                {open && (
                    <ul className="navbar-menu z-10 gap-2 bg-[#393E46] absolute right-0 top-11 flex w-[200px] flex-col rounded-lg  ">

                        <li className="text-xl px-6 py-2 cursor-pointer hover:bg-green-700">
                            <Link to="home" smooth={true} duration={500}>
                                Home
                            </Link>
                        </li>

                        <li className="text-xl px-6 py-2 cursor-pointer hover:bg-green-700">
                            <Link to="about" smooth={true} duration={500}>
                                About
                            </Link>
                        </li>
                        <li className="text-xl px-6 py-2 cursor-pointer hover:bg-green-700">
                            <Link to="services" smooth={true} duration={500}>
                                Services
                            </Link>
                        </li>
                        <li className="text-xl px-6 py-2 cursor-pointer hover:bg-green-700">
                            <Link to="skills" smooth={true} duration={500}>
                                Skills
                            </Link>
                        </li>
                        <li className="text-xl px-6 py-2 cursor-pointer hover:bg-green-700">
                            <Link to="projects" smooth={true} duration={500}>
                                Projects
                            </Link>
                        </li>
                        <li className="text-xl px-6 py-2 cursor-pointer hover:bg-green-700">
                            <Link to="testimonials" smooth={true} duration={500}>
                                Testimonials
                            </Link>
                        </li>
                        <li className="text-xl px-6 py-2 cursor-pointer hover:bg-green-700">
                            <Link to="contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
