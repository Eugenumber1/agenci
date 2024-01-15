import { motion } from "framer-motion";

import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="custom-block-subtitle">Innovate with AI</span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                Beyond Traditional Software Solutions
              </h2>
              <p className="mb-10 text-customGrayText leading-loose">
                Explore unparalleled possibilities in AI with our expertly crafted strategies and bespoke AI systems. Elevate your business with our comprehensive approach, from goal-oriented strategy formulation to advanced AI development, and continuous system maintenance.
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Strategic AI Roadmapping</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Custom AI Software Development</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Consistent System Enhancement and Support</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
  <div className="relative mb-4 py-3 pl-3 pr-2 rounded">
    <svg viewBox="0 0 444 444" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 16C0 7.16343 7.16344 0 16 0H428C436.837 0 444 7.16344 444 16V428C444 436.837 436.837 444 428 444H16C7.16343 444 0 436.837 0 428V16Z" fill="#303136"/>
      <path d="M95 17C95 13.134 98.134 10 102 10H116C119.866 10 123 13.134 123 17C123 20.866 119.866 24 116 24H102C98.134 24 95 20.866 95 17Z" fill="#D9D9D9"/>
      <path d="M14 17C14 13.134 17.134 10 21 10H78C81.866 10 85 13.134 85 17C85 20.866 81.866 24 78 24H21C17.134 24 14 20.866 14 17Z" fill="#A2A3F7"/>
    </svg>
    <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: '10px' }}>
      <div className="text-zinc-300 text-3xl font-bold font-['Fira Sans']" style={{ marginBottom: '20px', marginLeft: "20px" }}>AI Strategy</div>
      <div className="text-gray-100 text-[18px] font-normal font-['IBM Plex Sans']" style={{ maxWidth: '100%', marginLeft: "20px" }}>
        <p>Every project starts with a goal. Every goal should align with the strategy. We will develop the latter for you.</p>
      </div>
    </div>
  </div>
  <div className="relative py-3 pl-3 pr-2 rounded">
    <svg viewBox="0 0 444 444" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 16C0 7.16343 7.16344 0 16 0H428C436.837 0 444 7.16344 444 16V428C444 436.837 436.837 444 428 444H16C7.16343 444 0 436.837 0 428V16Z" fill="#303136"/>
      <path d="M339 30C339 26.134 342.134 23 346 23H403C406.866 23 410 26.134 410 30C410 33.866 406.866 37 403 37H346C342.134 37 339 33.866 339 30Z" fill="#A2A3F7"/>
</svg>
<div className="absolute inset-0 flex flex-col justify-center" style={{ padding: '10px' }}>
<div className="text-zinc-300 text-3xl font-bold font-['Fira Sans']" style={{ marginBottom: '30px', marginLeft: '20px' }}>AI Development</div>
<div className="text-gray-100 text-[18px] font-normal font-['IBM Plex Sans']" style={{ maxWidth: '100%', marginLeft: "20px" }}>
Once the goals and prerequisites are clear - lets build the software.
</div>
</div>

  </div>
</div>
            <div className="w-1/2 lg:mt-20 pt-12 lg:pt-0 px-2 hidden sm:inline-block">
  <div className="relative mb-4 py-3 pl-3 pr-2 rounded-lg">
    <svg viewBox="0 0 444 444" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 16C0 7.16343 7.16344 0 16 0H428C436.837 0 444 7.16344 444 16V428C444 436.837 436.837 444 428 444H16C7.16343 444 0 436.837 0 428V16Z" fill="#303136"/>
      <path d="M14 17C14 13.134 17.134 10 21 10H35C38.866 10 42 13.134 42 17C42 20.866 38.866 24 35 24H21C17.134 24 14 20.866 14 17Z" fill="#D9D9D9"/>
      <path d="M52 17C52 13.134 55.134 10 59 10H116C119.866 10 123 13.134 123 17C123 20.866 119.866 24 116 24H59C55.134 24 52 20.866 52 17Z" fill="#A2A3F7"/>
    </svg>
    <div className="absolute inset-0 flex flex-col justify-center px-3" style={{ padding: '10px' }}>
      <div className="text-zinc-300 text-3xl font-bold font-['Fira Sans']" style={{ marginBottom: '30px', marginLeft: '20px' }}>Business goal</div>
      <div className="text-gray-100 text-[18px] font-normal font-['IBM Plex Sans']" style={{ maxWidth: '100%', marginLeft: "20px" }}>
        Define your business objective and desired results that you would like to achieve with a new AI system.
      </div>
    </div>
  </div>
  <div className="relative py-3 pl-3 pr-2 rounded-lg">
    <svg viewBox="0 0 444 444" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 16C0 7.16343 7.16344 0 16 0H428C436.837 0 444 7.16344 444 16V428C444 436.837 436.837 444 428 444H16C7.16343 444 0 436.837 0 428V16Z" fill="#303136"/>
      <path d="M382 400C382 396.134 385.134 393 389 393H403C406.866 393 410 396.134 410 400C410 403.866 406.866 407 403 407H389C385.134 407 382 403.866 382 400Z" fill="#D9D9D9"/>
    </svg>
    <div className="absolute inset-0 flex flex-col justify-center px-3" style={{ padding: '10px' }}>
      <div className="text-zinc-300 text-3xl font-bold font-['Fira Sans']" style={{ marginBottom: '30px', marginLeft: '20px' }}>Maintenance</div>
<div className="text-gray-100 text-[18px] font-normal font-['IBM Plex Sans']" style={{ maxWidth: '100%', marginLeft: "20px" }}>
Observe and control the system to assure the added value to your business.
</div>
</div>

  </div>
</div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};