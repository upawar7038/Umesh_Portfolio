import React from 'react';

const skills = [
  { category: 'Programming Languages', skills: ['Java', 'Kotlin'] },
  { category: 'Android Development', skills: ['Android Studio', 'XML', 'Material Design'] },
  { category: 'Backend Development', skills: ['Spring Boot', 'RESTful APIs', 'SQL',] },
  { category: 'Version Control', skills: ['Git', 'GitHub'] },
  { category: 'Tools & Technologies', skills: ['Firebase', 'Google Play Services', 'Retrofit', 'Dagger 2','Postamn'] },
  // Add more categories and skills as needed
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
