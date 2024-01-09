import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "Do you offer only a full cycle of development?",
    answer:
    "No, our AgencI offers consulting and partial solutions too. We assist businesses in their desire to involve more AI in their solutions. This way we can develop a Business case or Build a Strategy for the company. We can also develop a brand-new solution according to the established Strategy and Business goal. "
  },
  {
    question: "Why do you include Business case and Strategy development in your project-cycle?",
    answer:
    "AI technologies are very popular and indeed are capable of providing novel solutions to the old problems. However, our AgencI strives for development of the human-centered and reliable projects. This implies that we don't want just to help you add AI to your business but we want it to be actually useful and feasible."  
},
  {
    question: "What is the timeline of AI devlopment stage?",
    answer:
    "Depending on the complexity of the project this may take from 2 weeks to 3 months of Development and Testing of the software. The timeline strongly correlates with inclusion of other technical features of the product such as Database management or Web Interface design. No worries, our specialists know how to scale! "
    },
  {
    question: "Why do I need maintenance?",
    answer:
    "Any piece of software has multiple cycles of development. After the product sees its first users - there will definitely be points of improvement. Our maintenance includes further fine-tuning of the chatbot, analysis of logs of the conversations and assurance in strong correspondence of the bot functionality with its primary goals.",
  },
];

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            Have any questions?
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1">
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
