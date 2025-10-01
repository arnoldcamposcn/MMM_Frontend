import React, { useState, useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
  };

  const onAnimationEnd = () => {
    if (isClosing) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className={`modal-content ${isClosing ? 'modal-close' : 'modal-open'}`}
        onAnimationEnd={onAnimationEnd}
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-10 text-white text-5xl font-bold z-20"
          aria-label="Cerrar modal"
        >
          &times;
        </button>
        <img src={imageUrl} alt="Portfolio" className="w-full h-auto object-contain max-h-[85vh] rounded-lg" />
      </div>
    </div>
  );
};
