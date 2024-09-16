import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-800%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero ">
      <div className="wrapper">
        <motion.div
          className="textContainer flex flex-col gap-3"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Hi, I'm
          </p>
          <motion.h1
            variants={textVariants}
            className="font-bold text-4xl  md:text-5xl lg:text-6xl  mb-2 text-blue-300"
          >
            Najam Ul Hassan
          </motion.h1>
          <motion.h2
            variants={textVariants}
            className="text-xl md:text-2xl lg:text-3xl font-normal mb-4"
          >
            I like to build things for the web.
          </motion.h2>
          <motion.div variants={textVariants} className="buttons mb-4">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Developer Designer Machine Learning Engineer Computer Vision
        Enthusiast
      </motion.div>
      <div className="imageContainer">
        <img src="/najam-removebg-preview.svg" alt="" className="w-48 h-48" />{" "}
        {/* Adjust these values as needed */}
      </div>
    </div>
  );
};

export default Hero;
