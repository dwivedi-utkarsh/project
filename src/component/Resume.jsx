import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resume.css';

const Resume = () => {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h1>Utkarsh Dwivedi</h1>
        <p className="lead">Full Stack Developer</p>
      </div>

      <section className="contact mb-4">
        <h2>Contact Information</h2>
        <p>
          Email:{" "}
          <a href="mailto:utkarsh.dwivedi@example.com">
            utkarshd723@gmail.com
          </a>
        </p>
        <p>Phone: +91 6386728248</p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/utkarshdwivedi">
            linkedin.com/in/utkarshdwivedi
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/utkarshdwivedi">
            github.com/utkarshdwivedi
          </a>
        </p>
      </section>

      <section className="summary mb-4">
        <h2>Professional Summary</h2>
        <p>
          Passionate Full Stack Developer with expertise in front-end (HTML,
          CSS, JavaScript) and back-end ( Python) technologies. Eager to
          contribute fresh ideas, collaborate with teams, and drive innovation
          in web development projects. Ready to learn and adapt to new
          challenges in a dynamic environment
        </p>
        </section>
      

      <section className="education mb-4">
        <h2>Education</h2>
        <p>
          CVS Memorial College, UP Board
          <br />
          12th Class 2022 – 2023
        </p>
        <p>
          Integral University Lucknow
          <br />
          Bachelor of Computer Applications 2023 – Pursuing
        </p>
      </section>

      <section className='Certification'>
      <h2>Certification</h2>
      <p>full stack,DUCAT The IT Training Institute,Delhi</p>

      </section>

      <section className='Projects'>
      <h2>Projects</h2>
      <p>Bill-management</p>
      <p>Crud-application</p>
      <p>Weather-app</p>

      </section>

      <section className="DECLARATION mb-4">
        <h2>DECLARATION</h2>
        <p>
          I solemnly declare the information mentioned herein is true and
          correct to the best of my beliefs
        </p>
      </section>

      <section className="skills mb-4">
        <h2>My Skills Performance Measure</h2>
        <ul className="list-unstyled">
          <li className="mb-2">
            <span>JavaScript: 75%</span>
            <div className="progress">
              <div
                className="progress-bar bg-warning"
                style={{ width: "75%" }}
              ></div>
            </div>
          </li>
          <li className="mb-2">
            <span>React: 80%</span>
            <div className="progress">
              <div
                className="progress-bar bg-warning"
                style={{ width: "80%" }}
              ></div>
            </div>
          </li>
          <li className="mb-2">
            <span>HTML: 90%</span>
            <div className="progress">
              <div
                className="progress-bar bg-warning"
                style={{ width: "90%" }}
              ></div>
            </div>
          </li>
          <li className="mb-2">
            <span>CSS: 80%</span>
            <div className="progress">
              <div
                className="progress-bar bg-warning"
                style={{ width: "80%" }}
              ></div>
            </div>
          </li>
          <li className="mb-2">
            <span>RESTful APIs: 80%</span>
            <div className="progress">
              <div
                className="progress-bar bg-warning"
                style={{ width: "80%" }}
              ></div>
            </div>
          </li>
          <li className="mb-2">
            <span>GitHub: 60%</span>
            <div className="progress">
              <div
                className="progress-bar bg-warning"
                style={{ width: "60%" }}
              ></div>
            </div>
          </li>
          <li className="mb-2">
            <span>Bootstrap: 80%</span>
            <div className="progress">
              <div
                className="progress-bar bg-warning"
                style={{ width: "80%" }}
              ></div>
            </div>
          </li>
          <li className="mb-2">
            <span>Python: 75%</span>
            <div className="progress">
              <div
                className="progress-bar bg-warning"
                style={{ width: "75%" }}
              ></div>
            </div>
          </li>
          <li className="mb-2">
            <span>MySQL: 75%</span>
            <div className="progress">
              <div
                className="progress-bar bg-warning"
                style={{ width: "75%" }}
              ></div>
            </div>
          </li>
          <li className="mb-2">
            <span>Tailwind CSS: 75%</span>
            <div className="progress">
              <div
                className="progress-bar bg-warning"
                style={{ width: "75%" }}
              ></div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
