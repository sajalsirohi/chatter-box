import React from "react";

import "./messages.styles.scss";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../message/message.component";

const Messages = ({ messages, name }) => {
    return (
        <ScrollToBottom>
        {messages.map((message, idx) => (
          <div key={idx} className="msgs">
            <Message message={message} name={name} />
          </div>
        ))}
      </ScrollToBottom>
    )
};

export default Messages;
