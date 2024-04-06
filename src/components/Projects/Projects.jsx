import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const Projects = () => {
    const { data } = useFetch();

    const [openModal, setOpenModal] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 3,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            id="projects"
            className="py-10 max-w-screen-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-center lg:text-5xl font-bold py-10">My Recent Work <span className="text-green-">Projects</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-0">
                {
                    data?.user?.projects.map((item) => (
                        <div
                            key={item._id}
                            className=" bg-slate-100/70 rounded-lg space-y-5 cursor-pointer shadow hover:shadow-lg shadow-green-700 hover:shadow-green-700"
                            onClick={() => setOpenModal(true)}>
                            <img className=" w-full bg-gray-400 rounded-xl hover:scale-x-95 hover:scale-y-105 " src={item?.image?.url} alt="service card" />
                            <div className="space-y-2 px-5 pb-5">
                                <p>
                                    {item.techStack.map((tech, i) => <span key={i} className=" text-xs md:text-sm text-gray-700 mr-2">{tech},</span>)}
                                </p>
                                <h2 className="text-slate-800 md:font-semibold lg:font-bold lg:text-2xl md:text-xl text-lg hover:tracking-wider ">{item?.title}</h2>
                            </div>
                        </div>
                    ))
                }
                {/* custom modal */}
                {
                    data?.user?.projects.map((item) => (
                        <div
                            key={item._id}
                            onClick={() => setOpenModal(false)}
                            className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-100 visible' : 'invisible opacity-0'} inset-0 bg-black/10 duration-100 `}
                        >
                            <div
                                onClick={(e_) => e_.stopPropagation()}
                                className={`absolute max-w-md rounded-sm bg-white p-3 pb-5 text-center drop-shadow-2xl ${openModal ? 'scale-100 opacity-100 duration-300' : 'scale-0 opacity-0 duration-150'} `}
                            >
                                <MdClose onClick={() => setOpenModal(false)} className="mx-auto mr-0 w-8 cursor-pointer" />
                                <h1 className="mb-2 text-xl font-semibold">{item?.title}</h1>
                                <p className="px-1 mb-3 text-sm opacity-80">{item?.description}</p>
                                <div className="flex justify-around">
                                    <Link onClick={() => setOpenModal(false)} to={`/${item?.githuburl}`} className="me-2 rounded-sm bg-green-700 px-6 py-1 text-white">Github Url</Link>
                                    <Link onClick={() => setOpenModal(false)} to={`/${item?.liveurl}`} className="me-2 rounded-sm bg-green-700 px-6 py-1 text-white">Live Url</Link>

                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>



        </motion.div>

    );
};

export default Projects;