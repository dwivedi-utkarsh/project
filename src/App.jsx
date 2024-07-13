import './App.css';
import Navbar from './component/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home'
import Resume from './component/Resume'
import Portfolio from './component/Portfolio';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Resume" element={<Resume/>}></Route>
          <Route path="/Portfolio" element={<Portfolio/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
