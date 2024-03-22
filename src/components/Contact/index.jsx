import ContactCard from "../ContactCard";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import Title from "../Title";
import "./contact.css";
const Contact = () => {
  return (
    <div className="total-contact">
      <Title title="CONTACT" />
      <Heading heading="Get In Touch" />
      <SubHeading subHeading="I develop 3D visuals, user interfaces and web applications" />
      <ContactCard />
    </div>
  );
};
export default Contact;
