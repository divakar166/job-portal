import Spinner from "./Spinner";
import { useState, useEffect } from "react";
import { jobs } from "../utils/data";
import Card from "./Card";

const RecommendedJobsSection = () => {
    const [loading, setLoading] = useState(true);
    const [jobsData, setJobsData] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            // Sort the jobs array by applicants_count in descending order and slice the first 6 jobs
            const recommendedJobs = jobs
                .sort((a, b) => b.applicants_count - a.applicants_count)
                .slice(0, 6);

            setJobsData(recommendedJobs);
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

export default RecommendedJobsSection;
