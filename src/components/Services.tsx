import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, FileText, UserCheck, RefreshCw, Briefcase, Network, Building } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Staff Augmentation',
    description: 'IT & Non-IT staff augmentation services to scale your team quickly with skilled professionals.',
  },
  {
    icon: FileText,
    title: 'Contract Staffing',
    description: 'Flexible contract and temporary staffing solutions for your project-based requirements.',
  },
  {
    icon: UserCheck,
    title: 'Permanent Placement',
    description: 'Direct hire and permanent placement services to build your long-term team.',
  },
  {
    icon: RefreshCw,
    title: 'Temp-to-Perm',
    description: 'Evaluate candidates through temporary assignments before permanent hiring.',
  },
  {
    icon: Briefcase,
    title: 'RPO Services',
    description: 'Comprehensive Recruitment Process Outsourcing to manage your entire hiring process.',
  },
  {
    icon: Network,
    title: 'MSP Solutions',
    description: 'Master Services Provider acting as your exclusive single vendor for streamlined recruitment.',
  },
  {
    icon: Building,
    title: 'BOT Model',
    description: 'Build-Operate-Transfer model to establish and transfer in-house staffing processes.',
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section id="services" ref={ref} className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flexible and comprehensive staffing solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 + index * 0.05,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -8 }}
                className="group p-8 bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={24} />
                </div>
                
                <h3 className="text-xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
