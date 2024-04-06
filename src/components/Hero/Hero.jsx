import useFetch from "../../hooks/useFetch";
import { motion } from "framer-motion";

const Hero = () => {
    const { data } = useFetch()
    return (

        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01]
            }} id="home"
            className="max-w-screen-2xl mx-auto">
            <section className="flex min-h-[700px]  w-full items-center justify-center bg-white px-8">
                <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
                    <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">
                        <h1 className="lg:text-6xl sm:text-4xl text-3xl font-bold leading-tight text-gray-900">{data?.user?.about?.title}</h1>
                        <p className="lg:text-lg sm:text-base text-sm text-gray-600">
                            {data?.user?.about?.subTitle}
                        </p>
                        <div className="flex space-x-4">
                            <button className="inline-flex flex-nowrap items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90  h-10 px-4 py-2 bg-green-700  text-white">
                                Contact
                            </button>

                        </div>
                    </div>
                    <div className="relative">
                        <img src={data?.user?.about?.avatar?.url} className="relative md:h-[600px]  sm:h-[500px] h-[300px]  w-[500px] bg-gray-400 rounded-b-full object-cover" alt="user" />

                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Hero;