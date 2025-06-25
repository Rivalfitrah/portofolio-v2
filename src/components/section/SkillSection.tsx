import React from 'react';

function SkillSection() {
  const skills = [
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
    { name: "CSS3", icon: "https://cdn.simpleicons.org/css3" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "React", icon: "https://cdn.simpleicons.org/react" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
  ];

  return (
    <section className="min-h-screen py-16 bg-black" id='skills'>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 mt-15 text-center text-blue-400">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-[#0f0f0f] rounded-xl border border-blue-500/30 shadow-md hover:shadow-blue-500/40 transition duration-300"
            >
              <div className="w-16 h-16 rounded-full border border-blue-500/60 flex items-center justify-center mb-4">
                <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
              </div>
              <h3 className="text-white text-center font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
