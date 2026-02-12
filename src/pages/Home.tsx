import { useUser } from '../contexts/UserContext';
import LessonCard from '../components/LessonCard';
import styles from './Home.module.css';

const Home = () => {
    const { user, lessons } = useUser();

    // Determine last completed lesson index to unlock next
    const lastCompletedId = user.completedLessons.length > 0
        ? Math.max(...user.completedLessons)
        : 0;

    // Logic: Unlock all lessons up to lastCompletedId + 1
    // For demo purposes, let's unlock the first uncompleted one plus all previous
    // Or just unlock everything sequentially. Duolingo unlocks next upon completion.

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.welcome}>
                    <h2>Welcome back, {user.name.split(' ')[0]}!</h2>
                    <p>Ready to continue your journey?</p>
                </div>
                <div className={styles.stats}>
                    <div className={styles.statChip}>
                        <span className={styles.fireIcon}>🔥</span>
                        <span>{user.completedLessons.length}</span>
                    </div>
                    <div className={styles.statChip}>
                        <span className={styles.starIcon}>⭐</span>
                        <span>{user.xp}</span>
                    </div>
                </div>
            </header>

            <div className={styles.pathContainer}>
                {lessons.map((lesson, index) => {
                    const isCompleted = user.completedLessons.includes(lesson.id);
                    const isUnlocked = isCompleted || lesson.id === lastCompletedId + 1 || lesson.id === 1; // Always unlock 1

                    return (
                        <LessonCard
                            key={lesson.id}
                            lesson={lesson}
                            isUnlocked={isUnlocked}
                            isCompleted={isCompleted}
                            index={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
