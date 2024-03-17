import { useState } from "react";
import bannerImage from "../assets/p2.png"
const AboutMe = () => {
    const[data,setData] =useState({
        image:bannerImage,
        title:"Java Developer And Android Developer",
        desc1:`Developed and maintained multiple Android applications using Kotlin and MVVM architecture.
        Implemented offline data persistence using Room Database, resulting in improved app performance and user
        experience.
        Collaborated with UI/UX designers and backend developers to ensure seamless integration of app features and
        functionalities.
        Conducted code reviews and provided constructive feedback to enhance code quality and maintain codebase standards
        Resolved critical bugs and issues promptly, ensuring the delivery of stable and reliable applications to end-users.`,
        desc2:` Property Tax Collection Application Developed
        Successfully developed and deployed a complex Java-based web
        application using Spring Boot and AngularJS, resulting in a 40% increase in
        user engagement and satisfaction. Implemented a RESTful API for a client using Java and Spring MVC, resulting in a signif
      `,
      actionButton:{
        title:"Read More",
        link:"/readmore"
      }
      
    })
    return (
        <>
            <div className="main-container bg-gray-100">
              <div>
                    <h1 className=" text-center py-16 text-4xl font-bold underline">About Me </h1>
                    <div className="main-box flex items-center">
                        <div className="imageclass w-full flex justify-center">
                            <img className="w-fit rounded-full shadow-none" src={data.image} alt="Umesh Pawar" />
                        </div>
                        <div className="textmain flex justify-center">
                            <div className=" space-y-5  w-2/3">
                            <h1 className=" text-4xl font-semibold mt-5">{data.title}</h1>
                            <p>
                                {data.desc1}
                            </p>
                            <p>{
                                data.desc2}
                             </p>
                            <button className=" bg-blue-500 px-3 py-3 rounded-full shadow-lg text-white">{data.actionButton.title}</button>
                            </div>
                            
                        </div>


                    </div>

                </div>



            </div>
        </>


    );
};

export default AboutMe;