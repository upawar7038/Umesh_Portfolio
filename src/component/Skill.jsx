import React from 'react';

const skills = [
  { category: 'Programming Languages', skills: ['Java', 'Kotlin'] },
  { category: 'Frameworks', skills: ['Android SDK','Bluetooth SDK','Spring Boot', 'Hibernate'] },
  { category: 'Payment Gateway Intergration', skills: ['Payu', 'Razorpay','Sabpaisa','1Pay','Payphi'] },
  { category: 'Database Management', skills: ['MySQL', 'Room Database','Sqlite Database'] },
  { category: 'Version Control & Design Pattern', skills: ['Git', 'GitHub','MVC', 'DAO','MVVMx'] },
  { category: 'Tools & Technologies', skills: ['Android Studio', 'IntelliJ IDEA','Postman','Visual Studio','Firebase', 'Retrofit','RESTful Web Services','JPA', 'Dagger 2'] },
 
];

const SkillCard = ({ category, skills }) => (
  <div className="bg-slate-100 shadow-md hover:bg-slate-200 rounded p-4 m-2">
    <h3 className="text-xl font-semibold">{category}</h3>
    <ul className="list-disc pl-6">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-600">{skill}</li>
      ))}
    </ul>
  </div>
);

const Skill = () => (
  <section id="skills" className="p-3 bg-white">
    <div>
      <h1 className="text-5xl font-bold text-center underline">Skills</h1>
      <div className="container px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((item, index) => (
            <SkillCard key={index} category={item.category} skills={item.skills} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skill;
