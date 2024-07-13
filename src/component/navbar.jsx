import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/Navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/Register');
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border border-2">
      <div className="container-fluid">
        {/* Uncomment and use the logo if needed */}
        {/* <Link className="navbar-brand" to="#">
          <img src={images.utkarsh} alt="utkarsh" className="d-inline-block align-top" style={{ width: '50px', height: '50px' }} />
        </Link> */}
        <button className="navbar-toggler" type="button" onClick={handleToggle} aria-controls="navbarNav" aria-expanded={toggle} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${toggle ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Resume">Resume</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
