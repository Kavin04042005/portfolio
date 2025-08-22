import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export const Education: React.FC = () => {
  const educationData = [
    {
      institution: 'Excel Engineering College',
      degree: 'B.E. Engineering',
      duration: '2022 – 2026',
      grade: 'CGPA: 6.7',
      description: 'Currently pursuing engineering with focus on computer science and web technologies',
      icon: GraduationCap,
      color: 'from-purple-600 to-blue-600'
    },
    {
      institution: 'Sri Vidya Mandir Matric Hr. Sec. School',
      degree: 'Higher Secondary Certificate (HSC)',
      duration: '2021 – 2022',
      grade: '51%',
      description: 'Completed higher secondary education with focus on science and mathematics',
      icon: Award,
      color: 'from-blue-600 to-indigo-600'
    },
    {
      institution: 'Sri Vidya Mandir Matric Hr. Sec. School',
      degree: 'Secondary School Leaving Certificate (SSLC)',
      duration: '2019 – 2020',
      grade: '64%',
      description: 'Foundation education with excellent performance in core subjects',
      icon: Award,
      color: 'from-indigo-600 to-purple-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and educational milestones that shaped my technical foundation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <edu.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold">
                      <Calendar className="w-4 h-4" />
                      {edu.duration}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      {edu.degree}
                    </p>
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium w-fit">
                      {edu.grade}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Continuous Learning</h3>
            <p className="opacity-90">
              Always eager to learn new technologies and expand my knowledge through practical projects and industry experience
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};