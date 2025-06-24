import Navbar from "./components/Navbar";
import About from "./pages/About";
import HomePage from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import ProjectDetail from './pages/projectdetail';


const App = () => {
  return (
    <Router>
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-8">
          <Navbar />
        </div>
      </div>

      <div className="h-20" />

      {/* Main Content */}
      <div className="container mx-auto px-8">
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/about" element={<About/>} />
            <Route path="/works" element={<Project />} />
            <Route path="/resume" element={<Resume />}/> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
      </div>

    </Router>
  );
};

export default App;
