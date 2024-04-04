import useFetch from "../../hooks/useFetch";

const Services = () => {
    const { data } = useFetch()
    return (
        <div id="services" className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-3 gap-2">
                {
                    data?.user?.services?.map(item => (
                        <div key={item._id} className="max-[350px] md:w-[350px] bg-slate-100/70 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md">
                            <img className="w-[350px] h-[190px] bg-gray-400 rounded-2xl" src={item?.image?.url} alt="service card" />
                            <div className="space-y-2">
                                <h2 className="text-slate-800 font-medium md:text-xl sm:text-lg ">{item?.name}</h2>
                                <p className="text-slate-800">{item?.desc}</p>
                            </div>
                            <div className="mt-5 flex justify-between items-center font-medium">
                                <h2 className="md:text-xl text-gray-800">{item?.charge}</h2>
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>

    );
};

export default Services;