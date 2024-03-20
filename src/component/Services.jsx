import React, { useState } from 'react';

const Services = () => {
  const [isJavaDetailsOpen, setIsJavaDetailsOpen] = useState(true);
  const [isAndroidDetailsOpen, setIsAndroidDetailsOpen] = useState(true);

  const toggleJavaDetails = () => {
    setIsJavaDetailsOpen(!isJavaDetailsOpen);
  };

  const toggleAndroidDetails = () => {
    setIsAndroidDetailsOpen(!isAndroidDetailsOpen);
  };

  const skills = [
    { category: 'Custom Java Application Development:', skills: ['Development of custom Java applications based on client requirements.', 'Utilization of Java programming language, along with frameworks like Spring Boot or Hibernate, for efficient and scalable solutions.', 'Implementation of best coding practices and design patterns to ensure code quality and maintainability'] },
    { category: 'API Development and Integration:', skills: ['Development of RESTful APIs using Java frameworks like Spring REST', 'Integration of APIs for communication between different systems or services.', 'Documentation and testing of APIs using tools like Swagger or Postman for reliability and compatibility.'] },
    { category: 'Maintenance and Support:', skills: ['Providing ongoing maintenance and support for Java applications, including bug fixes and performance enhancements.', 'Monitoring application performance and troubleshooting issues to ensure uninterrupted operation.', 'Version control and deployment management for seamless updates and releases.'] },
    { category: 'Code Reviews:', skills: ['Conducting code reviews to improve code quality, readability, and adherence to coding standards.', 'Refactoring existing codebases to enhance scalability, efficiency, and maintainability.', 'Implementing coding best practices and patterns for optimized and robust solutions.'] }
  ];

  const skillAndroid = [
    { categoryAndroid: 'Custom Android App Development:', skillsAndroid: ['Development of custom Android applications tailored to client specifications.', 'Proficiency in Java/Kotlin programming languages for Android app development.', 'UI/UX design implementation for intuitive and visually appealing user interfaces.'] },
    { categoryAndroid: 'Native Android Development:', skillsAndroid: ['Utilization of Android Studio and Android SDK for native app development.', 'Integration of Android-specific features such as notifications, permissions, and background tasks.', ' Optimization of app performance and battery efficiency for a seamless user experience.'] },
    { categoryAndroid: 'Cross-Platform Development:', skillsAndroid: ['Experience with cross-platform frameworks like React Native or Flutter for multi-platform app development.', 'Building and deploying apps for both Android and iOS platforms from a single codebase.'] },
    { categoryAndroid: 'API Integration:', skillsAndroid: ['Integration of RESTful APIs for data exchange and communication with server-side applications.', 'Authentication, data encryption, and secure API handling for data privacy and security.', 'Utilization of libraries like Retrofit for efficient network requests and responses.'] },
    { categoryAndroid: 'Database Management:', skillsAndroid: ['Implementation of local and remote databases using SQLite, Room Database.', 'Efficient data storage, retrieval, and synchronization for offline capabilities and data persistence.', 'Database schema design and optimization for improved app performance.'] }
  ];

  const SkillCardAndroid = ({ category, skill }) => (
    <div className="bg-slate-100 shadow-md hover:bg-slate-200 rounded p-4 m-2">
      <h3 className="lg:text-xl sm:text-sm font-semibold">{category}</h3>
      <ul className="list-disc pl-6">
        {skill.map((skills, index) => (
          <li key={index} className="text-gray-600 text-start">{skills}</li>
        ))}
      </ul>
    </div>
  );

  const SkillCard = ({ category, skills }) => (
    <div className="bg-slate-100 shadow-md hover:bg-slate-200 rounded p-4 m-2">
      <h3 className="lg:text-xl sm:text-sm font-semibold">{category}</h3>
      <ul className="list-disc pl-6">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-600 text-start">{skill}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="main-container py-16">
      <h1 className="lg:text-5xl sm:text-3xl font-bold text-center underline">My Services</h1>
      <div className="services-container break-words flex justify-center overflow-x-scroll space-x-5 px-8  mt-12">
        <div className="Service-java cursor-pointer hover:bg-slate-200 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-5">
          <i className="fa-brands text-5xl fa-java"></i>
          <h1 className=" lg:text-4xl sm:text-2xl sm:text- text-center font-bold">Backend Development</h1>

          <details open={isJavaDetailsOpen} className="services-Android cursor-pointer hover:bg-slate-200 bg-slate-100 p-5 text-start shadow-lg rounded-xl space-y-5">
            <div className="grid grid-cols-1 text-start lg:text-xl sm:text-sm md:grid-cols-1 lg:grid-cols-1 gap-4">
              {skills.map((item, index) => (
                <SkillCard key={index} category={item.category} skills={item.skills} />
              ))}
            </div>
          </details>
        </div>
        <div className="services-Android break-words cursor-pointer hover:bg-slate-200 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-5">
          <i className="fa-solid text-5xl fa-mobile-screen-button"></i>
          <h1 className="lg:text-4xl sm:text-2xl text-center font-bold">Android Development</h1>

          <details open={isAndroidDetailsOpen} className="services-Android cursor-pointer hover:bg-slate-200 bg-slate-100 p-5 text-start shadow-lg lg:rounded-xl sm:rounded-sm ">
            <div className="text-start grid grid-cols-1  lg:text-xl sm:text-sm md:grid-cols-1 lg:grid-cols-1 gap-4">
              {skillAndroid.map((item, index) => (
                <SkillCardAndroid key={index} category={item.categoryAndroid} skill={item.skillsAndroid} />
              ))}
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Services;
