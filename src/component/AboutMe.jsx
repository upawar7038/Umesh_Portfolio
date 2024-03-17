import { useState } from "react";
import bannerImage from "../assets/w.jpg"
const AboutMe = () => {
    const[data,setData] =useState({
        image:bannerImage,
        title:"Java Developer And Android Developer",
        desc1:`I am a highly motivated and results-oriented software developer with 2.6 years of experience in Android and Java development. My passion for technology and problem-solving abilities drive me to design and implement innovative solutions that meet user needs and exceed expectations. I have a strong foundation in mobile app development, backend systems, and software architecture, with expertise in Java, Kotlin, Android SDK, Spring Boot, and Hibernate. I thrive in collaborative environments and am always eager to learn and adapt to new technologies and challenges. I am seeking opportunities to contribute my skills and experience to impactful projects and grow professionally in a dynamic and innovative team.`,
    actionButton:{
        title:"Read More",
        link:"/readmore"
      }
      
    })
    return (
        <>
            <div className="main-container bg-white">
            <h1 className=" text-center py-16 text-4xl font-bold underline">About Me </h1>
              <div className=" bg-gray-100">
                    <div className="main-box flex items-center">
                        <div className="imageclass mt-10 w-full h-full">
                            <img className="rounded-full shadow-lg" src={data.image} alt="Umesh Pawar" />
                        </div>
                        <div className="textmain flex justify-center">
                            <div className=" space-y-5  w-2/3">
                            <h1 className=" text-4xl font-semibold mt-5">{data.title}</h1>
                            <p>
                                {data.desc1}
                            </p>
                            </div>
                            
                        </div>


                    </div>

                </div>



            </div>
        </>


    );
};

export default AboutMe;