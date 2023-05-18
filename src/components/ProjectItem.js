import React from "react";


function ProjectItem({ name, about, technologies }) {
  // const technology= technologies.map((technology)=>{return <span id={technology}>{technology}</span>})
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
    {technologies.map((technology)=>{return <span key={technology}>{technology}</span>})}
      </div>
    </div>
  );
}

export default ProjectItem;
