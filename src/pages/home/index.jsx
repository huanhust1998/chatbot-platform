import Layout from "../../layout";
import BookMeeting from "./BookMeeting";
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
import "./home.css"
import { useEffect } from "react";

const Home = () => {
  
  useEffect(() => {
    const the_animation = document.querySelectorAll(".animation");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-animation");
          } else {
            entry.target.classList.remove("scroll-animation");
          }
        });
      },
      { threshold: 0.5 }
    );
    //
    for (let i = 0; i < the_animation.length; i++) {
      const elements = the_animation[i];

      observer.observe(elements);
    }
  }, []);
  
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
