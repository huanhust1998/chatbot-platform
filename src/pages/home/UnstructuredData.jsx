import {
  IconAddMore,
  IconAudio,
  IconGIS,
  IconImage,
  IconJson,
  IconLidar,
  IconMultiModal,
  IconPDF,
  IconText,
  IconVideo,
} from "../../components/icons";

const UNSTRUCTURED_DATA_LIST = [
  { logo: IconImage, title: "Image" },
  { logo: IconVideo, title: "Video" },
  { logo: IconText, title: "Text" },
  { logo: IconJson, title: "JSON" },
  { logo: IconLidar, title: "Lidar" },
  { logo: IconAudio, title: "Audio" },
  { logo: IconPDF, title: "PDF" },
  { logo: IconMultiModal, title: "Multi-modal" },
  { logo: IconGIS, title: "GIS" },
  { logo: IconAddMore, title: "add more..." },
];

const UnstructuredData = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-10">
      <div className="w-[600px] flex items-start justify-center animation">
        <h2 className="text-[60px] text-grey-1000 font-semibold text-center leading-[80px]">
          Yes, we support your unstructured data
        </h2>
      </div>
      <div className="flex w-full gap-40">
        {UNSTRUCTURED_DATA_LIST.slice(0, 5).map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <item.logo />
            <p className="text-[13px]">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="flex w-full gap-40">
        {UNSTRUCTURED_DATA_LIST.slice(5).map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <item.logo />
            <p className="text-[13px]">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UnstructuredData;
