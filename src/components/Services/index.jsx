import Heading from "../Heading";
import ServiceCard from "../ServiceCard";
import SubHeading from "../SubHeading";
import Title from "../Title";
import "./services.css";
const Services = () => {
  return (
    <div className="total-service">
      <Title title="SERVICES" />
      <Heading heading="What I Do" />
      <SubHeading subHeading="I develop 3D visuals, user interfaces and web applications" />
      <div className="all-services">
        <ServiceCard
          name="App Development"
          description="Design direction for business. Get your business on the next level. We help to create great experiences."
          payment="$300"
        />
        <ServiceCard
          name="App Development"
          description="Design direction for business. Get your business on the next level. We help to create great experiences."
          payment="$300"
        />
        <ServiceCard
          name="App Development"
          description="Design direction for business. Get your business on the next level. We help to create great experiences."
          payment="$300"
        />
      </div>
    </div>
  );
};
export default Services;
