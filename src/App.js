// 라이브러리
import { Routes, Route, Link } from 'react-router-dom' // router

// components
import Header from './components/Header' // Header
import Footer from './components/Footer' // Footer
import Nav from './components/Nav' // Nav(Intro, Resume, Contact)
import Profile from './components/Profile'

// pages
import Intro from './pages/Intro' // 자기소개
import Resume from './pages/Resume' // 이력서(학력 - 경력 - 사용 스택 - 자격증)
import Contact from './pages/Contact' // 연락처

// css
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Profile/>
      <Nav/>
      
      <Routes>
        <Route path="/" element={<Intro/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
