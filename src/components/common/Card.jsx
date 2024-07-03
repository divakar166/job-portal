import { CiBookmark } from "react-icons/ci";
import { formatDistanceToNow, format, parseISO } from "date-fns";

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
        <div className="mx-auto mb-4 min-h-40 min-w-[20rem] max-w-[20rem] rounded-xl flex flex-col outline outline-1 outline-slate-100">
            <div className={`p-2 m-2 ${randomColorCode} flex-grow rounded-xl`}>
                <div className="flex justify-between items-center">
                    <div className="px-2 py-1 bg-white rounded-full">
                        {formatPostedOn(job.posted_on)}
                    </div>
                    <button className="px-2 py-1 bg-white rounded-full">
                        <CiBookmark className="text-2xl" />
                    </button>
                </div>
                <div className="py-2">
                    <div className="text-md">{job.company.name}</div>
                    <div className="text-2xl">{job.title}</div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                    <span className="text-gray-700 rounded-full px-2 py-1 text-sm outline outline-1 outline-slate-300">
                        {job.job_type}
                    </span>
                    {job.perks.map((perk, index) => (
                        <span
                            key={index}
                            className="text-gray-700 rounded-full px-2 py-1 text-sm outline outline-1 outline-slate-300"
                        >
                            {perk}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center px-4 py-2 bg-white flex-shrink">
                <div>
                    <div className="text-slate-500">
                        {job.salary_or_stipend} LPA
                    </div>
                    <div className="text-slate-500">{job.location}</div>
                </div>
                <div>
                    <a
                        href="#"
                        className="bg-black rounded-full text-white px-4 py-2"
                    >
                        Details
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
