import { useState } from "react";
import Layout from "../../layout";
import { chatbot, logo } from "../../assets/images";
import { postChatbot } from "../../services/chat.service";
import { uid } from "uid";
import {
  IconAllChat,
  IconArrowRight,
  IconSendChat,
  IconSendFeedback,
  IconSetting,
  IconSubscribe,
  IconYourBot,
} from "../../components/icons";

const LIST_ITEM_CHATBOT = [
  { title: "All chats", key: "all_chats", icon: IconAllChat },
  { title: "Your bots", key: "your_bots", icon: IconYourBot },
  { title: "Subscribe", key: "subscribe", icon: IconSubscribe },
  { title: "Setting", key: "setting", icon: IconSetting },
  { title: "Send feedback", key: "send_feedback", icon: IconSendFeedback },
];

const LIST_FEEDBACK = [
  "Tell me more",
  "What are some examples of platforms and devices that can access you?",
  "How do you function without a physical presence?",
  "Can you tell me more about ChatGPT and how it was created?",
];
const answerTest =
  "I apologize for the confusion earlier. I am an AI language model created by OpenAI called ChatGPT.can be accessed through various platforms and devices. Is there something specific you would like to know or discuss?";

export const Chatbot = () => {
  const [itemChatbot, setItemChatbot] = useState(LIST_ITEM_CHATBOT[0].key);
  const [chatInput, setChatInput] = useState("");
  const [listChatInput, setListChatInput] = useState([]);
  // const [answer, setAnswer] = useState("");

  const handleSubmitChatbot = async (e) => {
    e.preventDefault();
    setChatInput("");
    if (!chatInput) return;
    const listChat = [...listChatInput, chatInput];
    setListChatInput(listChat);
    const data = {
      conv_uid: uid(),
      user_input: chatInput,
      user_name: "Huan",
      chat_mode: "",
      select_param: "string",
      model_name: "string",
      incremental: false,
    };

    const response = await postChatbot(data);
    console.log(response);
  };

  return (
    <Layout>
      <div className="w-full h-[90%] flex">
        <div className="w-1/6 px-5 border-r border-r-gray-200">
          <div className="w-full bg-white h-full pl-3 gap-2 flex flex-col">
            {LIST_ITEM_CHATBOT.map((item) => (
              <button
                key={item.key}
                className={`${
                  itemChatbot === item.key
                    ? "bg-pink-800 text-white"
                    : "bg-white"
                } w-full py-3 pl-3 hover:bg-pink-800 rounded-lg flex gap-2`}
                onClick={() => setItemChatbot(item.key)}
                type="button"
              >
                <item.icon
                  color={itemChatbot === item.key ? "#fff" : "#323442"}
                />
                <p className="text-16 font-bold">{item.title}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="w-5/6 h-full flex justify-center items-center flex-col relative p-5">
          <div className="xl:w-[900px] w-[500px] h-[80%] relative overflow-y-scroll no-scrollbar mt-10 gap-40 flex flex-col">
            {listChatInput.map((item) => (
              <div key={item} className="w-full">
                <div className="absolute right-0 bg-blue-700 p-3 rounded-lg text-white">
                  {item}
                </div>
                <div
                  key={item}
                  className="absolute left-0 bg-gray-300 p-2 rounded-lg text-gray-900 mt-16 flex gap-2 w-[80%]"
                >
                  <img src={logo} className="w-5 rounded h-5" />
                  {answerTest}
                </div>
              </div>
            ))}

            {!!listChatInput.length && (
              <div className="w-[80%] flex flex-col gap-2 mt-10 ">
                {LIST_FEEDBACK.map((item, index) => (
                  <div
                    key={index}
                    className="border border-grey-200 p-3 text-grey-900 rounded-lg hover:cursor-pointer relative hover:bg-grey-200"
                    onClick={() => {
                      handleSubmitChatbot();
                      setChatInput(item);
                    }}
                  >
                    {item}
                    <div className="absolute right-5 bottom-2">
                      <IconArrowRight />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <form
            className="absolute bottom-5 xl:w-[900px] w-[500px] flex gap-5 items-center justify-center"
            onSubmit={(e) => handleSubmitChatbot(e)}
          >
            <input
              placeholder="Type your message here..."
              className="w-full h-12 rounded-3xl border outline-pink-600 p-4"
              onChange={(e) => setChatInput(e.target.value)}
              value={chatInput}
            />
            <button
              className="bg-pink-800 py-2 px-7 h-12 rounded-3xl text-white font-bold flex items-center justify-center gap-2"
              type="submit"
            >
              Submit
              <IconSendChat />
            </button>
          </form>

          <img src={chatbot} className="absolute -z-10" />
        </div>
      </div>
    </Layout>
  );
};
