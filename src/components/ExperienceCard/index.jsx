import "./experienceCard.css";
import { IoIosArrowRoundForward } from "react-icons/io";
const ExperienceCard = ({ duration, companyName, position, details }) => {
  return (
    <div className="total-experienceCard">
      <div className="experience-left-section">
        <h3>{duration}</h3>
        <p>{companyName}</p>
      </div>
      <span>
        <IoIosArrowRoundForward />
      </span>
      <div className="experience-right-section">
        <h3>{position}</h3>
        <p>{details}</p>
      </div>
    </div>
  );
};
export default ExperienceCard;
