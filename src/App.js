import Landing from "./components/Landing/index.jsx";
import Introduction from "./components/Introduction/index.jsx";
import About from "./components/About/index.jsx";
import Resume from "./components/Resume/index.jsx";
import Projects from "./components/Projects/index.jsx";
import Services from "./components/Services/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Footer from "./components/Footer/index.jsx";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { actions } from "./Store/UserDataReducer.js";
import Testimonials from "./components/Testimonials/index.jsx";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        console.log(response.data.user);
        dispatch(actions.storeData(response.data.user));
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <Landing />
      <Introduction />
      <About />
      <Resume />
      <Projects />
      <Testimonials />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
