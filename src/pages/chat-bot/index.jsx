import { useState } from "react";
import Layout from "../../layout";
import { chatbot } from "../../assets/images";
import { postChatbot } from "../../services/chat.service";
import { uid } from 'uid';

const LIST_ITEM_CHATBOT = [
  { title: "All chats", key: "all_chats" },
  { title: "Your bots", key: "your_bots" },
  { title: "Subscribe", key: "subscribe" },
  { title: "Setting", key: "setting" },
  { title: "Send feedback", key: "send_feedback" },
];

export const Chatbot = () => {
  const [itemChatbot, setItemChatbot] = useState(LIST_ITEM_CHATBOT[0].key);
  const [chatInput, setChatInput] = useState("")

  const handleSubmitChatbot = async () => {
    if(!chatInput)return;
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
    console.log({ response });
  };
  return (
    <Layout>
      <div className="w-full h-[93%] flex">
        <div className="w-1/6 bg-white h-full pl-3 gap-2 flex flex-col border-r border-r-gray-200">
          {LIST_ITEM_CHATBOT.map((item) => (
            <button
              key={item.key}
              className={`${
                itemChatbot === item.key ? "bg-grey-200" : "bg-white"
              } w-full py-3 pl-3 hover:bg-grey-200`}
              onClick={() => setItemChatbot(item.key)}
              type="button"
            >
              <p className="text-16 font-bold">{item.title}</p>
            </button>
          ))}
        </div>
        <div className="w-5/6 h-full flex justify-center items-center relative p-5">
          <div className="absolute bottom-5 w-full p-5 flex gap-5 items-center justify-center">
            <input
              placeholder="Type your message here..."
              className="w-3/5 h-12 rounded-3xl border p-4"
              onChange={(e) => setChatInput(e.target.value)}
            />
            <button
              className="bg-blue-800 py-2 px-7 h-12 rounded-3xl text-white font-bold"
              type="button"
              onClick={() => handleSubmitChatbot()}
            >
              Submit
            </button>
          </div>
          <img src={chatbot} />
        </div>
      </div>
    </Layout>
  );
};
