import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import ContentSection from './components/contentSection/contentSection';
import Education from './pages/education/education';
import Skill from './pages/skill/skill';
import Achivement from './pages/achivement/achivement';
import Layout from './components/layout/layout';
import Project from './pages/project/project';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Navbar/>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<ContentSection />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/acheivement" element={<Achivement />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
