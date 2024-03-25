import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
// import { faIcon } from '@fortawesome/free-solid-svg-icons';

import '../css/Chat.css';

// class Header extends React.Component {
//     render() {
//       return (
//         <div className="header">
//           <FontAwesomeIcon icon={faIcon} />
//           <h1>Title</h1>
//           <p>Subtitle</p>
//         </div>
//       );
//     }
// }

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: ''
    };
  }

  handleChange = (event) => {
    this.setState({ newMessage: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { messages, newMessage } = this.state;
    if (newMessage !== '') {
      this.setState({
        messages: [...messages, newMessage],
        newMessage: ''
      });
    }
  }

  render() {
    const { messages, newMessage } = this.state;

    return (
      <div className="chat" >

        {/* <Header /> */}

        <div className="message-list">
          {messages.map((message, index) => (
            <div key={index} className="message">{message}</div>
          ))}
        </div>
        <div className="message-input"></div>
        <form onSubmit={this.handleSubmit} className="input-container">
          <div className="input-wrapper">
            <input
              type="text"
              value={newMessage}
              onChange={this.handleChange}
              placeholder="Nhập tin nhắn..."
            />
            <button type="submit" className="send-button">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </form>
        
      </div>
    );
  }
}

export default Chat;