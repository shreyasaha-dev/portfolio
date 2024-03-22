import { Formik } from "formik";
import "./contactCard.css";
const ContactCard = () => {
  return (
    <div className="contact-card">
      <Formik initialValues={{ name: "", email: "", subject: "", message: "" }}>
        {({ values, handleBlur, handleChange, handleSubmit }) => {
          return (
            <form>
              <div className="contact-details">
                <div className="contact-left-section">
                  <input placeholder="Full Name" />
                  <input placeholder="Email Address" />
                  <input placeholder="Subject" />
                </div>
                <textarea placeholder="Message" />
              </div>
              <button>Send Message</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
export default ContactCard;
