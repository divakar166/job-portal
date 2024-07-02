import { colorCodes } from "../utils/data";
import { CiBookmark } from "react-icons/ci";

const Card = ({job}) => {
    const getRandomColorCode = () => {
        return colorCodes[Math.floor(Math.random() * colorCodes.length)];
    };
    const randomColorCode = getRandomColorCode();
    return (
        <div className="mx-20 mb-4 min-h-28 outline outline-1 outline-slate-200 max-w-[18rem] rounded-xl">
            <div className={`p-2 ${randomColorCode}`} >
                <div className="flex justify-between items-center">
                    <div> {job.posted_on} </div>
                    <div><CiBookmark /></div>
                </div>
                <div>
                    <div>{job.company.name}</div>
                    <div>{job.title}</div>
                </div>
                <div>
                     {job.job_type} {job.perks.map((perk,index) => (
                        <div key={index}>{perk}</div>
                     ))}
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <div>{job.salary_or_stipend} LPA</div>
                    <div>{job.location}</div>
                </div>
                <div><a href="#" className="bg-black rounded-full text-white px-4 py-2">Details</a></div>
            </div>
        </div>
    )
};
export default Card;