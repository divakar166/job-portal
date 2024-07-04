import { useState } from "react";
import RecommendedJobsSection from "./RecommendedJobsSection";
import NewJobsSection from "./NewJobsSection";

const JobListings = ({ isHome = false }) => {
    const [activeSection, setActiveSection] = useState("recommend");

    const showSection = (section) => {
        setActiveSection(section);
    };

    return (
        <section className="bg-white dark:bg-black px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-lg text-slate-400 text-center">
                    Your Dream Job
                </h2>
                {isHome && (
                    <h1 className="text-5xl text-center text-black mb-4">
                        Explore and Find <br /> your Job here
                    </h1>
                )}
                <div className="flex justify-center items-center gap-x-4 py-4">
                    <div
                        className={`px-4 py-2 cursor-pointer rounded-full ${activeSection === "recommend" ? "bg-purple-500 text-white outline-none" : "outline-slate-200"} outline outline-1 `}
                        onClick={() => showSection("recommend")}
                    >
                        Recommended Jobs
                    </div>
                    <div
                        className={`px-4 py-2 cursor-pointer rounded-full ${activeSection === "newJobs" ? "bg-purple-500 text-white outline-none" : "outline-slate-200"} outline outline-1 `}
                        onClick={() => showSection("newJobs")}
                    >
                        New Jobs
                    </div>
                </div>
                <div>
                    <>
                        {activeSection === "recommend" && (
                            <div>
                                <RecommendedJobsSection doSlice={isHome} />
                            </div>
                        )}
                        {activeSection === "newJobs" && (
                            <div>
                                <NewJobsSection doSlice={isHome} />
                            </div>
                        )}
                    </>
                </div>
            </div>
        </section>
    );
};

export default JobListings;
