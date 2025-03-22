import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import img1 from "../../assets/images/website-img-1.jpg";
import img2 from "../../assets/images/website-img-2.webp";
import img3 from "../../assets/images/website-img-3.jpg"; 

const projects = [
  {
    name: "Personal Portfolio",
    year: "Sep 2024",
    align: "right",
    image: img1,
    link: "https://personal-portfolio-mansi.vercel.app/",
  },
  {
    name: "Hematite Infotech",
    year: "Sep 2024",
    align: "left",
    image: img2,
    link: "http://hematitecorp.com/",
  },
  {
    name: "Real Estate",
    year: "Nov 2024",
    align: "right",
    image: img3,
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      {/* Animated heading */}
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      {/* Project List */}
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link} // ✅ Pass the link to SingleProject
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
