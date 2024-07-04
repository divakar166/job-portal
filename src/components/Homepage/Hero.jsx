import { FaMagnifyingGlass } from "react-icons/fa6";
import { TfiAngleDoubleDown } from "react-icons/tfi";

const Hero = () => {
    return (
        <section className="bg-white dark:bg-black pt-20 mb-4">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="text-center flex justify-center items-center flex-col">
                    <h1
                        className="text-4xl font-black sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-clip-text bg-gradient-to-b from-[#555] to-[#000] dark:bg-gradient-to-b dark:from-[#fff] dark:to-[#adadad]"
                        style={{ "-webkit-text-fill-color": "transparent" }}
                    >
                        Your Dream Career Starts Here
                    </h1>
                    <p className="max-w-2xl my-4 text-xl text-[#666] dark:text-slate-200 font-normal">
                        Job hunting made easy: Get instant alerts for jobs
                        matching your skills and innovative job finder.
                    </p>
                    <div className="flex justify-center items-center mt-5">
                        <div className="mr-2 flex items-center outline outline-1 outline-slate-200 rounded-full px-4 py-2 hover:outline-slate-500 focus:outline-slate-500 dark:outline-slate-300 dark:active:outline-slate-400 focus-within:outline-slate-500 min-w-[600px]">
                            <input
                                type="text"
                                className="outline-none focus:outline-none w-full"
                                placeholder="Search for a Job"
                            />
                            <button>
                                <FaMagnifyingGlass className="ml-2 text-slate-400 hover:text-slate-600" />
                            </button>
                        </div>
                        <button className="bg-purple-500 px-4 py-2 text-white rounded-full">
                            Get Started
                        </button>
                    </div>
                    <div className="py-16 animate-bounce">
                        <TfiAngleDoubleDown className="text-4xl text-slate-400" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
