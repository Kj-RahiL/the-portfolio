import useFetch from "../../hooks/useFetch";
import skillImage from '../../assets/skills.png'
import { motion } from "framer-motion"

const Skills = () => {
    const { data } = useFetch();
    console.log(data?.user?.skills)
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 3,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            id='skills'
            className="relative bg-cover bg-slate-50 py-20 max-w-screen-2xl mx-auto" >
            <h2 className='text-center text-5xl font-bold py-5'>My SKills</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <img src={skillImage} alt='skills' className=' p-3 my-auto h-3/4 w-full '></img>
                <div className="col-span-2">
                    <h2 className='text-xl font-bold p-2'>Let’s Explore My <span className='text-green-800' >Skills & Experience</span></h2>
                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-5 my-8 mx-2 lg:mx-5 md:mx-0'>
                        {
                            data?.user?.skills.map(item => <div key={item.id} className="card bg-base-100 shadow shadow-green-700 border-2 hover:border-green-500">
                                <figure className="px-8 pt-8 w-28 mx-auto">
                                    <img src={item?.image?.url} alt='skills' className="rounded-xl" />
                                </figure>
                                <div className=" text-center mt-5 pb-3">
                                    <h2 className=" ">{item.name}</h2>
                                    <button className="px-5 py-1 bg-base-300 rounded bg-green-300 text-gray-700 hover:text-black">{item.percentage}%</button>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;