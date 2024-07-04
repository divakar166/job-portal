import {
  Hero,
  HomeCards,
  JobListings,
  ViewAll,
  SubscribeSection,
  Footer,
} from "../components/Homepage";

const HomePage = () => {
  return (
    <div className="bg-white dark:bg-black">
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAll />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default HomePage;
