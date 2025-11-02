import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Code, DollarSign, Cog, TrendingUp } from 'lucide-react';

const specializations = [
  {
    icon: Code,
    title: 'Information Technology',
    items: [
      'Software Development (Java, .NET, PHP, C++)',
      'Mobile App Development',
      'Project & Program Management',
      'Big Data & Business Intelligence',
      'Cloud Computing & DevOps',
      'Testing & Quality Assurance',
    ],
  },
  {
    icon: DollarSign,
    title: 'BFSI',
    items: [
      'Financial Analysts',
      'Payroll Managers',
      'Auditors & Accountants',
      'FI/CO Specialists',
      'Risk Management',
      'Compliance Officers',
    ],
  },
  {
    icon: Cog,
    title: 'Engineering',
    items: [
      'Electrical/Mechanical Designers',
      'Telecom Engineers',
      'Packaging Engineers',
      'QA/QC Specialists',
      'Manufacturing Engineers',
      'Process Engineers',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Leadership Hiring',
    items: [
      'Regional Heads',
      'VP/AVP Positions',
      'Business Unit Heads',
      'Solution Architects',
      'C-Level Executives',
      'Department Heads',
    ],
  },
];

export function Specializations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section id="specialization" ref={ref} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-4">Specializations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expertise across multiple domains and technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {specializations.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl text-gray-900">{spec.title}</h3>
                </div>

                <ul className="space-y-3">
                  {spec.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 + itemIndex * 0.05 }}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
