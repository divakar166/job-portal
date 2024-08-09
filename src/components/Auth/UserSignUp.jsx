import { SignUp } from "@clerk/clerk-react";

const UserSignUp = () => {
  return (
    <section className="w-full h-full bg-white flex justify-center items-center">
      <SignUp signInUrl="sign-in" />
    </section>
  );
};
export default UserSignUp;
