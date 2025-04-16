"use client";

// app/page.tsx (atau index.tsx di Next.js 12)
import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import { CodeIcon, Github, Instagram, Linkedin } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { SiTypescript, SiCss3, SiJavascript, SiLaravel, SiMysql, SiTailwindcss, SiBootstrap, SiPhp, SiPython, SiReact, SiNextdotjs, SiFigma } from "react-icons/si";
import TiltedCard from "./components//TiltedCard/TiltedCard";
import RotatingText from "./components/RotatingText/RotatingText";
import ShinyText from "./components/ShinyText/ShinyText";
import StarBorder from "./components/StarBorder/StarBorder";
import Magnet from "./components/Magnet/Magnet";

const skills = [
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-3xl" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-600 text-3xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-500 text-3xl" /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-600 text-3xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-orange-700 text-3xl" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500 text-3xl" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 text-3xl" /> },
  { name: "Python", icon: <SiPython className="text-yellow-500 text-3xl" /> },
  { name: "React", icon: <SiReact className="text-sky-500 text-3xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 text-3xl" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500 text-3xl" /> },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans overflow-x-hidden">
      <title>Portofolio M Fauzan F</title>
      <meta name="description" content="Hi! I'm Fauzan, a passionate front-end developer and UI/UX designer. Welcome to my portfolio—take a look at my projects, skills, and experiences!" />
      <meta name="keywords" content="Fauzan, Front-End Developer, UI UX Designer, Portfolio, Informatics Engineering" />
      <meta name="author" content="Muhammad Fauzan Faturrohman" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Fauzan Faturrohman's Portfolio" />
      <meta property="og:description" content="Explore the works and profile of a passionate front-end developer and UI/UX designer." />
      <meta property="og:image" content="/assets/img/profile.jpg" />
      <meta property="og:type" content="website" />

      <nav className="w-full bg-gray-950 shadow-md flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <CodeIcon className="text-white-500 w-6 h-6" />
          <span className="font-bold text-lg">
            {" "}
            <div className="hidden md:flex items-center gap-4">
              <RotatingText
                texts={["Welcome !", "To My Website Portfolio", "Enjoy !"]}
                mainClassName="px-3 bg-white text-black py-1 rounded-md text-sm"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
            {/* Versi mobile */}
            <div className="md:hidden text-sm font-semibold text-white bg-gray-800 px-3 py-1 rounded-md">Welcome to my portfolio!</div>
          </span>
        </div>

        {/* Tambahkan rotating text di sini */}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/assets/img/bg-pattern.jpg')" }}
  >
    <div className="absolute inset-0 bg-black opacity-60"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
    {/* FOTO */}
    <div className="flex justify-center mb-6">
      <TiltedCard
        imageSrc="/assets/img/profile.jpg"
        altText="Muhammad Fauzan Faturrohman"
        captionText="Muhammad Fauzan Faturrohman"
        containerHeight="200px"
        containerWidth="200px"
        imageHeight="200px"
        imageWidth="200px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
      />
    </div>

    {/* NAMA */}
    <h1 className="text-3xl md:text-5xl font-bold mb-4">
      <ShinyText
        text="Hi, I'm Muhammad Fauzan Faturrohman"
        disabled={false}
        speed={2.5}
        className="custom-class"
      />
    </h1>

    {/* TYPING EFFECT */}
    <p className="text-lg text-gray-300">
      <Typewriter
        words={["Front-end Developer", "UI/UX Designer", "Graphic Designer"]}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </p>
  </div>
</section>

      {/* About Section */}
      <section className="bg-gray-900 text-white py-10 px-4 md:px-16">
        <motion.div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }}>
          <div className="md:w-3/4">
            <Magnet padding={100} disabled={false} magnetStrength={10}>
              <h2 className="text-3xl font-bold mb-4 border-b border-gray-600 inline-block pb-2">About Me</h2>
            </Magnet>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg text-justify">
              Hello! I'm a passionate Informatics Engineering student involved in journalism and various organization & project activities. I’m highly motivated, adaptive, and eager to learn. My main interests lie in{" "}
              <span className="text-cyan-400 font-semibold">Front-End Development</span> and <span className="text-cyan-400 font-semibold">UI/UX Design</span>, where I love turning ideas into clean, interactive interfaces.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="bg-gray-50 text-gray-900 py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <p className="text-gray-600 mb-10">Technologies & tools I work with:</p>

          {/* Hard Skills */}
          <Magnet padding={100} disabled={false} magnetStrength={10}>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-5xl mx-auto mb-16">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center p-4 bg-white shadow-sm rounded-lg hover:shadow-md transition-all"
                >
                  <div className="mb-2">{skill.icon}</div>
                  <p className="font-semibold text-sm text-gray-700">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </Magnet>

          {/* Soft Skills Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">✨ Soft Skills</h3>
            <Magnet padding={100} disabled={false} magnetStrength={10}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {[
                  { name: "Creative Problem Solving", emoji: "🧠" },
                  { name: "Team Collaboration", emoji: "👥" },
                  { name: "Time Management", emoji: "⏰" },
                  { name: "Critical Thinking", emoji: "💡" },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center"
                  >
                    <div className="text-3xl mb-2">{skill.emoji}</div>
                    <p className="text-sm font-medium text-gray-700">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </Magnet>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <motion.section className="bg-gray-900 py-20 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <div className="container mx-auto max-w-6xl">
          <motion.h2 className="text-3xl font-semibold mb-10 border-b border-gray-700 pb-2 w-fit" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            Projects
          </motion.h2>
          <StarBorder as="button" className="custom-class" color="cyan" speed="5s">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Azalleart",
                  image: "/assets/img/azalleart.png",
                  desc: "Azalleart adalah layanan make-up profesional selain itu dapat menyewakan kostum dari adat, sampai kostum wisuda ",
                },
                {
                  title: "SnaPolla",
                  image: "/assets/img/snapolla.png",
                  desc: "Snapolla adalah ruang digital sederhana estetik untuk mengabadikan momen dengan sentuhan unik, filter dramatis, dan hiasan manis.",
                },
                {
                  title: "UI/UX Piye APP",
                  image: "/assets/img/piye.png",
                  desc: "Piye APP adalah sebuah desain aplikasi yang dapat memesan makanan seperti gofood.",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-2xl shadow-md transition"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.03,
                    y: -4,
                    boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-2xl mb-4" />
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                </motion.div>
              ))}
            </div>
          </StarBorder>
        </div>
      </motion.section>

      {/* Social + Lanyard Side by Side */}
      <section className="bg-gray-950">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Kiri: Lanyard */}
          <div className="flex justify-center items-center">
            <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
          </div>

          {/* Kanan: Sosial Media */}
          <motion.div className="text-center md:text-left md:pl-10" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <motion.h2 className="text-3xl font-semibold mb-2 border-b border-gray-700 pb-2 inline-block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              Reach me
            </motion.h2>

            <motion.p className="text-gray-400 mb-8" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
              Follow me on :
            </motion.p>

            {/* Box Sosial Media */}
            <motion.div
              className="bg-gray-900 p-6 rounded-xl shadow-lg flex justify-center gap-6 flex-wrap max-w-md"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.a href="https://github.com/mfauzannnftrhmn" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 transition p-4 rounded-full" whileHover={{ scale: 1.1 }}>
                <Github className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a href="https://linkedin.com/in/mfauzannnf" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 transition p-4 rounded-full" whileHover={{ scale: 1.1 }}>
                <Linkedin className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a href="https://instagram.com/mpauzanf" target="_blank" rel="noopener noreferrer" className="bg-sky-500 hover:bg-sky-600 transition p-4 rounded-full" whileHover={{ scale: 1.1 }}>
                <Instagram className="w-6 h-6 text-white" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
        <div className="container mx-auto text-center">
          {/* Social Media Links */}
          <div className="mb-6">
            <a href="https://github.com/mfauzannnftrhmn" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mx-4 transition-colors">
              <Github className="w-6 h-6 inline-block" />
            </a>
            <a href="https://linkedin.com/in/mfauzannnf" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mx-4 transition-colors">
              <Linkedin className="w-6 h-6 inline-block" />
            </a>
            <a href="https://instagram.com/mpauzanf" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mx-4 transition-colors">
              <Instagram className="w-6 h-6 inline-block" />
            </a>
          </div>

          {/* Copyright Text */}
          <p className="text-sm">&copy; {new Date().getFullYear()} M Fauzan F. All rights reserved.</p>

          {/* Optional Divider Line */}
          <div className="mt-6 border-t border-gray-700 w-1/2 mx-auto"></div>
        </div>
      </footer>
    </div>
  );
}
