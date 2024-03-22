import Title from "../Title/index";
import Heading from "../Heading/index";
import SubHeading from "../SubHeading/index";
import "./about.css";
const About = () => {
  return (
    <div className="total-about">
      <Title title="ABOUT ME" />
      <Heading heading="Biography" />
      <SubHeading subHeading="As a React developer with 5 years of experience, I have honed my skills in JavaScript and am currently learning TypeScript to expand my expertise. I pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively with clients to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems." />
      <div className="about-details-section">
        <div className="details">
          <h3>NAME</h3>
          <h4>John doe</h4>
        </div>
        <div className="details">
          <h3>PHONE</h3>
          <h4 className="border">+91-9212321321</h4>
        </div>
        <div className="details">
          <h3>EMAIL</h3>
          <h4 className="border">portfolio3@gmail.com</h4>
        </div>
        <div className="details">
          <h3>MY QUOTE</h3>
          <h4>Live the Life as you want</h4>
        </div>
      </div>
    </div>
  );
};
export default About;
