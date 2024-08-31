import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const DeveleporDiv = () => {
  return (
    <div className="w-1/2 p-5 h-full flex justify-center items-center">
        <div
          className="w-full h-full bg-cover bg-center rounded-lg"
          style={{ backgroundImage: "url('/dev_bg.jpg')" }}
        >
          <div className="inset-0 bg-black opacity-30 rounded-lg"></div>
          <div className="flex justify-between items-center px-4 py-5 logo-container z-10">
            <div className="rounded-full flex justify-center items-center relative group group w-10">
              <a
                href="/"
                className="w-8 h-8 flex items-center justify-center"
              >
                <img
                  src="/logo-white.svg"
                  height={100}
                  width={100}
                  className="logo"
                  alt="Logo"
                />
                <span className="absolute text-white font-bold text-lg left-full top-1/2 transform -translate-y-1/2  opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  Connect
                </span>
              </a>
            </div>
            <div
              className="py-1 px-2 rounded-full flex justify-center text-white items-center"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
            >
              <Link to='/' className="flex justify-center items-center z-10">
                <p>Back to website</p>
                <FaArrowRight className="pl-2 text-xl" />
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DeveleporDiv