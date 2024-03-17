import bannerImage from "../assets/p2.png"
import bannerBackground from "../assets/banner_wallpaper.svg"
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Banner = () => {
    const el= useRef(null)

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Android Developer", "Backend Developer"], 
          startDelay: 100,
          typeSpeed: 50,
          backSpeed: 50,
          backDelay: 50
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);


    return (
        <div style={
            {
                backgroundImage: `url(${bannerBackground})`,
                backgroundSize: "cover",
            }
        } className="main-container flex items-center">

            <div className="ms-2 md:max-lg:flex justify-start text-white">
                <div className="w-2/3 text-center sm:text-left">
                    <h3 className="text-3xl font-semibold">Hi, I am</h3>
                    <h1 className="mt-3 text-5xl font-bold">Umesh Pawar</h1>
                    <h2 className="mt-3 text-3xl">A I am <span className=" font-bold underline" ref={el}></span></h2>
                    <p className="mt-3 mr-10 text-start">
                        A highly motivated and skilled Java developer with 2.5 years of experience in
                            developing and maintaining complex applications using Java, Hibernate, and Spring Boot.
                            Possessing excellent problem-solving skills, a strong work ethic, and a passion for technology.
                            Seeking a challenging role in a dynamic organization where I can utilize my skills and experience
                            to contribute to the success of the company.
                        
                    </p>
                    <div className="icons-container flex space-x-5 rounded-full">
                        <a className=" hover:bg-orange-500 border px-3 py-4 w-16 h-16 cursor-pointer flex justify-center items-center bg-gray-800 rounded-full">
                            <i class="fa-brands text-4xl fa-facebook"></i>
                        </a>
                        <a className=" hover:bg-orange-500 border px-3 py-4 w-16 h-16 cursor-pointer flex justify-center items-center bg-gray-800 rounded-full">

                            <i class="fa-brands text-4xl fa-instagram"></i>
                        </a>
                        <a className=" hover:bg-orange-500 border px-3 py-4 w-16 h-16 cursor-pointer flex justify-center items-center bg-gray-800 rounded-full">

                            <i class="fa-brands text-4xl fa-linkedin"></i>
                        </a>
                    </div>
                    <br />
                    <a className=" m-max-sm:flex px-2 py-2 bg-blue-700 rounded-full shadow-lg text-2xl font-semibold" href="/contact">Contact me</a>
                </div>
            </div>
            <div className="ms-2 md:max-lg:flex justify-center">
                <img className="rounded-full shadow-lg" src={bannerImage} />
            </div>


        </div>
    );
}

export default Banner;