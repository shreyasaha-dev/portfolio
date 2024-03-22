import "./projectCard.css";
const ProjectCard = ({ projectNumber, feature }) => {
  return (
    <div className="project-card">
      <img
        src={require("../../Images/gabrielle-henderson-T0d3UdwPkr0-unsplash.jpg")}
        alt="project_picture"
      />
      <h3>{feature}</h3>
      <h2>{projectNumber}</h2>
    </div>
  );
};
export default ProjectCard;
