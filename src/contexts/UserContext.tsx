import { createContext, useContext, useState, type ReactNode } from 'react';
import { lessons as initialLessons, type Lesson } from '../data/lessons';

export interface User {
    name: string;
    email: string;
    level: number;
    xp: number;
    completedLessons: number[];
    username?: string;
    password?: string;
    isAuthenticated?: boolean;
}

interface UserContextType {
    user: User;
    lessons: Lesson[];
    login: (username: string, pass: string) => boolean;
    signup: (name: string, username: string, pass: string) => void;
    logout: () => void;
    changePassword: (newPass: string) => void;
    completeLesson: (lessonId: number) => void;
    updateUserName: (name: string) => void;
    updateEmail: (email: string) => void;
    resetProgress: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const defaultUser: User = {
        name: "Joe Sallam",
        email: "joe@example.com",
        username: "admin",
        password: "password", // Default password
        level: 1,
        xp: 0,
        completedLessons: [],
        isAuthenticated: false
    };

    const [user, setUser] = useState<User>(defaultUser);

    const [lessons] = useState<Lesson[]>(initialLessons);

    const login = (username: string, pass: string) => {
        // Mock auth: check against current user state or hardcoded admin
        if ((username === user.username && pass === user.password) || (username === 'admin' && pass === 'password')) {
            setUser(prev => ({ ...prev, isAuthenticated: true }));
            return true;
        }
        return false;
    };

    const signup = (name: string, username: string, pass: string) => {
        setUser({
            name,
            email: "",
            username,
            password: pass,
            level: 1,
            xp: 0,
            completedLessons: [],
            isAuthenticated: true
        });
    };

    const logout = () => {
        setUser(prev => ({ ...prev, isAuthenticated: false }));
    };

    const changePassword = (newPassword: string) => {
        setUser(prev => ({ ...prev, password: newPassword }));
    };

    const completeLesson = (lessonId: number) => {
        if (user.completedLessons.includes(lessonId)) return;

        const lesson = lessons.find(l => l.id === lessonId);
        const xpGain = lesson ? lesson.xp : 50;

        // Check for level up
        const newXp = user.xp + xpGain;
        const newLevel = Math.floor(newXp / 500) + 1;

        setUser(prev => ({
            ...prev,
            xp: newXp,
            level: newLevel,
            completedLessons: [...prev.completedLessons, lessonId]
        }));
    };

    const updateUserName = (name: string) => {
        setUser(prev => ({ ...prev, name }));
    };

    const updateEmail = (email: string) => {
        setUser(prev => ({ ...prev, email }));
    };

    const resetProgress = () => {
        setUser(prev => ({
            ...prev,
            level: 1,
            xp: 0,
            completedLessons: []
        }));
    };

    return (
        <UserContext.Provider value={{ user, lessons, login, signup, logout, changePassword, completeLesson, updateUserName, updateEmail, resetProgress }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
