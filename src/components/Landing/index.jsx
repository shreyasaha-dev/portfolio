import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import "./landing.css";
const Landing = () => {
  return (
    <div className="total-landing">
      <div className="landing-left-section">
        <h2>HI THERE ! I AM</h2>
        <h1>Shreya Saha</h1>
        <div className="all-icons">
          <span className="icons">
            <FaFacebook />
          </span>
          <span className="icons" style={{ fontSize: "40px" }}>
            <AiFillTwitterCircle />
          </span>
          <span className="icons">
            <FaGithub />
          </span>
        </div>
      </div>
      <div className="landing-right-section">
        <img
          src={require("../../Images/profilepicture.png")}
          alt="profile_picture"
        />
      </div>
    </div>
  );
};
export default Landing;
