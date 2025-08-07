import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { usePageTitle } from './hooks/usePageTitle';

// Home page component
const HomePage = () => {
  usePageTitle('GitDeploy - Deploy Git Repositories Instantly');
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <ContactUs />
      <Footer />
    </>
  );
};

// Layout component to conditionally render Navbar
const Layout = () => {
  const location = useLocation();
  const hideNavbar = ['/signin', '/signup'].includes(location.pathname);

  return (
    <div className="min-h-screen">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;