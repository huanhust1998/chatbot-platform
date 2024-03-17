import { heroImgTable } from "../../assets/images";

const EndHomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImgTable})`,
      }}
      className="bg-cover bg-no-repeat h-[600px] w-full flex flex-col items-center justify-center gap-10 mb-10"
    >
      <h2 className="text-44 text-white font-semibold">
        Let the builders build now
      </h2>
      <button
        className="flex items-center justify-center px-6 py-5 bg-grey-1000 rounded-xl hover:bg-pink-700 group duration-200 mt-10"
        type="button"
      >
        <span className="text-16 font-semibold group-hover:text-grey-1000 text-white">
          BOOK A MEETING
        </span>
      </button>
    </div>
  );
};

export default EndHomePage;
