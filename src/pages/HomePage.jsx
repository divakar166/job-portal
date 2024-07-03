// import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import SubscribeSection from "../components/SubscribeSection";
import ViewAll from "../components/common/ViewAll";

const HomePage = () => {
  return (
    <div className="bg-white dark:bg-black">
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAll />
      <SubscribeSection />
    </div>
  );
};

export default HomePage;
