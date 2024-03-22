import Heading from "../Heading/index";
import SubHeading from "../SubHeading/index";
import Title from "../Title/index";
import "./introduction .css";
const Introduction = () => {
  return (
    <div className="total-intro">
      <Title title="INTRODUCTION" />
      <Heading heading="Software Developer" />
      <SubHeading subHeading="I develop 3D visuals, user interfaces and web applications" />
      <span>John Doe</span>
    </div>
  );
};
export default Introduction;
