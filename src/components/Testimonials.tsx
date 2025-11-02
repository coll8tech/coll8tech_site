import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-4">Client Stories</h2>
          <p className="text-lg text-gray-600">
            Trusted by leading organizations across India
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <Quote className="text-gray-300 mb-6" size={48} />
            
            <p className="text-xl md:text-2xl text-gray-900 mb-8 leading-relaxed">
              Coll8 Tech Services has been instrumental in helping us build our development team. 
              Their understanding of our requirements and quick turnaround time is exceptional.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTk2NzEzOHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Rajesh Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-gray-900">Rajesh Kumar</div>
                <div className="text-sm text-gray-600">CTO, Tech Solutions Inc.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
