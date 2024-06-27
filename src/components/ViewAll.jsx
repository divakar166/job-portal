import { Link } from 'react-router-dom';

const ViewAll = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
        <Link to="/jobs"
        className='block outline-slate-1 text-black dark:text-white text-center py-4 px-6 rounded-xl hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black'>
            View All Jobs
        </Link>
    </section>
  )
}

export default ViewAll