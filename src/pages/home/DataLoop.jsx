import { useState } from "react";
import { bgData, imgData, imgElement, imgHuman, imgMarketplace, imgModel, imgPipe, imgSecurity } from "../../assets/images";
import {
  ArrowIcon,
  IconElementData,
  IconHumanData,
  IconLogoData,
  IconMarketplace,
  IconModelData,
  IconPipelinesData,
  IconSecurity,
} from "../../components/icons";

const DATA_LOOP_LIST = [
  {
    tab: "data",
    logo: IconLogoData,
    title: "Data",
    img: imgData,
    des: "Explore and analyze vast quantities of unstructured data from diverse sources. Rely on automated preprocessing and embeddings to identify similarities and find the data you need. Curate, version, clean, and route your data to wherever it’s needed to create exceptional AI applications.",
  },
  {
    tab: "models",
    logo: IconModelData,
    title: "Models",
    img: imgModel,
    des: "Use cutting-edge, off the shelf AI models or build your own. Deploy to production without connecting any external tools. Version, experiment, compare and fine-tune your creations, then build on top of them right in the platform using various datasets and additional useful elements.",
  },
  {
    tab: "pipelines",
    logo: IconPipelinesData,
    title: "Pipelines",
    img: imgPipe,
    des: "Orchestrate data, models, elements and human feedback together to create any workflow you require. Use a familiar drag-and-drop interface or build entirely in code using our Python SDK. Spin up pre-created pipeline templates of popular workflows in minutes to get your application off the ground.",
  },
  {
    tab: "elements",
    logo: IconElementData,
    title: "Elements",
    img: imgElement,
    des: "Create any functionality you need with an in-platform, dedicated function-as-a-service offering. Write code that works with your data, accesses your models, and performs complex tasks without authentication or any infrastructure setup. Build AI-based applications at a fraction of the time.",
  },
  {
    tab: "human",
    logo: IconHumanData,
    title: "Humans",
    img: imgHuman,
    des: "Treat humans to the respect they deserve, and streamline work for large data teams working together. Integrate feedback right into the loop to speed up RLHF and human-centric tasks. Get rid of email and screenshots once and for all.",
  },
  {
    tab: "marketplace",
    logo: IconMarketplace,
    title: "Marketplace",
    img: imgMarketplace,
    des: "Leverage existing models, elements and pipelines to create AI applications in record time. Mix and match components battle-tested by our ecosystem to ensure your workflows have a solid foundation and rely on mature, capable technologies.",
  },
  {
    tab: "security",
    logo: IconSecurity,
    title: "Security",
    img: imgSecurity,
    des: "Dataloop is compliant with the most strict standards on the planet, including the GDPR, ISO 27001 & ISO 27701 and SOC 2 Type II. In addition, the platform includes security controls such as RBAC, SSO, 2FA, AES-256 encryption and maintains a granular audit trail of every single activity.",
  },
];

const DataLoop = () => {
  const [tab, setTab] = useState(DATA_LOOP_LIST[0]);
  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="text-[60px] text-grey-1000 animation">Chatbot-platform in a nutshell</h2>
      <p className="text-20 text-grey-700 animation">
        The last AI application platform you’ll ever need.
      </p>
      <div className="flex gap-3 my-10">
        {DATA_LOOP_LIST.map((item, key) => (
          <div
            key={key}
            className={`flex gap-2 px-4 w-36 py-2 hover:cursor-pointer ${
              tab.tab === item.tab
                ? "border-b-[3px] border-b-pink-800"
                : " border-b border-b-grey-300"
            }`}
            onClick={() => setTab(item)}
          >
            <item.logo
              color={`${tab.tab === item.tab ? "#f87c95" : "#CECFD7"}`}
            />
            <span
              className={`${
                tab.tab === item.tab ? "text-grey-1000" : "text-grey-700"
              } text-16`}
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>

      <div className="w-full h-full flex gap-40">
        <div
          style={{
            backgroundImage: `url(${bgData})`,
          }}
          className="w-1/2 h-[500px] relative bg-cover bg-no-repeat"
        >
          <img src={tab.img} className="absolute top-16 left-10" />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-5">
            <button className="flex items-center justify-center bg-pink-800 p-5 rounded-xl">{<tab.logo color="#fff" />}</button>
            <p className="text-28 text-grey-1000 font-medium">{tab.title}</p>
          </div>
          <div className="max-w-[400px]">
            <p className="text-gray-700 text-20">{tab.des}</p>
            <div className="flex gap-2 items-center mt-10 hover:cursor-pointer">
              <p>Learn more</p>
              <div className="h-6 w-6">
                <ArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataLoop;
