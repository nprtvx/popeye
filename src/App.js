import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { AuthProvider } from './contexts/AuthContext';
import './App.css'; // Import the CSS file

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          //<Header />
          <main>
            <Routes> {/* Updated Switch to Routes */}
              <Route exact path="/" element={<HomePage />} /> {/* Updated component to element */}
              <Route path="/about" element={<AboutPage />} /> {/* Updated component to element */}
              <Route path="/login" element={<LoginPage />} /> {/* Updated component to element */}
              <Route path="/signup" element={<SignupPage />} /> {/* Updated component to element */}
              {/* Add more routes here */}
            </Routes>
          </main>
          //<Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
