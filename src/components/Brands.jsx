import { motion } from "framer-motion";
import {ZgtLogo} from "../assets/logos/ZgtLogo"
import {WaitlerLogo} from "../assets/logos/WaitlerLogo"
import {AnyHouseLogo} from "../assets/logos/AnyHouseLogo"
import { CreativeMulesLogo } from "../assets/logos/CMLogo";

export const Brands = () => (
  <section id="clients" className="py-12 sm:py-24 h-1/2 bg-customDarkBg1 w-full mt-16 mb-10">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="mb-2  text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-white">
                Our Clients
              </h2>
              <h2 className=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary">
                and Partners
              </h2>
            </div>
          </div>
          <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
            <div className="flex flex-wrap -m-4">
              <div className="w-full sm:w-1/2 py-6 flex justify-center">
                <a href="https://www.zgt.nl/"><ZgtLogo /></a>
              </div>
              <div className="w-full sm:w-1/2 py-6 flex justify-center">
                <a href="https://anyhouse.me/"><AnyHouseLogo /></a>
              </div>
              <div className="w-full sm:w-1/2 py-6 flex justify-center">
                <a href="https://www.waitler.com/"><WaitlerLogo/></a>
              </div>
              <div className="w-full sm:w-1/2 py-6 flex justify-center">
                <a href="https://www.creativemules.com/"><CreativeMulesLogo /></a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
