import { marketplace } from "../../assets/videos";
import { ArrowIcon } from "../../components/icons";

const MARKETPLACE_LIST = [
  "Data Management",
  "Pipelines",
  "ML Operations",
  "Human Feedback",
];

const Marketplace = () => {
  return (
    <section className="flex justify-center items-center mt-20 flex-col">
      <h2 className="text-[60px] animation">Simply robust AI development</h2>
      <p className="text-20 text-grey-700 animation">
        Dataloop makes every single data person in your organization feel at
        home.
      </p>
      <div className="flex gap-10 mt-20">
        <div className="flex flex-col gap-5">
          <h3 className="text-grey-1000 text-24">Marketplace</h3>
          <div className="w-[230px]">
            <p>Hit the ground running with 100s of pre-created nodes</p>
            <div className="h-6 w-6">
              <ArrowIcon />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {MARKETPLACE_LIST.map((item, index) => (
              <div key={index}>
                <div className="h-[1px] w-[50px] bg-gray-400"></div>
                <span className="text-24 text-gray-400">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[900px]">
          <video className="rounded-xl" autoPlay muted loop>
            <source src={marketplace} />
          </video>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 border-b border-b-black px-2 py-2">
        <p className="text-16 text-grey-1000">Explore the platform</p>
        <div className="w-6 h-6">
          <ArrowIcon />
        </div>
      </div>
    </section>
  );
};
export default Marketplace;
