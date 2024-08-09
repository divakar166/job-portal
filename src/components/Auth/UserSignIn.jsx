import { SignIn } from "@clerk/clerk-react";

const UserSignIn = () => {
  return (
    <section className="w-full mt-10 bg-white flex justify-center items-center">
      <SignIn signUpUrl="sign-up" />
    </section>
  );
};
export default UserSignIn;
