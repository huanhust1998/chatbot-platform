import { backgroundIntegration, integration } from "../../assets/images";
import { ArrowIcon } from "../../components/icons";

const Integrations = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundIntegration})`,
      }}
      className="bg-cover bg-no-repeat h-[800px] w-4/5 flex flex-col items-center justify-center gap-10"
    >
      <h2 className="text-44 text-white font-semibold">Integrations</h2>
      <img src={integration} />
      <div className="flex gap-2 items-center mt-10 hover:cursor-pointer">
        <p className="text-grey-1000 text-20 font-semibold">
          More integrations
        </p>
        <div className="h-6 w-6">
          <ArrowIcon color={"#000"} />
        </div>
      </div>
    </div>
  );
};
export default Integrations;
