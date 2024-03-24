import moment from "moment";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-section">
      <h3>Copyright © {moment().format("YYYY")}. All rights reserved.</h3>
      <h3>
        Developed by <span> John doe</span>
      </h3>
    </div>
  );
};
export default Footer;
