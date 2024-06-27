// import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
// import ViewAll from "../components/ViewAll";

const HomePage = () => {
  return (
    <div className="bg-white dark:bg-black">
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      {/* <ViewAll />
        <Footer /> */}
    </div>
  );
};

export default HomePage;
