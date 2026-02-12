import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import styles from './Login.module.css';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login, signup } = useUser();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (isSignUp) {
            if (!name || !username || !password) {
                setError('Please fill in all fields');
                return;
            }
            signup(name, username, password);
            navigate('/');
        } else {
            if (login(username, password)) {
                navigate('/');
            } else {
                setError('Invalid credentials');
            }
        }
    };

    const toggleMode = () => {
        setIsSignUp(!isSignUp);
        setError('');
        setName('');
        setUsername('');
        setPassword('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.logo}>Resolve<span className={styles.kitchen}>Kitchen</span></h1>
                <p className={styles.subtitle}>{isSignUp ? "Join the Kitchen" : "Chef's Entrance"}</p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    {isSignUp && (
                        <div className={styles.inputGroup}>
                            <label>Full Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your Name"
                            />
                        </div>
                    )}

                    <div className={styles.inputGroup}>
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                        />
                    </div>

                    {error && <p className={styles.error}>{error}</p>}

                    <button type="submit" className={styles.loginBtn}>
                        {isSignUp ? "Start Cooking (Sign Up)" : "Enter Kitchen"}
                    </button>

                    <button type="button" onClick={toggleMode} className={styles.toggleBtn}>
                        {isSignUp ? "Already have an account? Sign In" : "New here? Create an Account"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
