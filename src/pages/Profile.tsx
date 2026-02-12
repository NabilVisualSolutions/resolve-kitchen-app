import { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun, Edit2, Lock, LogOut, RotateCcw } from 'lucide-react';
import { achievements } from '../data/achievements';
import styles from './Profile.module.css';

const Profile = () => {
    const { user, updateUserName, updateEmail, changePassword, logout, resetProgress } = useUser();
    const { theme, toggleTheme } = useTheme();

    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);

    const [newName, setNewName] = useState(user.name);
    const [newEmail, setNewEmail] = useState(user.email);

    const handleSaveName = () => {
        updateUserName(newName);
        setIsEditingName(false);
    };

    const handleSaveEmail = () => {
        updateEmail(newEmail);
        setIsEditingEmail(false);
    };

    const handleResetProgress = () => {
        if (window.confirm("Are you sure you want to reset your progress? This cannot be undone.")) {
            resetProgress();
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.avatar}>
                    {user.name.charAt(0)}
                </div>

                <div className={styles.userInfo}>
                    {/* Name Edit */}
                    {isEditingName ? (
                        <div className={styles.editRow}>
                            <input
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                className={styles.inputField}
                                autoFocus
                            />
                            <button onClick={handleSaveName} className={styles.saveBtn}>Save</button>
                        </div>
                    ) : (
                        <h2 className={styles.name} onClick={() => setIsEditingName(true)}>
                            {user.name} <Edit2 size={16} className={styles.editIcon} />
                        </h2>
                    )}

                    {/* Email Edit */}
                    {isEditingEmail ? (
                        <div className={styles.editRow}>
                            <input
                                value={newEmail}
                                onChange={(e) => setNewEmail(e.target.value)}
                                className={styles.inputField}
                                autoFocus
                            />
                            <button onClick={handleSaveEmail} className={styles.saveBtn}>Save</button>
                        </div>
                    ) : (
                        <p className={styles.email} onClick={() => setIsEditingEmail(true)}>
                            {user.email || "Add Email"} <Edit2 size={14} className={styles.editIcon} />
                        </p>
                    )}

                    <span className={styles.levelBadge}>Level {user.level} Editor</span>
                </div>
            </header>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <span className={styles.statValue}>{user.xp}</span>
                    <span className={styles.statLabel}>Total XP</span>
                </div>
                <div className={styles.statCard}>
                    <span className={styles.statValue}>{user.completedLessons.length}</span>
                    <span className={styles.statLabel}>Lessons</span>
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Kitchen Badges</h3>
                <div className={styles.badgesGrid}>
                    {achievements.map((achievement) => {
                        const isUnlocked = achievement.condition(user);
                        return (
                            <div
                                key={achievement.id}
                                className={`${styles.badgeBox} ${isUnlocked ? styles.badgeUnlocked : styles.badgeLocked}`}
                                title={`${achievement.title}: ${achievement.description}`}
                            >
                                <div className={styles.badgeIcon}>{achievement.icon}</div>
                                {isUnlocked && <span className={styles.badgeCheck}>✓</span>}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Settings</h3>

                <div className={styles.settingsList}>
                    <button className={styles.settingRow} onClick={toggleTheme}>
                        <div className={styles.settingInfo}>
                            {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                            <span>Dark Mode</span>
                        </div>
                        <div className={`${styles.toggle} ${theme === 'dark' ? styles.active : ''}`}>
                            <div className={styles.toggleKnob} />
                        </div>
                    </button>

                    <button
                        className={styles.settingRow}
                        onClick={() => {
                            const newPass = prompt("Enter new password:");
                            if (newPass) changePassword(newPass);
                        }}
                    >
                        <div className={styles.settingInfo}>
                            <Lock size={20} />
                            <span>Change Password</span>
                        </div>
                        <Edit2 size={16} />
                    </button>

                    <button
                        className={`${styles.settingRow} ${styles.dangerRow}`}
                        onClick={handleResetProgress}
                    >
                        <div className={styles.settingInfo}>
                            <RotateCcw size={20} />
                            <span>Reset Progress</span>
                        </div>
                    </button>

                    <button
                        className={`${styles.settingRow} ${styles.dangerRow}`}
                        onClick={logout}
                    >
                        <div className={styles.settingInfo}>
                            <LogOut size={20} />
                            <span>Log Out</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
