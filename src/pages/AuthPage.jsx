import {
  CompaniesAuthSection,
  DevelopersAuthSection,
} from "../components/Auth";

const AuthPage = () => {
  return (
    <div className="flex h-[87.5vh]">
      <CompaniesAuthSection />
      <DevelopersAuthSection />
    </div>
  );
};

export default AuthPage;
