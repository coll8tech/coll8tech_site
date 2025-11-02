import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Search, Filter, CheckSquare, Send, Calendar, FileCheck, Shield, UserPlus } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Requirement Evaluation',
    description: 'Deep dive into your needs, culture, and expectations to understand the perfect candidate profile.',
    number: 1,
  },
  {
    icon: Filter,
    title: 'Candidate Sourcing',
    description: 'Leverage our extensive network and advanced sourcing techniques to find top talent.',
    number: 2,
  },
  {
    icon: CheckSquare,
    title: 'Screening & Testing',
    description: 'Comprehensive evaluation including technical assessments and behavioral interviews.',
    number: 3,
  },
  {
    icon: Send,
    title: 'Quality Check & Submission',
    description: 'Multi-level quality checks before presenting only the best-matched candidates.',
    number: 4,
  },
  {
    icon: Calendar,
    title: 'Interview Coordination',
    description: 'Seamless scheduling and coordination of interviews with shortlisted candidates.',
    number: 5,
  },
  {
    icon: FileCheck,
    title: 'Offer Management',
    description: 'Facilitate negotiations and ensure smooth offer acceptance process.',
    number: 6,
  },
  {
    icon: Shield,
    title: 'Background Verification',
    description: 'Thorough background checks to ensure candidate credibility and compliance.',
    number: 7,
  },
  {
    icon: UserPlus,
    title: 'Onboarding Support',
    description: 'Comprehensive onboarding assistance for a smooth transition and successful start.',
    number: 8,
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section id="process" ref={ref} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-4">Our Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A rigorous, multi-stage process to guarantee the right fit
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Roadmap */}
          <div className="relative">
            {/* Vertical line - desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative mb-16 last:mb-0"
                >
                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-6">
                    {/* Left side - icon and line */}
                    <div className="flex flex-col items-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                      >
                        <Icon className="text-white" size={24} />
                      </motion.div>
                      {index !== steps.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-200 mt-4" />
                      )}
                    </div>

                    {/* Right side - content */}
                    <div className="flex-1 pb-8">
                      <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 mb-3">
                        Step {step.number}
                      </div>
                      <h3 className="text-xl text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Desktop layout - alternating sides */}
                  <div className="hidden md:block">
                    <div className="flex items-center">
                      {/* Left content (for even indices) */}
                      <div className={`w-1/2 ${isEven ? 'pr-12 text-right' : 'opacity-0'}`}>
                        {isEven && (
                          <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                          >
                            <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 mb-3">
                              Step {step.number}
                            </div>
                            <h3 className="text-xl text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                          </motion.div>
                        )}
                      </div>

                      {/* Center icon */}
                      <div className="relative z-10 flex-shrink-0">
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center shadow-lg"
                        >
                          <Icon className="text-white" size={26} />
                        </motion.div>
                        
                        {/* Number badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                          className="absolute -top-2 -right-2 w-7 h-7 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center text-xs text-gray-900"
                        >
                          {step.number}
                        </motion.div>
                      </div>

                      {/* Right content (for odd indices) */}
                      <div className={`w-1/2 ${!isEven ? 'pl-12 text-left' : 'opacity-0'}`}>
                        {!isEven && (
                          <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                          >
                            <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 mb-3">
                              Step {step.number}
                            </div>
                            <h3 className="text-xl text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: steps.length * 0.15 + 0.2 }}
            className="flex justify-center mt-12"
          >
            <div className="px-6 py-3 bg-gray-900 text-white rounded-full text-sm">
              Successful Placement 🎉
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
