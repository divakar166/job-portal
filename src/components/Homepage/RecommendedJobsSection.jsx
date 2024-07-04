import Spinner from "../common/Spinner";
import { useState, useEffect } from "react";
import { jobs } from "../common/data";
import Card from "../common/Card";

const RecommendedJobsSection = ({ doSlice }) => {
    const [loading, setLoading] = useState(true);
    const [jobsData, setJobsData] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            let recommendedJobs;
            if (doSlice) {
                recommendedJobs = jobs
                    .sort((a, b) => b.applicants_count - a.applicants_count)
                    .slice(0, 6);
            } else {
                recommendedJobs = jobs.sort(
                    (a, b) => b.applicants_count - a.applicants_count,
                );
            }

            setJobsData(recommendedJobs);
            setLoading(false);
        };
        fetchJobs();
    }, []);

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                <div className="grid grid-cols-3">
                    {jobsData.map((job, index) => (
                        <Card key={index} job={job} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default RecommendedJobsSection;
