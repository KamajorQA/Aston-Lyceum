'use client';
import { motion } from 'framer-motion';
import s from './goButton.module.css';

function GoButton() {
  const textRevealVariants = {
    hidden: {
      opacity: 0.5,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 16,
      },
    },
  };

  return (
    <motion.div
      className={s.goButton}
      initial={'hidden'}
      animate={'visible'}
      variants={textRevealVariants}
    >
      <a href={`/auditorium`} className={`actionButton smallCaps`}>
        поехали!
      </a>
    </motion.div>
  );
}

export { GoButton };
