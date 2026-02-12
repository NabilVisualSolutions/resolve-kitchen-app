import { useState } from 'react';
import { Search } from 'lucide-react';
import { shortcuts } from '../data/shortcuts';
import styles from './Shortcuts.module.css';

const Shortcuts = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isMac, setIsMac] = useState(true); // Default to Mac

    const filteredShortcuts = shortcuts.filter(shortcut => {
        const keys = isMac ? shortcut.keysMac : shortcut.keysPc;
        return (
            shortcut.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            keys.join(' ').toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    // Group by category
    const groupedShortcuts = filteredShortcuts.reduce((acc, shortcut) => {
        if (!acc[shortcut.category]) acc[shortcut.category] = [];
        acc[shortcut.category].push(shortcut);
        return acc;
    }, {} as Record<string, typeof shortcuts>);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.searchBar}>
                    <Search size={20} className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search shortcuts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.input}
                    />
                </div>
            </div>

            <div className={styles.toggleContainer}>
                <span className={!isMac ? styles.activePlatform : ''}>PC</span>
                <label className={styles.switch}>
                    <input
                        type="checkbox"
                        checked={isMac}
                        onChange={() => setIsMac(!isMac)}
                    />
                    <span className={styles.slider}></span>
                </label>
                <span className={isMac ? styles.activePlatform : ''}>Mac</span>
            </div>

            <div className={styles.list}>
                {Object.entries(groupedShortcuts).map(([category, items]) => (
                    <div key={category} className={styles.categorySection}>
                        <h3 className={styles.categoryTitle}>{category}</h3>
                        {items.map(item => (
                            <div key={item.id} className={styles.row}>
                                <span className={styles.description}>{item.description}</span>
                                <div className={styles.keys}>
                                    {(isMac ? item.keysMac : item.keysPc).map((key, i) => (
                                        <span key={i} className={styles.key}>{key}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                {filteredShortcuts.length === 0 && (
                    <div className={styles.empty}>No shortcuts found</div>
                )}
            </div>
        </div>
    );
};

export default Shortcuts;
