import Heading from "../Heading";
import ProjectCard from "../ProjectCard";
import Title from "../Title";
import "./project.css";
const Projects = () => {
  return (
    <div className="total-projects">
      <Title title="PORTFOLIO" />
      <Heading heading="Featured Projects" />
      <div className="all-projects">
        <ProjectCard
          projectNumber="Project 1"
          feature="Reactjs , Nextjs , Mern , CSS,"
        />
        <ProjectCard
          projectNumber="Project 1"
          feature="Reactjs , Nextjs , Mern , CSS,"
        />
        <ProjectCard
          projectNumber="Project 1"
          feature="Reactjs , Nextjs , Mern , CSS,"
        />
        <ProjectCard
          projectNumber="Project 1"
          feature="Reactjs , Nextjs , Mern , CSS,"
        />
        <ProjectCard
          projectNumber="Project 1"
          feature="Reactjs , Nextjs , Mern , CSS,"
        />
      </div>
    </div>
  );
};
export default Projects;
