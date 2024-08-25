import Spinner from "../common/Spinner";
import { useState, useEffect, useRef } from "react";
import { jobs } from "../common/data";
import Card from "../common/Card";
import { motion,useScroll, useTransform } from "framer-motion";


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
    }, [doSlice]);

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {jobsData.map((job, index) => (
                        <Card job={job} key={index} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default RecommendedJobsSection;
