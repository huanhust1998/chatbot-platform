import React from "react";
import Layout from "../../layout";
import BookMeeting from "./BookMeeting";
import { intro } from "../../assets/images";
import Marketplace from "./Marketplace";
import DataLoop from "./DataLoop";
import SeeForYourself from "./SeeForYourself";
import GenerativeAI from "./GenerativeAI";
import PythonSDKDoc from "./PythonSDKDoc";
import UnstructuredData from "./UnstructuredData";
import Integrations from "./Integrations";
import EndHomePage from "./EndHomePage";
import Partner from './Partner';
import PrivacyAndSecurity from "./PrivacyAndSecurity";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center gap-20 mb-10">
        <BookMeeting />
        <Partner />
        <DataLoop />
        <SeeForYourself />
        <Marketplace />
        <GenerativeAI />
        <PythonSDKDoc />
        <UnstructuredData />
        <Integrations />
        <PrivacyAndSecurity />
        <EndHomePage />
      </div>
    </Layout>
  );
};
export default Home;
