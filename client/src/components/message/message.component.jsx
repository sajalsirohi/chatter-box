import React from "react";

import "./message.styles.scss";

const Message = ({ message: { user, text }, name }) => {
  const trimmedName = name.trim().toLowerCase();
  let isSentByCurrentUser = false;

  if (user === trimmedName) {isSentByCurrentUser = true;}

  return (
    <div
      className={`${
        isSentByCurrentUser ? "justify-right" : "justify-left"
      } msg-container`}
    >
      {isSentByCurrentUser ? null : <span className="user-name">{user}</span>}
      <div className={`${isSentByCurrentUser && "diff-msg"} msgbox`}>
        <div className="msg-txt">{text}</div>
      </div>
    </div>
  );
};

export default Message;
