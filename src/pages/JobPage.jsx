import { useParams, useLoaderData, Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();
  return (
    <>
      <section className="bg-white dark:bg-black">
        <div className='container m-auto py-6 px-6'>
          <Link
            to='/jobs'
            className='text-slate-500 hover:text-slate-900 dark:text-neutral-400 dark:hover:text-neutral-200 flex items-center'
          >
            <FaArrowLeft className='mr-2' /> Back to Job Listings
          </Link>
        </div>
      </section>
      <section className='bg-white dark:bg-black'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <main>
              <div className='bg-white dark:bg-black outline-black-1 dark:outline-white-1 p-6 rounded-lg shadow-md text-center md:text-left'>
                <div className='text-slate-500 dark:text-slate-300 mb-4'>{job.type}</div>
                <h1 className='text-3xl text-black dark:text-white font-bold mb-4'>{job.title}</h1>
                <div className='text-slate-600 dark:text-slate-300 mb-4 flex items-center justify-center md:justify-start'>
                  <FaMapMarkerAlt className=' mr-1' />
                  <p>{job.location}</p>
                </div>
              </div>

              <div className='bg-white dark:bg-black outline-black-1 dark:outline-white-1 p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-slate-600 dark:text-slate-300 text-lg font-bold mb-6'>
                  Job Description
                </h3>

                <p className='mb-4 text-black dark:text-white'>{job.description}</p>

                <h3 className='text-slate-600 dark:text-slate-300 text-lg font-bold mb-2'>
                  Salary
                </h3>
                <p className='mb-4 text-black dark:text-white'>{job.salary} / Year</p>
              </div>
            </main>
            <aside>
              <div className='bg-white dark:bg-black outline-black-1 dark:outline-white-1 text-black dark:text-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold mb-6'>Company Info</h3>
                <h2 className='text-2xl text-neutral-800 dark:text-slate-200 '>{job.company.name}</h2>
                <p className='my-2 text-slate-600 dark:text-slate-400'>{job.company.description}</p>
                <hr className='my-4' />
                <h3 className='text-lg'>Contact Email:</h3>
                <p className='p-1 pl-0 font-bold text-slate-600 dark:text-slate-400'>
                  {job.company.contactEmail}
                </p>
                <h3 className='text-lg'>Contact Phone:</h3>
                <p className='p-1 pl-0 font-bold text-slate-600 dark:text-slate-400'>
                  {' '}
                  {job.company.contactPhone}
                </p>
              </div>
              <div className='bg-white dark:bg-black outline-black-1 dark:outline-white-1 text-black dark:text-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-xl font-bold mb-6'>Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className='bg-white dark:bg-black outline-black-1 dark:outline-white-1 hover:bg-black dark:hover:bg-white text-black dark:text-white hover:text-white dark:hover:text-black text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className='outline-red-2 hover:bg-[#EE4B2B] text-[#EE4B2B] hover:text-white font-bold py-2 px-4 rounded-full w-full mt-4 block'
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  ) ;
}

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
}

export {JobPage as default,jobLoader}