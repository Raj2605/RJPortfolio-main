import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Artan Consulting",
    company: "Artan",
    date: "Mar 2024 - Feb 2025",
    responsibilities: [
      "Designed and developed the complete UI/UX for an engaging user experience.",
      "Created a responsive layout with smooth navigation, animations, and interactive elements.",
      "Optimized performance with lazy loading and asset minification, reducing load time by 30%.",
      "Implemented SEO best practices, improving organic visibility and increasing web traffic by 25%.",
    ],
  },
  {
    job: "Hematite Infotech PVT LTD",
    company: "Hematite",
    date: "Sep 2023 - Feb 2024",
    responsibilities: [
      "Designed a responsive layout for seamless performance across devices.",
      "Integrated dynamic navigation, carousels, and animations for better UX.",
      "Optimized performance with lazy loading and asset minification, reducing load time by 30%.",
      "Implemented SEO best practices, boosting web traffic by 25%.",
    ],
  },
  {
    job: "GymLife Fitness Club",
    company: "Gymlife",
    date: " Nov 2023 - Dec 2023",
    responsibilities: [
      "Implementing reusable components.",
      "Built and optimized UI using HTML, CSS, and JavaScript..",
      "Integrated Chart.js for real-time data visualization.",
      "Conducted usability testing, improving navigation by 20%.",
      "Collaborated with back-end developers to integrate RESTful APIs.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
