import { seeYourself } from "../../assets/videos";

const SeeForYourself = () => {
  return (
    <section className="flex items-center justify-center flex-col mt-10 animation">
      <h2 className="text-[60px] text-grey-1000 animation">See for yourself</h2>
      <p className="text-20 text-grey-700 animation">
        Build as fast as you can dream (which translates to about 20x faster)
      </p>
      <video className="w-5/6 rounded-2xl mt-10" autoPlay muted loop>
        <source src={seeYourself} ></source>
      </video>
    </section>
  );
};

export default SeeForYourself;
