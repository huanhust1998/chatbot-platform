import { pythonSDKDoc } from "../../assets/images";
import { ArrowIcon } from "../../components/icons";

const PythonSDKDoc = () => {
  return (
    <div className="mt-20 relative">
      <img src={pythonSDKDoc} />
      <div className="absolute top-24 left-20 flex gap-20">
        <div className="bg-[#2f293d] px-8 py-10 rounded-xl h-[200px]">
          <div className="elementor-widget-container">
            <pre className="text-white">
              <span>
                <strong className="text-[#ed6f9b]">import</strong>
              </span>{" "}
              dtlpy{" "}
              <span>
                <strong className="text-[#ed6f9b]">as</strong>
              </span>{" "}
              dl{"\n"}project{" "}
              <span>
                <strong className="text-[#ed6f9b]">=</strong>
              </span>{" "}
              dl.projects.get(project_name
              <span>
                <strong className="text-[#ed6f9b]">=</strong>
              </span>
              <span>
                <em className="text-[#ddd480]">‘My-Project’</em>
              </span>
              ){"\n"}project.integrations.create(integrations_type
              <span>
                <strong className="text-[#ed6f9b]">=</strong>
              </span>
              dl.ExternalStorage.S3,{"\n"}
              {"    "}name
              <span>
                <strong className="text-[#ed6f9b]">=</strong>
              </span>
              <span>
                <em className="text-[#ddd480]">‘S3ntegration’</em>
              </span>
              ,{"\n"}
              {"    "}options
              <span>
                <strong>=</strong>
              </span>
              {"{"}
              <span>
                <em className="text-[#ddd480]">“key”</em>
              </span>
              :{" "}
              <span>
                <em className="text-[#ddd480]">“Access key ID”</em>
              </span>
              ,{" "}
              <span>
                <em className="text-[#ddd480]">“secret”</em>
              </span>
              :{" "}
              <span>
                <em className="text-[#ddd480]">“Secret access key”</em>
              </span>
              {"}"}
            </pre>
            <span className="underscore">_</span>{" "}
          </div>
        </div>

        <div className="max-w-[300px] flex flex-col gap-10">
          <h3 className="text-[38px] text-white leading-10">
            Drop down to code at will
          </h3>
          <p className="text-20 text-white">
            Drop down to code at will Drag and drop is not suitable for
            everyone. With Dataloop’s Python SDK, software engineers can
            interact with Dataloop without the need for constant clicks in a
            GUI.
          </p>
          <div className="flex gap-2 items-center mt-10 hover:cursor-pointer">
            <p className="text-white">Learn more</p>
            <div className="h-6 w-6">
              <ArrowIcon color={"#fff"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonSDKDoc;
