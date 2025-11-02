import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  '100% Compliance Guaranteed',
  'Dedicated Account Management',
  'Quality & Passive Candidates',
  'Cross-Domain Expertise',
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section id="about" ref={ref} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premier Staffing and Services firm connecting top-tier talent with leading organizations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1690264421892-46e3af5c3455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjE5OTE2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-900 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-3xl sm:text-4xl text-gray-900 mb-4">
              Empowering Businesses Since 2019
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Coll8 Tech Services is a premier Staffing and Services firm based in Vadodara, founded in 2019. 
              We possess a proven capability to successfully service both IT & Professional categories across India, 
              connecting top-tier talent with leading organizations.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Our structured approach ensures efficiency, quality, and a deep understanding of your industry. 
              We pride ourselves on delivering exceptional recruitment solutions tailored to your unique business needs.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
