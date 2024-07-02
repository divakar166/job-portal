import Spinner from "./Spinner";
import { useState, useEffect } from "react";
import { jobs } from "../utils/data";
import Card from "./Card";

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
            setLoading(false);
        };
        fetchJobs();
    }, []);

    return (
        <div>
            {loading ? <Spinner /> : (
                <div className="grid grid-cols-3">
                    {jobsData.map((job, index) => (
                        <Card key={index} job={job} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default NewJobsSection;
