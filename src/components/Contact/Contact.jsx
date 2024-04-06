import { FaPhoneAlt } from "react-icons/fa"
import { GiHouse } from "react-icons/gi";
import { MdEmail } from "react-icons/md";


const Contact = () => {
    return (
        <div id="contact"
            className="   bg-[#121212]"
        >
            <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 py-24 gap-4 relative">
                <div className="from-primary-900 to-transparent rounded-full z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
                <div className="z-10 p-5">
                    <h5 className="text-xl font-bold text-white my-2">
                        Let&apos;s Connect
                    </h5>
                    <div className="flex flex-col gap-10">
                        <div className='flex gap-5 items-center mt-10'>
                            <FaPhoneAlt className="text-2xl lg:text-4xl text-white" />
                            <div>
                                <h2 className="text-white text-2xl font-semibold">Phone Number</h2>
                                <p className='text-gray-400'>+91-9212321321</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <MdEmail className="text-2xl lg:text-4xl text-white" />
                            <div>
                                <h2 className="text-white text-2xl font-semibold">Email</h2>
                                <p className='text-gray-400'>portfolio3@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <GiHouse className="text-2xl lg:text-4xl text-white" />
                            <div>
                                <h2 className="text-white text-2xl font-semibold">Address</h2>
                                <p className='text-gray-400'>Los Angeles , America</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-2">
                    <form className="flex flex-col" >
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Name
                            </label>
                            <input
                                name="name"
                                type="text"
                                id="name"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="text-white block mb-2 text-sm font-medium"
                            >
                                Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="jhondoe@google.com"
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-green-700 hover:bg-green-900 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;