import React from "react";

const PLATFORM_LIST = [
  "Data",
  "Models",
  "Pipelines",
  "Elements",
  "Human Feedback",
  "Marketplace",
  "Security",
];

const ROLE_LIST = [
  "Data Engineer",
  "Data Scientist",
  "AI & Data Leader",
  "Software Engineer",
  "Human Reviewer",
];

const USE_CASES_LIST = [
  "Active Learning Workflows",
  "Validating GenAI (RLHF/RLAIF)",
  "Running AI in Production",
  "Building a GenAI Stack",
  "Multi-cloud AI Compute",
  "Building AI Agents",
  "Building RAG Workflows",
  "DataOps Platform",
];

const DEVELOPERS_LIST = ["Documentation", "SDK", "API", "Community"];
const COMPANY_LIST = [
  "About us",
  "News",
  "Careers",
  "Partners",
  "Contact us",
  "Request a demo",
];
const RESOURCES_LIST = ["All", "Blog", "Video", "Case Studies", "Book"];
const Footer = () => {
  const renderContent = (title, list) => {
    return (
      <div className="flex gap-5 flex-col">
        <h2 className="text-24 font-bold">{title}</h2>
        <div className="flex flex-col gap-2">
          {list.map((item, index) => (
            <div key={index} className="hover:cursor-pointer">
              <p className="text-grey-700 hover:text-pink-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="flex gap-20 px-40 justify-center border-t border-t-grey-400 py-20">
      {renderContent("Platform", PLATFORM_LIST)}
      {renderContent("Role", ROLE_LIST)}
      {renderContent("Use Cases", USE_CASES_LIST)}
      {renderContent("Developers", DEVELOPERS_LIST)}
      {renderContent("Company", COMPANY_LIST)}
      {renderContent("Resources", RESOURCES_LIST)}
    </div>
  );
};

export default Footer;
