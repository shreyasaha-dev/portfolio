import "./projectCard.css";
const ProjectCard = ({ projectNumber, feature, onOpenModal }) => {
  return (
    <div className="project-card" onClick={onOpenModal}>
      <div className="image">
        <img
          src={require("../../Images/gabrielle-henderson-T0d3UdwPkr0-unsplash.jpg")}
          alt="project_picture"
        />
      </div>
      <h3>{feature}</h3>
      <h2>{projectNumber}</h2>
    </div>
  );
};
export default ProjectCard;
