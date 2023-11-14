'use client';
import { motion } from 'framer-motion';
import s from './intro.module.css';

function Intro() {
  const greetingVariants = {
    hidden: {
      x: -500,
      y: 150,
      opacity: 0,
      minWidth: '3rem',
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      minWidth: '25rem',
    },
  };

  const teaserVariants = {
    hidden: {
      x: 200,
      opacity: 0,
      display: 'none',
    },
    visible: {
      x: [100, 0, -50],
      opacity: [0, 1, 0],
      display: 'block',
      transition: {
        duration: 5,
        delay: 3,
        times: [0, 0.8, 1],
      },
      transitionEnd: {
        display: 'none',
      },
    },
  };

  const broadRevealVariants = {
    hidden: {
      display: 'none',
      opacity: 0,
    },
    visible: {
      opacity: 1,
      display: 'flex',
      transition: {
        duration: 4,
        delay: 8,
      },
    },
  };

  const textHideVariants = {
    hidden: {
      opacity: 0,
      display: 'none',
    },
    visible: {
      display: 'block',
      opacity: [0, 1, 0],
      transition: {
        duration: 5.8,
        delay: 8.5,
        times: [0, 0.8, 1],
      },
      transitionEnd: {
        display: 'none',
      },
    },
  };

  const textRevealVariants = {
    hidden: {
      display: 'none',
      opacity: 0,
    },
    visible: {
      opacity: 1,
      display: 'block',
      transition: {
        duration: 3,
        delay: 15,
      },
    },
  };

  return (
    <article className={`${s.info} ${s.infoConsistent}`}>
      <motion.div
        className={s.textBlock}
        initial={'hidden'}
        animate={'visible'}
        transition={{
          duration: 1,
          delay: 1,
        }}
        variants={greetingVariants}
      >
        <motion.p
          initial={{ opacity: 0, display: 'none' }}
          animate={{
            opacity: 1,
            display: 'block',
          }}
          transition={{
            delay: 2.5,
          }}
        >
          Привет тебе, мой юный падава…&nbsp;MQA-специалист!
        </motion.p>
      </motion.div>

      <motion.p
        initial={'hidden'}
        animate={'visible'}
        variants={teaserVariants}
      >
        Вестимо и тебя отправили учиться
      </motion.p>
      <motion.div
        className={s.info}
        initial={'hidden'}
        animate={'visible'}
        variants={broadRevealVariants}
      >
        <p className={`smallCaps`}>
          здесь собраны&nbsp;
          <a href={`/auditorium`} className={s.subtleLink}>
            инструкции
          </a>
        </p>
        <motion.p
          initial={'hidden'}
          animate={'visible'}
          variants={textHideVariants}
        >
          ...как тебе настроить окружение и развернуть вверенный тебе
          Frontend-проект, чтобы ты мог запустить в него свои шаловливые ручки
          еще до мержа изменений в develop-ветку.
        </motion.p>
        <motion.p
          initial={'hidden'}
          animate={'visible'}
          variants={textRevealVariants}
        >
          Собранная здесь информация является общедоступной и лежит по всему
          интернету, но меня пнул мой ПМ с наставлением, что &quot;все должно
          быть задокументировано&quot;… так что
        </motion.p>
        <motion.p
          className={`smallCaps`}
          initial={'hidden'}
          animate={'visible'}
          variants={textRevealVariants}
        >
          авторизуйся удобным способом и...
        </motion.p>
      </motion.div>
    </article>
  );
}

export { Intro };
