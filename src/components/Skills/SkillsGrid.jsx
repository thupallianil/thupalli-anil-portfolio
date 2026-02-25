import React, { useState, useEffect, useRef } from "react";
import { skills } from "../../data/siteContent";

// Skill Card Component
function SkillCard({ skill, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // ✅ Updated proficiency (Added Django & APIs)
  const skillLevels = {
    React: 90,
    "Node.js": 85,
    "Next.js": 88,
    "Tailwind CSS": 92,
    DSA: 90,
    Python: 85,
    Django: 80, // 🔥 Added
    APIs: 82, // 🔥 Added
    SQL: 78,
    JavaScript: 88,
    TypeScript: 82,
    HTML: 95,
    CSS: 90,
    Canva: 88,
    Photoshop: 82,
  };

  const proficiency = skillLevels[skill.name] || 75;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  const getExperienceLevel = (p) => {
    if (p >= 90) return "🚀 Expert";
    if (p >= 80) return "⚡ Advanced";
    if (p >= 70) return "🎯 Intermediate";
    return "📚 Learning";
  };

  const getStarRating = (p) => Math.round(p / 20);

  return (
    <div
      className={`group relative transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        } ${isHovered ? "scale-105 -translate-y-2 z-10" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="flex items-center gap-4 mb-4">
          {/* Icon */}
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
            <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
              {!imageError ? (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-9 h-9 object-contain"
                  onError={() => setImageError(true)}
                  loading="lazy"
                />
              ) : (
                <span className="text-lg font-bold">
                  {skill.name.charAt(0)}
                </span>
              )}
            </div>
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">
              {skill.name}
            </h3>

            {/* Progress Bar */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                  style={{ width: `${proficiency}%` }}
                />
              </div>
              <span className="text-sm font-bold">{proficiency}%</span>
            </div>
          </div>
        </div>

        {/* Level + Stars */}
        <div className="flex items-center justify-between">
          <div className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            {getExperienceLevel(proficiency)}
          </div>

          <div className="flex gap-1 text-yellow-400 text-lg">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star}>
                {star <= getStarRating(proficiency) ? "★" : "☆"}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Skills Grid (Updated Filters with Django & APIs)
export default function SkillsGrid() {
  const [filter, setFilter] = useState("all");
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const ref = useRef(null);

  const skillCategories = {
    all: skills,
    frontend: skills.filter((s) =>
      ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript", "TypeScript"].includes(s.name)
    ),
    backend: skills.filter((s) =>
      ["Node.js", "Django", "SQL", "APIs", "REST APIs", "MySQL"].includes(s.name)
    ),
    languages: skills.filter((s) =>
      ["Python", "JavaScript", "TypeScript", "DSA"].includes(s.name)
    ),
    design: skills.filter((s) =>
      ["Canva", "Photoshop"].includes(s.name)
    ),
  };

  useEffect(() => {
    setFilteredSkills(skillCategories[filter]);
  }, [filter]);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Skills & Technologies
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition ${filter === category
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border"
                }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}