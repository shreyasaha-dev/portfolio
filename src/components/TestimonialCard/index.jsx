import "./testimonialCard.css";
const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <img src={require("../../Images/download (1).jpg")} alt="person_image" />
      <div className="right-section">
        <p>
          Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien
          consequat porta a sit amet diam.
        </p>
        <h3>John Doe</h3>
        <h4>Web Developer</h4>
      </div>
    </div>
  );
};
export default TestimonialCard;
