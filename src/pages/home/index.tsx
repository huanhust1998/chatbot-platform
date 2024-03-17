import React from "react";
import Layout from "../../layout";
import BookMeeting from "./BookMeeting";
import { intro } from "../../assets/images";
import Marketplace from "./Marketplace";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <BookMeeting />
        {/* <Partner /> */}

        <div className="mt-40 flex items-center justify-center relative">
          <img src={intro} alt="intro" />
          <div className="absolute w-[820px] flex justify-center items-center left-[25%]">
            <h2 className="text-grey-1000 text-[48px] leading-[52px] font-medium text-center">
              Build ambitious workflows with data, models, and humans. Deploy
              solutions in hours, not weeks.
            </h2>
          </div>
        </div>
        <Marketplace />
      </div>
    </Layout>
  );
};
export default Home;
