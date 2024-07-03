import { RiMailSendLine } from "react-icons/ri";

const SubscribeSection = () => {
    return (
        <section className="m-auto mb-10 px-6 w-full h-60">
            <div className="px-10 bg-pink-200 w-full h-full rounded-[2.5rem] rounded-tr-none flex justify-between items-center">
                <div className="pr-4">
                    <h3 className="text-md text-slate-500">
                        Let's Find your Dream Job
                    </h3>
                    <h1 className="text-3xl font-bold">
                        Ready to take your career to the next level?
                    </h1>
                    <p className="text-sm text-slate-500">
                        Our job finder website is more than just a search
                        engine. Sign up today and unlock a world of
                        possibilities!
                    </p>
                </div>
                <div className="w-1/2 ml-4">
                    <div className="flex w-full">
                        <div className="flex bg-white justify-center items-center w-full py-1 rounded-full mr-4 group outline outline-1 outline-slate-200 focus-within:outline-slate-500">
                            <RiMailSendLine className="text-xl pl-2 w-[10%]" />
                            <input
                                type="email"
                                className="px-2 py-1 rounded-lg border-none outline-none w-full"
                                placeholder="Enter your email"
                            />
                        </div>
                        <button className="bg-purple-500 text-white px-2 py-1 rounded-full focus:outline-1">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubscribeSection;
