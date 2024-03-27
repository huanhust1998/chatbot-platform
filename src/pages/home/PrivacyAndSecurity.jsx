import { awards } from "../../assets/images";
import { ArrowIcon } from "../../components/icons";

const PrivacyAndSecurity = () => {
  return (
    <div className="flex justify-center items-center gap-20">
      <div className="w-[400px] flex items-center justify-center flex-col gap-10">
        <h2 className="text-[48px] font-semibold leading-10 text-center">Privacy and security</h2>
        <p className="text-grey-700">
          At Chatbot-Platform, privacy and security are our top priorities. We
          adhere to leading industry standards and are dedicated to ensuring the
          security of your data with comprehensive governance throughout the
          entire platform.
        </p>
        <div className="flex gap-2 items-center mt-10 hover:cursor-pointer">
          <p>Learn more</p>
          <div className="h-6 w-6">
            <ArrowIcon />
          </div>
        </div>
      </div>
      <div className="w-[400px] flex items-center justify-center flex-col gap-10">
        <h2 className="text-[48px] font-semibold leading-10 text-center">Awards</h2>
        <img src={awards} className="w-1/2 h-1/2"/>
      </div>
    </div>
  );
};
export default PrivacyAndSecurity;
