import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Home = lazy(() => import('./Components/Home'));
const About = lazy(() => import('./Components/About'));
const Mlbb = lazy(() => import('./Components/Mlbb'));
const Step = lazy(() => import('./Components/Step'));




const App = () => (
  <Router>
    <Suspense fallback={<div>Mengko Disit dela...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Mlbb" element={<Mlbb />} />
        <Route path="/Step" element={<Step />} />



      </Routes>
    </Suspense>
  </Router>
);
export default App;