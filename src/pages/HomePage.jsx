import { useNavigate } from "react-router-dom";
import {
  Hero,
  HomeCards,
  JobListings,
  ViewAll,
  SubscribeSection,
  Footer,
} from "../components/Homepage";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import WaveIcon from '../components/common/WaveIcon';

const HomePage = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="bg-white dark:bg-black">
      {!user ? (<>
        <Hero />
        <HomeCards />
        </>
      ) : (
        <div className="w-full leading-[0.75] flex justify-center items-center flex-col mt-5">
          <div className="flex h-6 items-center text-lg font-bold">
            <p>Hi, {user.name.split(' ')[0]}!</p>
            <WaveIcon />
          </div>
          <div className="text-gray-400">Let's help you land your dream career</div>
        </div>
      )}
      <JobListings isHome={user == null} />
      <ViewAll />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default HomePage;
