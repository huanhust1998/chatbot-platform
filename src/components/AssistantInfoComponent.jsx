import { useState } from "react";

const AssistantInfoComponent = () => {
  const [assistantName, setAssistantName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [userName, setUserName] = useState("");
  const [modelName, setModelName] = useState("");

  const handleAssistantNameChange = (event) => {
    setAssistantName(event.target.value);
  };

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleModelNameChange = (event) => {
    setModelName(event.target.value);
  };

  const handleConfirm = () => {
    // Perform actions with the entered information
    console.log(assistantName, apiKey, userName, modelName);
  };

  return (
    <div>
      <h2>Assistant Information</h2>
      <div>
        <label htmlFor="assistantName">Assistant Name:</label>
        <input
          type="text"
          id="assistantName"
          value={assistantName}
          onChange={handleAssistantNameChange}
        />
      </div>
      <div>
        <label htmlFor="apiKey">API Key:</label>
        <input
          type="text"
          id="apiKey"
          value={apiKey}
          onChange={handleApiKeyChange}
        />
      </div>
      <div>
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={handleUserNameChange}
        />
      </div>
      <div>
        <label htmlFor="modelName">Model Name:</label>
        <input
          type="text"
          id="modelName"
          value={modelName}
          onChange={handleModelNameChange}
        />
      </div>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default AssistantInfoComponent;