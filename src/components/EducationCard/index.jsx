import "./educationCard.css";
const EducationCard = ({ university, subject, date, details }) => {
  return (
    <div className="education-card">
      <h2>
        {university} <span>{date}</span>
      </h2>
      <h1>{subject}</h1>
      <h3>{details}</h3>
    </div>
  );
};
export default EducationCard;
