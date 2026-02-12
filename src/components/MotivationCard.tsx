import styles from './MotivationCard.module.css';
import type { Quote } from '../data/motivation';
import { Lock, Quote as QuoteIcon } from 'lucide-react';

interface MotivationCardProps {
    quote: Quote;
    isToday: boolean;
}

const MotivationCard = ({ quote, isToday }: MotivationCardProps) => {
    if (!isToday && quote.isLocked) {
        return (
            <div className={`${styles.card} ${styles.locked}`}>
                <Lock size={24} className={styles.lockIcon} />
                <span className={styles.dayNum}>Day {quote.day}</span>
            </div>
        );
    }

    return (
        <div className={`${styles.card} ${isToday ? styles.today : ''}`}>
            <div className={styles.dayNumber}>{quote.day}</div>
            {isToday && <div className={styles.todayBadge}>Motivation of the Day</div>}
            <div className={styles.content}>
                <QuoteIcon size={24} className={styles.quoteIcon} />
                <p className={styles.quoteText}>"{quote.quote}"</p>
                <div className={styles.footer}>
                    <span className={styles.author}>— {quote.author}</span>
                </div>
                <div className={styles.divider} />
                <div className={styles.contextBox}>
                    <span className={styles.chefHat}>👨‍🍳</span>
                    <p className={styles.context}>{quote.context}</p>
                </div>
            </div>
            <div className={styles.dayTag}>Day {quote.day}</div>
        </div>
    );
};

export default MotivationCard;
