import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const About = () => {
    const { data } = useFetch()
    console.log(data?.user?.about)
    return (
        <div id="about"
            className="flex relative bg-[#121212] py-20">
            <div className="w-1/2 hidden sm:block">
                <img src={data?.user?.about?.alternateAvatars[0].url} alt='aboutImage' width='100%' height={'100%'} />
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
                            <Link className="text-sm md:text-lg md:font-bold" href='tel: +8801882261750' >+880 1882-261750</Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;