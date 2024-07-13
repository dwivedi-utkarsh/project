import React from "react";
import '../component/Home.css';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import utkarsh from '../../public/images/utkarsh.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Resume");
  };

  return (
    <div className="container mt-5 ">
      <div className="row border p-4">
        <div className="col-md-4 text-center">
          <div className="mb-3">
            <img src={utkarsh} className="img-fluid rounded-circle" alt="Profile" />
          </div>
          <h3 className="mb-2">Utkarsh Dwivedi</h3>
          <h5>React js Developer</h5>
        </div>

        <div className="col-md-8">
          <div className="mt-4">
            <h2><u>About Me</u></h2>
            <p className="mt-3">
              Hi there! I'm a first-year computer science engineering student from Lucknow, India, proficient in creating web applications. I enjoy turning complex problems into simple, beautiful, and intuitive web applications. My expertise includes building websites using the latest full stack technology so that it is functional and user-friendly but at the same time attractive. Moreover, I am always eager to learn and adapt to new technologies and frameworks, as I strive to stay up-to-date with the latest industry trends. I am open to exciting opportunities where I can contribute my expertise and make a meaningful impact.
            </p>
            <button className="btn btn-secondary" onClick={handleClick}>Resume</button>
          </div>
        </div>
      </div>

      <div className="  mt-5 p-4  ">
        <h2 className="mb-4"><u>Skills</u></h2>
        <div className="row">
          <div className="Programming-Languages col-md-6 mb-3">
            <div className="border p-3 bg-light">
              <h4>Programming Languages</h4>
              <p>Python, JavaScript</p>
            </div>
          </div>
          <div className=" Databases col-md-6 mb-3 ">
            <div className="border p-3 bg-light">
              <h4>Databases</h4>
              <p>SQL, MongoDB, MySQL</p>
            </div>
          </div>
          <div className=" frontend col-md-6 mb-3">
            <div className=" border p-3 bg-light">
              <h4>Frontend</h4>
              <p>React, CSS, HTML, Bootstrap, Tailwind CSS, JavaScript</p>
            </div>
          </div>
          <div className=" Backend col-md-6 mb-3 ">
            <div className="border p-3 bg-light">
              <h4>Backend</h4>
              <p>Python</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
