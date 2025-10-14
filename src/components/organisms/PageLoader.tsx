import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageLoaderProps {
  isLoading: boolean;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo con animación */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Círculo exterior giratorio */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 w-24 h-24 border-4 border-white/30 border-t-white rounded-full"
              />
              
              {/* Círculo interior giratorio (dirección opuesta) */}
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-24 h-24 border-4 border-transparent border-b-cyan-400 rounded-full"
              />
              
              {/* Logo MMM centrado */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/MMM_Logo.svg" 
                  alt="MMM Logo" 
                  className="w-16 h-16 object-contain"
                />
              </div>
            </motion.div>
            
            {/* Texto de carga con animación de puntos */}
            <motion.div
              className="flex items-center gap-2"
            >
              <motion.p
                className="text-white text-lg font-semibold uppercase tracking-wider"
              >
                Cargando
              </motion.p>
              <div className="flex gap-1">
                {[0, 1, 2].map((index) => (
                  <motion.span
                    key={index}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="text-white text-lg font-bold"
                  >
                    .
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            {/* Barra de progreso decorativa */}
            <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

