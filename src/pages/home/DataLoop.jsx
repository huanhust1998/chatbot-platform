import { useState } from "react";
import { bgData, iconData, imgData } from "../../assets/images";
import { IconLogoData } from "../../components/icons";

const DATA_LOOP_LIST = [
  {
    tab:"data",
    logo: IconLogoData,
    title:"Data",
    bg: bgData,
    img: imgData,
    icon: iconData,
    des: "Explore and analyze vast quantities of unstructured data from diverse sources. Rely on automated preprocessing and embeddings to identify similarities and find the data you need. Curate, version, clean, and route your data to wherever it’s needed to create exceptional AI applications.",
  },
  {
    tab:"models",
    logo: IconLogoData,
    title:"Models",
    bg: bgData,
    img: imgData,
    icon: iconData,
    des: "Explore and analyze vast quantities of unstructured data from diverse sources. Rely on automated preprocessing and embeddings to identify similarities and find the data you need. Curate, version, clean, and route your data to wherever it’s needed to create exceptional AI applications.",
  },
  {
    tab:"pipelines",
    logo: IconLogoData,
    title:"Pipelines",
    bg: bgData,
    img: imgData,
    icon: iconData,
    des: "Explore and analyze vast quantities of unstructured data from diverse sources. Rely on automated preprocessing and embeddings to identify similarities and find the data you need. Curate, version, clean, and route your data to wherever it’s needed to create exceptional AI applications.",
  },
  {
    tab:"elements",
    logo: IconLogoData,
    title:"Elements",
    bg: bgData,
    img: imgData,
    icon: iconData,
    des: "Explore and analyze vast quantities of unstructured data from diverse sources. Rely on automated preprocessing and embeddings to identify similarities and find the data you need. Curate, version, clean, and route your data to wherever it’s needed to create exceptional AI applications.",
  },
  {
    tab:"human",
    logo: IconLogoData,
    title:"Human Feedback",
    bg: bgData,
    img: imgData,
    icon: iconData,
    des: "Explore and analyze vast quantities of unstructured data from diverse sources. Rely on automated preprocessing and embeddings to identify similarities and find the data you need. Curate, version, clean, and route your data to wherever it’s needed to create exceptional AI applications.",
  },
  {
    tab:"marketplace",
    logo: IconLogoData,
    title:"Marketplace",
    bg: bgData,
    img: imgData,
    icon: iconData,
    des: "Explore and analyze vast quantities of unstructured data from diverse sources. Rely on automated preprocessing and embeddings to identify similarities and find the data you need. Curate, version, clean, and route your data to wherever it’s needed to create exceptional AI applications.",
  },
  {
    tab:"security",
    logo: IconLogoData,
    title:"Security",
    bg: bgData,
    img: imgData,
    icon: iconData,
    des: "Explore and analyze vast quantities of unstructured data from diverse sources. Rely on automated preprocessing and embeddings to identify similarities and find the data you need. Curate, version, clean, and route your data to wherever it’s needed to create exceptional AI applications.",
  },
];

const DataLoop = () => {
  const [tab, setTab] = useState(DATA_LOOP_LIST[0]);
  return (
    <div>
      <h2 className="text-[60px] text-grey-1000">Dataloop in a nutshell</h2>
      <p className="text-20 text-grey-700">
        The last AI application platform you’ll ever need.
      </p>
      <div>
        {DATA_LOOP_LIST.map((item, key) => (
          <div
            key={key}
            className={`flex px-4 py-2 ${tab.tab === item.tab ? "border-b-[3px] border-b-pink-800" : " border-b border-b-grey-300"}`}
            onClick={() => setTab(item)}
          >
            <item.logo />
            <span>{item.title}</span>
          </div>
        ))}
      </div>

      <div>
        
      </div>
    </div>
  );
};


export default DataLoop