import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Skill from './Skill';
import Services from './Services';

const Header = () => {
    const [userName, setUserName] = useState("Umesh Ramchandra Pawar")
    const [menuLinks, setLinks] = useState(
        [
            {
                title: "Home",
                link: AboutMe,
                id: 1
            },
            {
                title: "About",
                link: Skill,
                id: 2
            },
            {
                title: "Skill",
                link: Services,
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
    return (
        <div className="h-20 border main flex justify-between items-center sm:text-left bg-gray-300">
            <div className='flex justify-items-start space-x-3 space-y-5'>
                <h1 className="text-ellipsis max-w-md mx-auto 2xl: font-bold">{userName}</h1>
            </div>
            <div className="space-x-3 mt-3 text-ellipsis text-1xl font-bold  mx-auto"> 
            {menuLinks.map(
                    (link) => (
                        <a key={link.id }href={link.link} className="hover:text-orange-600">
                            {link.title}</a>
                    )
                )}
        </div>
            <div className='max-w-md mx-auto'>
                {
                 
                }
                <a  key={hireButton.id} href={hireButton.link} className="px-4 py-3 bg-orange-400 rounded-full text-ellipsis 1xl: font-bold">
                    {hireButton.title}
                </a>

            </div>

        </div>
    );
};

export default Header;
