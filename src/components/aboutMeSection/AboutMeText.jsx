import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Raj, a passionate frontend developer with 1 years of experience in building modern, responsive, and user-friendly web applications. My journey started with a 6-month internship, followed by a year of professional experience crafting sleek and efficient UI/UX designs.

I specialize in HTML, CSS, React, Bootstrap, Tailwind, and Node.js, leveraging these technologies to create dynamic and interactive web experiences. I thrive on solving complex problems, optimizing performance, and bringing creative designs to life with clean, maintainable code.

Constantly learning and evolving, I enjoy staying up to date with the latest trends in web development to enhance my skills and build better products. Let's collaborate and turn ideas into reality! 🚀
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
