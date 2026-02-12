import type { ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Zap, User, Coffee } from 'lucide-react';
import styles from './Layout.module.css';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const { pathname } = useLocation();

    const isLessonPage = pathname.includes('/lesson/');

    return (
        <div className={styles.container}>
            {/* Header - Only show on main pages */}
            {!isLessonPage && (
                <header className={styles.header}>
                    <h1 className={styles.logo}>Resolve<span className={styles.kitchen}>Kitchen</span></h1>
                </header>
            )}

            {/* Main Content */}
            <main className={`${styles.main} ${isLessonPage ? styles.fullHeight : ''}`}>
                {children}
                {!isLessonPage && (
                    <footer className={styles.footer}>
                        Powered by Nabil Visual Solutions
                    </footer>
                )}
            </main>

            {/* Bottom Navigation - Hide on Lesson Page */}
            {!isLessonPage && (
                <nav className={styles.bottomNav}>
                    <NavLink to="/" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
                        <Home size={24} />
                        <span>Learn</span>
                    </NavLink>

                    <NavLink to="/shortcuts" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
                        <Zap size={24} />
                        <span>Shortcuts</span>
                    </NavLink>

                    <NavLink to="/motivation" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
                        <Coffee size={24} />
                        <span>Daily</span>
                    </NavLink>

                    <NavLink to="/profile" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
                        <User size={24} />
                        <span>Profile</span>
                    </NavLink>
                </nav>
            )}
        </div>
    );
};

export default Layout;
