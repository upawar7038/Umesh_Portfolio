import bannerImage from "../assets/p2.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Banner = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Android Developer", "Backend Developer"],
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 50
        });

        // Destroying Typed instance on component unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div
            style={{ backgroundImage: `url(${bannerBackground})`, backgroundSize: "cover" }}
            className="main-container flex items-center"
        >
            <div className="md:flex justify-start text-white">
                <div className="md:w-2/3 text-center md:text-left">
                    <h3 className=" ms-4 text-3xl font-semibold">Hi, I am</h3>
                    <h1 className=" ms-4 mt-3 text-5xl font-bold">Umesh Pawar</h1>
                    <h2 className=" ms-4 mt-3 text-3xl">I am <span className="font-bold underline" ref={el}></span></h2>
                    <p className=" ms-4 mt-3 mr-10 text-start">
                        A highly motivated and skilled Java developer with 2.5 years of experience in
                        developing and maintaining complex applications using Java, Hibernate, and Spring Boot.
                        Possessing excellent problem-solving skills, a strong work ethic, and a passion for technology.
                        Seeking a challenging role in a dynamic organization where I can utilize my skills and experience
                        to contribute to the success of the company.
                    </p>
                    <div className="ms-4 icons-container flex space-x-5 rounded-full mt-5">
                        <a
                            className="hover:bg-orange-500 border px-3 py-4 w-16 h-16 cursor-pointer flex justify-center items-center bg-gray-800 rounded-full"
                            href="#"
                        >
                            <i className="fab fa-facebook text-4xl"></i>
                        </a>
                        <a
                            className="hover:bg-orange-500 border px-3 py-4 w-16 h-16 cursor-pointer flex justify-center items-center bg-gray-800 rounded-full"
                            href="#"
                        >
                            <i className="fab fa-instagram text-4xl"></i>
                        </a>
                        <a
                            className="hover:bg-orange-500 border px-3 py-4 w-16 h-16 cursor-pointer flex justify-center items-center bg-gray-800 rounded-full"
                            href="#"
                        >
                            <i className="fab fa-linkedin text-4xl"></i>
                        </a>
                    </div>
                    <br/>
                    <div className="ms-4 flex-shrink-0">
                        <a
                            className="px-2 py-2 bg-blue-700 rounded-full shadow-lg text-2xl font-semibold mt-5 md:mt-0 md:mr-4"
                            href="/contact"
                        >
                            Contact me
                        </a>
                        <a
                            className="px-2 py-2 bg-blue-700 rounded-full shadow-lg text-2xl font-semibold mt-5 md:mt-0 md:ms-4"
                            href="/contact"
                        >
                            Hire Me
                        </a>
                    </div>L̥


                </div>
            </div>
            <div className="md:flex justify-center mt-5 md:mt-0">
                <img className="rounded-full shadow-lg" src={bannerImage} alt="Umesh Pawar" />
            </div>
        </div>
    );
};

export default Banner;
