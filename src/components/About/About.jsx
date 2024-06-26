import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { motion } from "framer-motion"

const About = () => {
    const { data } = useFetch()
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
            id="about"
            className=" bg-[#121212]">
            <div className="flex relative max-w-screen-2xl mx-auto mt-0 md:py-10">
                <div className="hidden sm:block w-1/2 h-3/5 ">
                    <img src={data?.user?.about?.alternateAvatars[0].url} alt='aboutImage' className="h-full w-full" />
                </div>
                <div className="space-y-8 text-gray-400 p-2 md:p-5 md:w-2/3">
                    <h2 className="text-xl">About Me</h2>
                    <p className="text-white text-2xl md:text-5xl">{data?.user?.about?.subTitle}</p>
                    <p className="text-sm md:text-xl ">{data?.user?.about?.description}</p>

                    <div className="flex justify-around">
                        <div className="flex flex-col gap-5 ">
                            <div>
                                <h4 className="text-gray-500 font-medium">Name</h4>
                                <Link className="text-sm md:text-lg md:font-bold" >{data?.user?.about?.name}</Link>
                            </div>
                            <div>
                                <h4 className="text-gray-500 font-medium">Phone Number</h4>
                                <Link className="text-sm md:text-lg md:font-bold" href={`tel:${data?.user?.about?.phoneNumber}`} >{data?.user?.about?.phoneNumber}</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 ">

                            <div>
                                <h4 className="text-gray-500 font-medium">Email</h4>
                                <Link className="text-sm md:text-lg md:font-bold" href={`tel:${data?.user?.about?.contactEmail}`} >{data?.user?.about?.contactEmail}</Link>
                            </div>
                            <div>
                                <h4 className="text-gray-500 font-medium">Social Network</h4>
                                <div className="flex gap-3 text-sm md:text-lg md:font-bold">
                                    {data?.user?.social_handles.map((item, i)=><Link key={i} to={item.url}>
                                        <img className="w-8 pt-2" src={item.image.url} alt="" />
                                        </Link>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </motion.div>
    );
};

export default About;