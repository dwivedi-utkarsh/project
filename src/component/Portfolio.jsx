import React from 'react';
import crud from '../../public/images/crud.jpg';
import billMenu from '../../public/images/bill-menu.jpg';
import weather from '../../public/images/weather.jpg';
import todo from '../../public/images/todo.jpg';

const Projects = [
  {
    imgUrl: crud,
    url: "https://crud-react-application-project.netlify.app/",
    title: "CRUD Application",
  },
  {
    imgUrl: weather,
    url: "https://weather-app-04e95f.netlify.app",
    title: "Weather App",
  },
  {
    imgUrl: billMenu,
    url: "https://bill-management-project.netlify.app/",
    title: "Bill Menu",
  },
  {
    imgUrl: todo,
    url: "https://todolist-react-utkarsh.netlify.app/",
    title: "Todo-List",
  },
];

const Portfolio = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h1>My Portfolio</h1>
        </div>
      </div>
      <div className="row">
        {Projects.map((project, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4 text-center">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img 
                src={project.imgUrl} 
                alt={project.title} 
                className="img-fluid mb-2" 
                style={{ maxHeight: '200px' }} 
              />
              <p>{project.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
