import { useState } from "react";

const Expertise=()=>{
   const[getData,setData]= useState([
        {
        id:1,
        technology:"Core Java",
         },
         {
            id:2,
            technology:"Hibernet",
             },
             {
                id:3,
                technology:"Spring Boot",
                 },
                 {
                    id:4,
                    technology:"Android",
                     },
                     {
                        id:5,
                        technology:"Kotlin",
                         }        ]);
    return(
        <>
        <div className="expertise-container my-8">
            <h1 className=" text-5xl text-center underline font-bold">My Expertise</h1>

            <div className="services-container space-x-5 px-8 flex justify-center mt-12 ">
            <div className="Service-java cursor-pointer hover:bg-slate-200 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-5">
            <h1 className="text-4xl  text-center font-bold"> I love this tecnologies</h1>
            </div>
            <div className="services-Android  cursor-pointer p-5 text-center  space-y-5">
            <div className="flex w-2/3 space-x-3 space-y-3 flex-wrap">
                   <p className=" bg-gray-200 w-fit px-2 py-2 rounded-full">Java</p>
                   <p className=" bg-gray-200 w-fit px-2 py-2 rounded-full">Java</p>
                   <p className=" bg-gray-200 w-fit px-2 py-2 rounded-full">Java</p>
                   <p className=" bg-gray-200 w-fit px-2 py-2 rounded-full">Java</p>
                   <p className=" bg-gray-200 w-fit px-2 py-2 rounded-full">Java</p>
                   <p className=" bg-gray-200 w-fit px-2 py-2 rounded-full">Java</p>
                   <p className=" bg-gray-200 w-fit px-2 py-2 rounded-full">Java</p>
                   <p className=" bg-gray-200 w-fit px-2 py-2 rounded-full">Java</p>
                   <p className=" bg-gray-200 w-fit px-2 py-2 rounded-full">Java</p>
                   <p className=" bg-gray-200 w-fit px-2 py-2 rounded-full">Java</p>
                   <p className=" bg-gray-200 w-fit px-2 py-2 rounded-full">Java</p>
                   <p className=" bg-gray-200 w-fit px-2 py-2 rounded-full">Java</p>
                   <p className=" bg-gray-200 w-fit px-2 py-2 rounded-full">Java</p>
                </div>
            
            </div>


        </div>
            
        </div>
        
        
        
        </>

    );


};

export default Expertise;