import Title from "../Title/index";
import Heading from "../Heading/index";
import SubHeading from "../SubHeading/index";
import "./about.css";
import { useSelector } from "react-redux";
const About = () => {
  const userData = useSelector((state) => state.userData);
  return (
    <div className="total-about">
      <Title title="ABOUT ME" />
      <Heading heading="Biography" />
      <SubHeading subHeading={userData?.about?.description} />
      <div className="about-details-section">
        <div className="details">
          <h3>NAME</h3>
          <h4>{userData?.about?.name}</h4>
        </div>
        <div className="details">
          <h3>PHONE</h3>
          <h4 className="border">{userData?.about?.phoneNumber}</h4>
        </div>
        <div className="details">
          <h3>EMAIL</h3>
          <h4 className="border">{userData?.email}</h4>
        </div>
        <div className="details">
          <h3>MY QUOTE</h3>
          <h4>{userData.about?.quote}</h4>
        </div>
      </div>
    </div>
  );
};
export default About;
