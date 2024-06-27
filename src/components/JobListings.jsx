import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
const JobListings = ({ isHome = false }) => {
    // const [jobs, setJobs] = useState([]);
    const [popularActive, setPopularActive] = useState(true);
    const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     const fetchJobs = async () => {
    //         const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
    //         try {
    //             const res = await fetch(apiUrl);
    //             const data = await res.json();
    //             console.log(data);
    //             setJobs(data);
    //         } catch (error) {
    //             console.log("Error fetching data", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchJobs();
    // }, []);
    return (
        <section className="bg-white dark:bg-black px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-lg text-slate-400 text-center">
                    Your Dream Job
                </h2>
                <h1 className="text-5xl  text-center text-black">
                    Explore and Find <br /> your Job here
                </h1>
                <div className="flex justify-center items-center gap-x-4 py-4">
                    <div
                        className={`px-4 py-2 cursor-pointer rounded-full ${popularActive ? "bg-purple-500 text-white outline-none" : "outline-slate-200"} outline outline-1 `}
                    >
                        Popular Company
                    </div>
                    <div
                        className={`px-4 py-2 cursor-pointer rounded-full ${!popularActive ? "bg-purple-500 text-white outline-purple-700" : "outline-slate-200 hover:text-purple-500"} outline outline-1 `}
                    >
                        Recommended Jobs
                    </div>
                    <div
                        className={`px-4 py-2 cursor-pointer rounded-full ${!popularActive ? "bg-purple-500 text-white outline-purple-700" : "outline-slate-200 hover:text-purple-500"} outline outline-1 `}
                    >
                        New Jobs
                    </div>
                </div>
                {/* {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobs.map((job) => (
                            <JobListing key={job.id} job={job} />
                        ))}
                    </div>
                )} */}
            </div>
        </section>
    );
};

export default JobListings;
