import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faFileUpload } from "@fortawesome/free-solid-svg-icons";

import { IconBase } from "react-icons";

import "../css/Chat.css"; // Import CSS file

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [file, setFile] = useState(null);
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  const handleUploadFile = () => {
    console.log(file);
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <div className="chat-header-icon">
          <IconBase />
        </div>
        <div className="chat-header-text">
          <h2>MinhMX</h2>
          <p>Đẹp trai quá</p>
        </div>
      </header>
      <div className="chat-messages" ref={chatRef}>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <div className="chat-input-container">
        <div className="chat-input">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your message..."
          />
          <input type="file" onChange={handleFileChange} />

          <button onClick={handleUploadFile}>
            <FontAwesomeIcon icon={faFileUpload} />
          </button>

          <button onClick={handleSendMessage}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;