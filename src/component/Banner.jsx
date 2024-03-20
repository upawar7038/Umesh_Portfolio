import bannerImage from "../assets/p2.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";

const Banner = () => {
    const el = useRef(null);

    const linkedURL = 'https://www.linkedin.com/in/umesh-pawar-ba6893180'
    const githubURL = 'https://github.com/upawar7038'

    const redirectToGmail = () => {
        const recipient = 'upawar7038@gmail.com'; // Replace with your Gmail ID
        const subject = ''; // Optional: Replace with your desired subject
        const body = ''; // Optional: Replace with your desired email body
        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Android Developer", "Backend Developer"],
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 50,
            loop: true
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
                <div className="  md:w-2/3 sm:w-1/3 center md:text-left">
                    <h3 className=" ms-4 lg:text-5xl sm:text-3xl-mt-2 font-semibold">Hi, I am</h3>
                    <h1 className=" ms-4 lg:text-5xl sm:text-3xl-mt-2 font-bold">Umesh Pawar</h1>
                    <h2 className=" ms-4 lg:text-3xl sm:text-2xl-mt-2">I am <span className="font-bold underline" ref={el}></span></h2>
                    <p className="ms-2 mt-4 text-start lg:text-xl sm:text-sm">
                        <span className=" mt-3">
                            Highly skilled and results-oriented software developer with 2.6 years of experience in
                            Android and Java development. Proven track record of designing and implementing
                            complex mobile applications and backend systems using Java, Android SDK, Kotlin, Hibernate, and Spring Boot.
                        </span>
                        <br />
                        <span className=" mt-3 ">
                            Strong problem-solving abilities, attention to detail, and a passion for delivering high-quality software solutions.
                            Seeking opportunities to leverage my expertise and contribute to innovative projects in a dynamic team environment.
                        </span>
                    </p>

                    <div className="ms-4 icons-container flex space-x-5 rounded-full mt-5">
                        <a
                            className="hover:bg-orange-500 border px-3 py-4 w-16 h-16 cursor-pointer flex justify-center items-center bg-gray-800 rounded-full"
                            href={linkedURL}
                        >
                            <i className="fab fa-linkedin text-4xl"></i>
                        </a>
                        <a
                            className="hover:bg-orange-500 border px-3 py-4 w-16 h-16 cursor-pointer flex justify-center items-center bg-gray-800 rounded-full"
                            href={githubURL}
                        >
                            <i class="fa-brands fa-github"></i>
                        </a>

                    </div>
                    <br />
                    <div className="ms-4 flex-shrink-0">
                        <button
                            onClick={redirectToGmail}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Contact me
                        </button>
                        <button onClick={redirectToGmail}
                            className="ms-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Hire Me
                        </button>

                    </div>


                </div>
            </div>
            <div className="md:flex justify-center sm: flex-justify-start mt-5 md:mt-0">
                <img className="rounded-full shadow-lg" src={bannerImage} alt="Umesh Pawar" />
            </div>
        </div>
    );
};

export default Banner;
