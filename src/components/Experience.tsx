import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, ExternalLink } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

export const Experience: React.FC = () => {
  const experiences: ExperienceType[] = [
    {
      title: 'UI/UX Design Intern',
      company: 'Accent Technosoft',
      date: 'November 2025',
      type: 'internship'
    },
    {
      title: 'Full Stack Web Development Intern',
      company: 'Crescent InfoTech',
      date: 'June 2024',
      type: 'internship'
    },
    {
      title: 'Full Stack Web Development Intern',
      company: '8 Queens',
      date: 'December 2023',
      type: 'internship'
    }
  ];

  const certificates = [
    {
      name: 'MongoDB Database Fundamentals',
      issuer: 'Learnthon',
      date: '2024',
      description: 'Comprehensive understanding of NoSQL database design and MongoDB operations'
    },
    {
      name: 'Generative AI Fundamentals',
      issuer: 'GUVI',
      date: '2024',
      description: 'Explored AI/ML concepts and generative AI applications in modern development'
    },
    {
      name: 'Java Advanced Programming',
      issuer: 'HackerRank',
      date: '2024',
      description: 'Advanced Java programming concepts including OOP, data structures, and algorithms'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Experience & Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional experience and industry certifications that demonstrate my commitment to continuous learning
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white flex items-center justify-center gap-3"
          >
            <Briefcase className="w-8 h-8 text-purple-600" />
            Professional Experience
          </motion.h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-600"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h4>
                    <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                      {exp.company}
                    </p>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.date}</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium w-fit">
                    {exp.type === 'internship' ? 'Internship' : 'Education'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white flex items-center justify-center gap-3"
          >
            <GraduationCap className="w-8 h-8 text-purple-600" />
            Certifications
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.2 }
                }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                    {cert.date}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {cert.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium text-sm"
                >
                  View Certificate <ExternalLink className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};