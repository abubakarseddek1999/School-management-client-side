import { useState } from "react";
import logo from "../../assets/image/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <div className=" relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('your-image-url.jpg')` }}>
      <nav className="bg-gray-400 bg-opacity-50 backdrop-filter backdrop-blur-lg fixed w-full p-2">
        <div className="max-w-[1400px] mx-auto px-2 lg:px-0">
          <div className="flex items-center justify-between h-16">

            {/* left side logo */}
            <div className="flex items-center">
            <img className="w-[70px] h-[70px]  rounded-full mr-2" src={logo} alt="" /> 
              {/* <div className="text-black text-lg font-bold "> SCHOOL-WEB</div> */}
            </div>


            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 text-white">
                <a href="#" className="text-black lg:text-xl hover:text-white hover:bg-orange-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-black lg:text-xl hover:text-white hover:bg-orange-300 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-black lg:text-xl hover:text-white hover:bg-orange-300 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#" className="text-black lg:text-xl hover:text-white hover:bg-orange-300 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                <a href="#" className="text-white bg-yellow-600 hover:bg-yellow-500 px-3 py-2 rounded-md text-sm font-medium">Get Started</a>
              </div>
            </div>
          </div>
        </div>


        {isOpen && (
          <div className="md:hidden h-screen" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white text-center">
              <a href="#" className="text-black lg:text-xl hover:text-white hover:bg-orange-300 block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#" className="text-black lg:text-xl hover:text-white hover:bg-orange-300 block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#" className="text-black lg:text-xl hover:text-white hover:bg-orange-300 block px-3 py-2 rounded-md text-base font-medium">Services</a>
              <a href="#" className="text-black lg:text-xl hover:text-white hover:bg-orange-300 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
              <a href="#" className="text-yellow-400 bg-yellow-600 hover:bg-yellow-500 block px-3 py-2 rounded-md text-base font-medium">Get Started</a>
            </div>
          </div>
        )}

      </nav>

    </div>
  );
};

export default Navbar;
