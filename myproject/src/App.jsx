import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Motive from './components/Motive';
import Interest from './components/Interest';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/motive" element={<Motive />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
