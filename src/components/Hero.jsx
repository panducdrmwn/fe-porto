import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { RandomizeTextOnHover } from "./RandomizeText";

export default function Hero() {
  return (
    <motion.section>
      <div
        id="home"
        className="px-16 flex flex-col gap-5 min-h-screen w-full scroll-smooth 
    items-center justify-center py-28 md:px-32"
      >
        {/* <audio id="audio" loop autoPlay controls> 
        <source src="./fe-porto/videoplayback.mp3" type="audio/mp3"/>
      </audio> */}
        <iframe
          src="./fe-porto/videoplayback.mp3"
          allow="autoplay"
          style={{ display: "none" }}
          id="iframeAudio"
        ></iframe>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="w-[500px] h-[500px] md:w-[750px] md:h-[750px] rounded-full overflow-hidden shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600">
           <iframe src='https://my.spline.design/robotfollowcursorforlandingpagemc-FzxEzYkeGflhfc6YECPhr8ud/' frameborder='0' width='100%' height='100%'></iframe>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col  text-center items-center justify-center gap-3 mt-4"
        >
          <RandomizeTextOnHover originalText="PANDU CAKRAWALA DARMAWAN" />

          <h3
            className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent
         text-2xl font-light md:text-3xl"
          >
            {" "}
            Web Developer
          </h3>
          <p className=" max-w-[600px] md:text-base text-pretty text-sm text-gray-400">
            I'm a web developer skilled in React, Next.js, 3D Js and Tailwind,
            focused on building clean and scalable application. From front-end
            design to seamless database integration with MySQL. I create
            efficient solutions for dynamic user experiences. Let's build
            something great together!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
