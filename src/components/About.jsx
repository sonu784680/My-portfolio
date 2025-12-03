import React from "react";
import { motion } from "framer-motion";
import sonu3 from "../assets/sonu3.avif";
import { aboutInfo } from "../assets/assets";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        id="about"
      >
        <div className="container mx-0 px-6">
          {/*heading*/}
          <h2 className="text-3xl font-bold text-center mb-4">
            About
            <span className="text-purple">Me</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Get to know more about my background and passion{" "}
          </p>
          {/*image + my journey*/}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/*image*/}
            <div className="md:w-1/2 rounded-2xl overflow-hidden">
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="w-full h-full object-cover"
                src={sonu3}
                alt="About"
              />
            </div>
            {/*text content*/}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="md:w-1/2"
            >
              <div className="rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6">My Journey</h2>
                <p className="text-gray-300 mb-6 font-semibold">
                  I’m a passionate Full Stack Web Developer who loves turning
                  ideas into real, interactive digital experiences. With a
                  strong foundation in HTML, CSS, Tailwind CSS, and JavaScript,
                  I create clean, responsive, and user-friendly interfaces. On
                  the backend, I build powerful and efficient systems using
                  Node.js, Express, and databases like MongoDB and SQL, ensuring
                  every application I develop is both robust and scalable. I
                  enjoy solving complex problems, learning new technologies, and
                  continuously improving my craft. Whether it’s designing a
                  smooth front-end experience or architecting a reliable backend
                  API, I strive to deliver elegant, efficient, and maintainable
                  solutions. My goal is to keep evolving as a developer —
                  building innovative projects that make a real impact and
                  contribute to the ever-growing world of web technology.
                </p>
                <p className="text-gray-300 mb-6 font-semibold">
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  my knowledge through tech blogs and tutorials. I believe in
                  continuous learning and pushing the boundaries of what's
                  possible on the web.
                </p>
              </div>
              {/*cards*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="text-purple text-4xl">
                      <data.icon />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                    <p className="text-gray-400">{data.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
