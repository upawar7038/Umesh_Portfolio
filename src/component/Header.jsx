import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Skill from './Skill';
import Services from './Services';

import { Transition } from "@headlessui/react";
const Header = () => {
    const [userName, setUserName] = useState("Umesh Ramchandra Pawar")
    const [menuLinks, setLinks] = useState(
        [
            {
                title: "Home",
                link: "/Home",
                id: 1
            },
            {
                title: "About",
                link: "/About",
                id: 2
            },
            {
                title: "Skill",
                link: "/Skill",
                id: 3
            },
            {
                title: "Portfolio",
                link: "/portfolio",
                id: 4
            },
            {
                title: "Contact",
                link: "/contact",
                id: 5
            }
        ]
    )

   const[hireButton,setHireButton]= useState(
        {
            title: "HireMe",
            link: "/hireMe",
            id: 1  
        }
    )
    
 const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex justify-items-start">
              <h1 className="text-ellipsis max-w-md mx-auto 2xl: font-bold">{userName}</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                {menuLinks.map(
                    (link) => (
                        <a key={link.id }href={link.link} className="hover:text-orange-600">
                            {link.title}</a>
                    )
                )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                
                {menuLinks.map(
                    (link) => (
                        <a key={link.id }href={link.link} className="text-black block px-3 py-2 rounded-md text-base font-medium hover:text-orange-600">
                            {link.title}</a>
                    )
                )}
                
              </div>
            </div>
          )}
        </Transition>
      </nav>

     </div>
  );

};

export default Header;
