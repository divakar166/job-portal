import { Footer, JobListings } from "../components/Homepage";

const JobsPage = () => {
  return (
    <section className="px-4">
      <JobListings />
      <div className="mt-10"></div>
      <Footer />
    </section>
  );
};

export default JobsPage;
