import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const ViewAll = () => {
    return (
        <section className="m-auto max-w-sm mb-10 px-6">
            <Link
                to="/jobs"
                className="block outline-slate-1 text-black text-center py-4 px-6 rounded-xl hover:outline-slate-500 focus:outline-slate-500 flex justify-center items-center group"
            >
                See more
                <FaArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
        </section>
    );
};

export default ViewAll;
