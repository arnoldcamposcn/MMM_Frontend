import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl }) => {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div 
          key="modal"
          className="modal-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <button
              onClick={onClose}
              className="absolute -top-2 -right-10 text-white text-5xl font-bold z-20"
              aria-label="Cerrar modal"
            >
              &times;
            </button>
            <img src={imageUrl} alt="Portfolio" className="w-[600px] h-[400px] object-cover rounded-lg" />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
