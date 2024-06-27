import { Link } from 'react-router-dom';
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const JobListing = ({job}) => {
    const [showFullDesc, setShowFullDesc] = useState(false);
    let description = job.description
    if(!showFullDesc){
        description = description.substring(0,90) + '...';
    }
  return (
    <div className="outline-slate-1 dark:outline-slate-1 dark:hover:outline-white-2 hover:outline-black-1 rounded-xl shadow-md relative h-full">
        <div className="p-4">
            <div className="mb-6">
                <div className="text-slate-500 dark:text-slate-200 my-2">{job.type}</div>
                <h3 className="text-xl font-bold dark:text-white">{job.title}</h3>
            </div>
            <div className="mb-5 text-black dark:text-white">{description}</div>
            <button 
                className="text-neutral-500 dark:text-slate-400 dark:hover:text-slate-200 mb-5 hover:text-neutral-700"
                onClick={()=>setShowFullDesc((prevState)=>!prevState)}
            >
                {showFullDesc ? 'Less' : 'More'}
            </button>
            <h3 className="text-black dark:text-white mb-2">{job.salary} / Year</h3>
            <div className="border border-gray-100 mb-5"></div>
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="text-slate-700 dark:text-slate-300 mb-3">
                    <FaMapMarkerAlt className="inline text-lg mb-1 mr-1" />
                    {job.location}
                </div>
                <Link to={`/job/${job.id}`} className='h-[36px] outline-black-1 dark:outline-white-1 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-black dark:text-white px-1 py-2 rounded-lg text-center text-sm'>
                    Read More
                </Link>
            </div>
        </div>
    </div>
  )
}

export default JobListing