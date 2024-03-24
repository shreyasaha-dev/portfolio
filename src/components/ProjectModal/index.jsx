import "./projectModal.css";
const ProjectModal = ({ projectName, description }) => {
  return (
    <div className="project-modal">
      <h1>{projectName}</h1>
      <img
        src={require("../../Images/gabrielle-henderson-T0d3UdwPkr0-unsplash.jpg")}
        alt="project_image"
      />
      <h4>{description}</h4>
      <ul>
        <li>abc</li>
        <li>bcd</li>
        <li>efg</li>
      </ul>
      <div className="url-section">
        <a href="">Website</a>
        <a href="">Github</a>
      </div>
    </div>
  );
};
export default ProjectModal;
