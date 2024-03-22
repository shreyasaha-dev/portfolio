import "./skillCard.css";
const SkillCard = () => {
  return (
    <div className="each-skill">
      <img src={require("../../Images/download (1).jpg")} alt="icons" />
      <div className="skill-details">
        <p>HTML</p>
        <h3>98%</h3>
      </div>
    </div>
  );
};
export default SkillCard;
