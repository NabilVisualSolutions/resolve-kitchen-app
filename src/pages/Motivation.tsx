import { useState } from 'react';
import { quotes } from '../data/motivation';
import MotivationCard from '../components/MotivationCard';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Motivation.module.css';

const Motivation = () => {
    // Current day of the month (1-31)
    const today = new Date().getDate();
    // Ensure valid index for today's quote
    const todayIndex = (today - 1) % quotes.length;

    // State for expanded card
    const [selectedQuoteId, setSelectedQuoteId] = useState<number | null>(null);

    const handleCardClick = (id: number) => {
        setSelectedQuoteId(id);
    };

    const handleClose = () => {
        setSelectedQuoteId(null);
    };

    const selectedQuote = quotes.find(q => q.id === selectedQuoteId);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h2 className={styles.title}>Chef's Daily Inspiration</h2>
                <p className={styles.subtitle}>Fuel for your creative soul</p>
            </header>

            {/* Today's Featured Card */}
            <div className={styles.featuredSection}>
                <MotivationCard quote={quotes[todayIndex]} isToday={true} />
            </div>

            {/* Archive Grid */}
            <div className={styles.archiveSection}>
                <h3 className={styles.sectionTitle}>Archive</h3>
                <div className={styles.archiveGrid}>
                    {quotes.map((quote) => {
                        // Skip today's card in the archive grid? 
                        // User request: "make the archive cards collapse with a small square with the number"
                        // We will show all or skip today. Let's show all for completeness, or focus on past?
                        // "Archive" usually implies past. But showing the whole calendar is nice.
                        // Let's show all 31 days (or however many quotes we have).
                        const isToday = quote.day === today;

                        return (
                            <motion.button
                                key={quote.id}
                                className={`${styles.daySquare} ${isToday ? styles.currentDaySquare : ''}`}
                                onClick={() => handleCardClick(quote.id)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className={styles.dayNumber}>{quote.day}</span>
                            </motion.button>
                        );
                    })}
                </div>
            </div>

            {/* Full Screen Overlay for Selected Quote */}
            <AnimatePresence>
                {selectedQuote && (
                    <motion.div
                        className={styles.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                    >
                        <motion.div
                            className={styles.overlayContent}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()} // Prevent close on content click
                        >
                            <button className={styles.closeBtn} onClick={handleClose}>
                                <X size={24} />
                            </button>
                            <MotivationCard
                                quote={{ ...selectedQuote, isLocked: false }}
                                isToday={selectedQuote.day === today}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Motivation;
