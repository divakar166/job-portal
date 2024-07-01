import Spinner from "./Spinner";
import { useState, useEffect } from "react";
import jobs from "../utils/data";

const NewJobsSection = () => {
    const [loading, setLoading] = useState(true);
    const [jobsData, setJobsData] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            // Sort the jobs array by posted_on date in descending order and slice the first 6 jobs
            const newJobs = jobs
                .sort((a, b) => new Date(b.posted_on) - new Date(a.posted_on))
                .slice(0, 6);

            setJobsData(newJobs);
            setLoading(false); // Set loading to false after fetching the jobs
        };
        fetchJobs();
    }, []);

    return (
        <div>
            {loading ? <Spinner /> : (
                <div>
                    {jobsData.map((job, index) => (
                        <div key={index}>{job.title}</div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default NewJobsSection;
