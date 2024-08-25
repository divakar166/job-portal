import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { formatDistanceToNow, format, parseISO } from "date-fns";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = ({ job }) => {
    const colorCodes = [
        "bg-red-100",
        "bg-orange-100",
        "bg-lime-100",
        "bg-green-100",
        "bg-cyan-100",
        "bg-blue-100",
    ];
    const getRandomColorCode = () => {
        return colorCodes[Math.floor(Math.random() * colorCodes.length)];
    };
    const randomColorCode = getRandomColorCode();
    const formatPostedOn = (postedDate) => {
        const date = parseISO(postedDate);
        const now = new Date();
        const daysAgo = Math.floor((now - date) / (1000 * 60 * 60 * 24));
        if (daysAgo <= 3) {
            return formatDistanceToNow(date, { addSuffix: true });
        } else {
            return format(date, "d MMMM yyyy");
        }
    };
    return (
        <div className="mx-auto mb-4 min-h-[25rem] min-w-[20rem] max-w-[20rem] rounded-xl flex flex-col outline outline-1 outline-slate-300">
            <div className={`p-2 m-2 ${randomColorCode} flex-grow rounded-xl`}>
                <div className="flex justify-between items-center py-2">
                    <div className="px-4 py-2 bg-white rounded-full">
                        {formatPostedOn(job.posted_on)}
                    </div>
                    <motion.button 
                        className="px-2 py-2 bg-white rounded-full"
                        initial={{ y:20, scale:0 }}
                        animate={{ y:0, scale:1 }}
                    >
                        <BsBookmark className="text-2xl hover:text-black" />
                    </motion.button>
                </div>
                <div className="p-2">
                    <div className="text-lg">{job.company.name}</div>
                    <div className="text-2xl">{job.title}</div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2 px-1">
                    <span className="text-gray-700 rounded-full px-2 py-1 mr-2 my-1 text-md outline outline-1 outline-slate-400">
                        {job.job_type}
                    </span>
                    {job.perks.map((perk, index) => (
                        <span
                            key={index}
                            className="text-gray-700 rounded-full px-2 py-1 mr-2 my-1 text-md outline outline-1 outline-slate-400"
                        >
                            {perk}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center px-5 py-2 bg-white flex-shrink">
                <div>
                    <div className="text-slate-600">
                        {job.salary_or_stipend} LPA
                    </div>
                    <div className="text-slate-600">{job.location}</div>
                </div>
                <div>
                    <Link
                        to="/job/192"
                        className="bg-black rounded-full text-white px-4 py-2"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
