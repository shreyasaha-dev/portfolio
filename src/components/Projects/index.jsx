import { useState } from "react";
import Heading from "../Heading";
import ProjectCard from "../ProjectCard";
import Title from "../Title";
import "./project.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ProjectModal from "../ProjectModal";
const Projects = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="total-projects">
      <Title title="PORTFOLIO" />
      <Heading heading="Featured Projects" />
      <div className="all-projects">
        <ProjectCard
          onOpenModal={onOpenModal}
          projectNumber="Project 1"
          feature="Reactjs , Nextjs , Mern , CSS,"
        />
        <ProjectCard
          projectNumber="Project 1"
          feature="Reactjs , Nextjs , Mern , CSS,"
        />
        <ProjectCard
          projectNumber="Project 1"
          feature="Reactjs , Nextjs , Mern , CSS,"
        />
        <ProjectCard
          projectNumber="Project 1"
          feature="Reactjs , Nextjs , Mern , CSS,"
        />
        <ProjectCard
          projectNumber="Project 1"
          feature="Reactjs , Nextjs , Mern , CSS,"
        />
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        showCloseIcon={false}
        classNames={{
          modal: "color",
        }}
      >
        <ProjectModal
          projectName="Project 1"
          description="Design direction for business. Get your business on the next level. We help to create great experiences."
          website="portfolio3@gmail.com"
          github="portfolio3@gmail.com"
        />
      </Modal>
    </div>
  );
};
export default Projects;
