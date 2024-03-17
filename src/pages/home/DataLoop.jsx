import { useState } from "react";
import { bgData, iconData, imgData } from "../../assets/images";
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
    icon: iconData,
    des: "Explore and analyze vast quantities of unstructured data from diverse sources. Rely on automated preprocessing and embeddings to identify similarities and find the data you need. Curate, version, clean, and route your data to wherever it’s needed to create exceptional AI applications.",
  },
  {
    tab: "models",
    logo: IconModelData,
    title: "Models",
    img: imgData,
    icon: iconData,
    des: "Explore and analyze vast quantities of unstructured data from diverse sources. Rely on automated preprocessing and embeddings to identify similarities and find the data you need. Curate, version, clean, and route your data to wherever it’s needed to create exceptional AI applications.",
  },
  {
    tab: "pipelines",
    logo: IconPipelinesData,
    title: "Pipelines",
    img: imgData,
    icon: iconData,
    des: "Explore and analyze vast quantities of unstructured data from diverse sources. Rely on automated preprocessing and embeddings to identify similarities and find the data you need. Curate, version, clean, and route your data to wherever it’s needed to create exceptional AI applications.",
  },
  {
    tab: "elements",
    logo: IconElementData,
    title: "Elements",
    img: imgData,
    icon: iconData,
    des: "Explore and analyze vast quantities of unstructured data from diverse sources. Rely on automated preprocessing and embeddings to identify similarities and find the data you need. Curate, version, clean, and route your data to wherever it’s needed to create exceptional AI applications.",
  },
  {
    tab: "human",
    logo: IconHumanData,
    title: "Humans",
    img: imgData,
    icon: iconData,
    des: "Explore and analyze vast quantities of unstructured data from diverse sources. Rely on automated preprocessing and embeddings to identify similarities and find the data you need. Curate, version, clean, and route your data to wherever it’s needed to create exceptional AI applications.",
  },
  {
    tab: "marketplace",
    logo: IconMarketplace,
    title: "Marketplace",
    img: imgData,
    icon: iconData,
    des: "Explore and analyze vast quantities of unstructured data from diverse sources. Rely on automated preprocessing and embeddings to identify similarities and find the data you need. Curate, version, clean, and route your data to wherever it’s needed to create exceptional AI applications.",
  },
  {
    tab: "security",
    logo: IconSecurity,
    title: "Security",
    img: imgData,
    icon: iconData,
    des: "Explore and analyze vast quantities of unstructured data from diverse sources. Rely on automated preprocessing and embeddings to identify similarities and find the data you need. Curate, version, clean, and route your data to wherever it’s needed to create exceptional AI applications.",
  },
];

const DataLoop = () => {
  const [tab, setTab] = useState(DATA_LOOP_LIST[0]);
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-[60px] text-grey-1000">Dataloop in a nutshell</h2>
      <p className="text-20 text-grey-700">
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
          <div className="flex gap-5">
            <img src={tab.icon} height={250} width={250} />
            <p className="text-28 text-grey-1000 font-medium">{tab.title}</p>
          </div>
          <div className="max-w-[400px]">
            <p className="text-gray-700 text-20">{tab.des}</p>
            <div>
              <p>Learn more</p>
              <ArrowIcon/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataLoop;
