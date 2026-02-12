import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useUser } from './contexts/UserContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shortcuts from './pages/Shortcuts';
import Profile from './pages/Profile';
import LessonView from './pages/LessonView';
import Motivation from './pages/Motivation';
import Login from './pages/Login';

const ProtectedRoute = ({ children }: { children: any }) => {
  const { user } = useUser();
  const location = useLocation();

  if (!user.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/shortcuts" element={<ProtectedRoute><Shortcuts /></ProtectedRoute>} />
          <Route path="/motivation" element={<ProtectedRoute><Motivation /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/lesson/:id" element={<ProtectedRoute><LessonView /></ProtectedRoute>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
