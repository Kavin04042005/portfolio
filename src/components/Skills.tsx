import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

export const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Technical Skills
    { name: 'Python', level: 85, category: 'technical' },
    { name: 'Java', level: 80, category: 'technical' },
    { name: 'ReactJS', level: 90, category: 'technical' },
    { name: 'HTML/CSS', level: 95, category: 'technical' },
    { name: 'MySQL', level: 75, category: 'technical' },
    { name: 'MongoDB', level: 70, category: 'technical' },
    { name: 'PowerBI', level: 80, category: 'technical' },
    { name: 'Excel', level: 85, category: 'technical' },
    { name: 'Jupyter Notebook', level: 75, category: 'technical' },
    
    // Soft Skills
    { name: 'Adaptability', level: 90, category: 'soft' },
    { name: 'Analytical Thinking', level: 85, category: 'soft' },
    { name: 'Attention to Detail', level: 88, category: 'soft' }
  ];

  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
        <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <motion.div
          className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiencies and soft skills developed through hands-on experience
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white"
          >
            Technical Skills
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white"
          >
            Soft Skills
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly updating my skills and exploring new technologies 
              to stay at the forefront of web development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};