import { motion } from 'framer-motion';
import { CheckCircle, Lock, PlayCircle } from 'lucide-react';
import type { Lesson } from '../data/lessons';
import { Link } from 'react-router-dom';
import styles from './LessonCard.module.css';

interface LessonCardProps {
    lesson: Lesson;
    isUnlocked: boolean;
    isCompleted: boolean;
    index: number;
}

const LessonCard = ({ lesson, isUnlocked, isCompleted, index }: LessonCardProps) => {
    // Stagger animation based on index
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { delay: index * 0.05 } }
    };

    const Content = (
        <motion.div
            className={`${styles.card} ${isUnlocked ? styles.unlocked : styles.locked} ${isCompleted ? styles.completed : ''}`}
            variants={variants}
            initial="hidden"
            animate="visible"
            whileHover={isUnlocked ? { scale: 1.02 } : {}}
            whileTap={isUnlocked ? { scale: 0.98 } : {}}
        >
            <div className={styles.iconContainer}>
                {isCompleted ? (
                    <CheckCircle size={28} className={styles.completedIcon} />
                ) : isUnlocked ? (
                    <PlayCircle size={28} className={styles.playIcon} />
                ) : (
                    <Lock size={28} className={styles.lockIcon} />
                )}
            </div>

            <div className={styles.info}>
                <h3 className={styles.title}>{lesson.title}</h3>
                <p className={styles.summary}>{lesson.summary}</p>
                <div className={styles.meta}>
                    <span className={styles.xp}>{lesson.xp} XP</span>
                    <span className={styles.level}>{lesson.level}</span>
                </div>
            </div>
        </motion.div>
    );

    return isUnlocked ? (
        <Link to={`/lesson/${lesson.id}`} style={{ textDecoration: 'none' }}>
            {Content}
        </Link>
    ) : (
        Content
    );
};

export default LessonCard;
