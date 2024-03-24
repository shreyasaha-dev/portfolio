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
      <p>ADDRESS</p>
      <h2>Los Angeles , America</h2>
      <p>PHONE</p>
      <h1>(+123) 456-7890</h1>
      <h4>portfolio3@gmail.com</h4>
    </div>
  );
};
export default Contact;
