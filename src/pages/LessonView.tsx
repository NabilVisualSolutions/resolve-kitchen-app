import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { ArrowLeft, ArrowUp, ArrowDown, FileText } from 'lucide-react';
import styles from './LessonView.module.css';

const LessonView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { lessons, completeLesson } = useUser();
    const [currentSlide, setCurrentSlide] = useState(0);

    const lesson = lessons.find(l => l.id === Number(id));

    if (!lesson) return <div>Lesson not found</div>;

    // Parse content into slides based on headers (#)
    const rawSlides = lesson.content.split(/(?=^#{1,3} )/m).filter(Boolean).map(s => s.trim());

    // Filter to ensure we don't have empty slides or just the main title if it's redundant
    const slides = rawSlides.filter((slide, index) => {
        if (index === 0 && slide.startsWith('# ')) return false; // Skip H1 title slide
        return true;
    });

    const finalSlides = slides.length > 0 ? slides : rawSlides;

    const isLastSlide = currentSlide === finalSlides.length - 1;
    const isFirstSlide = currentSlide === 0;
    const progress = ((currentSlide + 1) / finalSlides.length) * 100;

    const handleNext = () => {
        if (isLastSlide) {
            completeLesson(lesson.id);
            navigate('/');
        } else {
            setCurrentSlide(curr => curr + 1);
        }
    };

    const handleBack = () => {
        if (isFirstSlide) return;
        setCurrentSlide(curr => curr - 1);
    };

    const showLessonImage = isFirstSlide && lesson.image;

    // Get the PDF page number for this slide
    const pdfPageNumber = lesson.pdfPages && lesson.pdfPages[currentSlide]
        ? lesson.pdfPages[currentSlide]
        : currentSlide + 1;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button onClick={() => navigate('/')} className={styles.backBtn} title="Back to Kitchen">
                    <ArrowLeft size={20} />
                </button>
                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                </div>
            </div>

            <div className={styles.slideContainer}>
                <div className={styles.slideContent}>

                    {/* Visual Area: Either Lesson Image (1st slide) or PDF Reference */}
                    {showLessonImage ? (
                        <img src={lesson.image} alt={lesson.title} className={styles.lessonImage} />
                    ) : (
                        <div className={styles.pdfReference}>
                            <FileText size={64} className={styles.pdfIcon} />
                            <h3>📖 DaVinci Resolve Beginner's Guide</h3>
                            <div className={styles.pageReference}>
                                <p className={styles.referenceText}>For more details, see:</p>
                                <p className={styles.pageNumber}>Page {pdfPageNumber}</p>
                            </div>
                            <p className={styles.hint}>Open the PDF guide to follow along</p>
                        </div>
                    )}

                    <div className={styles.markdownText}>
                        {finalSlides[currentSlide]}
                    </div>

                    <div className={styles.navigation}>
                        <button
                            onClick={handleBack}
                            disabled={isFirstSlide}
                            className={styles.navBtn}
                        >
                            <ArrowUp size={18} /> Back
                        </button>

                        <span className={styles.slideCounter}>
                            {currentSlide + 1} / {finalSlides.length}
                        </span>

                        <button
                            onClick={handleNext}
                            className={`${styles.navBtn} ${styles.navBtnPrimary}`}
                        >
                            {isLastSlide ? "Complete" : "Next"} <ArrowDown size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonView;
