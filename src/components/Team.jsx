import { motion } from "framer-motion";
import {ZgtLogo} from "../assets/logos/ZgtLogo"
import {WaitlerLogo} from "../assets/logos/WaitlerLogo"
import {AnyHouseLogo} from "../assets/logos/AnyHouseLogo"
import { CreativeMulesLogo } from "../assets/logos/CMLogo";

const teamMembers = [
    {name: "Yevhenii Budnyk", role: "Full-Stack Developer and AI Engineer", image: "https://media.licdn.com/dms/image/C4E03AQFVTTP3y9GYmQ/profile-displayphoto-shrink_200_200/0/1626444215132?e=1714608000&v=beta&t=71kVyu9YGj3q0ddUdQxyb9c7GirI-xdGD0g4QxG_Z-w", linkedin: "https://www.linkedin.com/in/yevhenii-budnyk/"},
    {name: "Dmytro Druzhniev", role: "Full-Stack Developer and System Architect", image: "https://media.licdn.com/dms/image/D4E35AQGmkBh9dcv0ZQ/profile-framedphoto-shrink_400_400/0/1704978014146?e=1709748000&v=beta&t=-gR8QSbWImj-oss-R8D9XsyauWYwHOLcUAo9j0s5Zls", linkedin: "https://www.linkedin.com/in/dmytro-druzhniev/"},
    {name: "Fausto Albers", role: "Innovator, AI and Business Developer", image: "https://media.licdn.com/dms/image/D4E03AQGhuHR5FE_dEw/profile-displayphoto-shrink_400_400/0/1675897868757?e=1714608000&v=beta&t=5P0_kdSRE6MWusqYcvzREFWREqXdJTOJMsjH3Td1m8k", linkedin: "https://www.linkedin.com/in/stepintoliquid/"},
    {name: "Simona Cojocaru", role: "UI/UX Designer", image: "https://media.licdn.com/dms/image/D4E03AQG7lHsjVUUGtg/profile-displayphoto-shrink_200_200/0/1706481123407?e=1714608000&v=beta&t=5PzAU8RwwcvI_vS_YyEkXPzlzR-HctG9Vt6VtrL-IXc", linkedin: "https://www.linkedin.com/in/simona-cojocaru01/"},
]

export const Team = () => (
  <section id="team" className="bg-customDarkBg2 h-1/5 w-full">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="py-6 container px-4 mx-auto mb-6">
        {/* Title Section */}
        <div className="text-center mb-12 pt-16">
          <h2 className="text-5xl sm:text-4xl 2xl:text-6xl font-bold tracking-normal text-white">
            Meet our Team
          </h2>
        </div>

        {/* Team Cards Section */}
      <div className="flex flex-wrap justify-center mt-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-4">
            <a href={member.linkedin}>
            <div className="flex flex-col items-center p-6">
              <img className="w-40 h-40 rounded-full mb-4" src={member.image} alt={member.name} />
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-gray-600 text-center">{member.role}</p>
            </div>
            </a>
          </div>
        ))}
      </div>
      </div>
    </motion.div>
  </section>
);
