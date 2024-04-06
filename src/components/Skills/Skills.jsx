import useFetch from "../../hooks/useFetch";

const Skills = () => {
    const { data } = useFetch();
    console.log(data?.user?.skills)
    return (
        <div id='skills' className="relative bg-cover bg-slate-50 py-20 max-w-screen-2xl mx-auto" >
        {/* <Image
            alt="Mountains"
            src={bgImage}
        /> */}
        <h2 className='text-center text-5xl font-bold py-5'>My SKills</h2>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            {/* <Image src={skillImage} alt='skills' className=' p-5'></Image> */}
            <div>
                <h2 className='text-xl font-bold p-2'>Let’s Explore My <span className='' >Skills & Experience</span></h2>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 my-8 mx-2 lg:mx-5 md:mx-0'>
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
    </div>
    );
};

export default Skills;