import { generativeAI } from "../../assets/images";
import { ArrowIcon } from "../../components/icons";

const GenerativeAI = () => {
  return (
    <section className="flex gap-20 px-60">
      <div className="w-1/3">
        <h2 className="text-[60px] text-grey-1000 animation">Generative AI</h2>
        <p className="text-20 text-grey-700 animation">
          Build multimodal pipelines for extraordinary AI application
          development. Utilize both off-the-shelf and fine-tuned Large Language
          Models (LLMs), incorporate Retrieval-Augmented Generation (RAG)
          techniques, and leverage foundation models to create GenAI solutions
          that impress your customers and place you ahead of the competition.
        </p>
        <div className="flex gap-2 items-center mt-10 hover:cursor-pointer">
          <p>GenAI In Dataloop</p>
          <div className="h-6 w-6">
            <ArrowIcon />
          </div>
        </div>
      </div>
      <div>
        <img src={generativeAI}/>
      </div>
    </section>
  );
};

export default GenerativeAI;
