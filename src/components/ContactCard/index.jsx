import { Formik } from "formik";
import "./contactCard.css";
import * as yup from "yup";
import toast from "react-hot-toast";

const ContactCard = () => {
  return (
    <div className="contact-card">
      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        validationSchema={yup.object().shape({
          name: yup.string().trim().required(),
          email: yup
            .string()
            .email()
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
            .trim()
            .required(),
          message: yup.string().trim().required(),
        })}
        onSubmit={(values, { resetForm }) => {
          toast.success("Hello, this is a success notification!");
          resetForm();
        }}
      >
        {({
          values,
          handleBlur,
          handleChange,
          handleSubmit,
          errors,
          touched,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="contact-details">
                <div className="contact-left-section">
                  <input
                    className={`input ${
                      errors.name && touched.name && "error"
                    }`}
                    placeholder="Full Name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <input
                    className={`input ${
                      errors.email && touched.email && "error"
                    }`}
                    placeholder="Email Address"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <input
                    className="input"
                    placeholder="Subject"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <textarea
                  className={`textarea ${
                    errors.message && touched.message && "error"
                  }`}
                  placeholder="Message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <button type="submit">Send Message</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
export default ContactCard;
