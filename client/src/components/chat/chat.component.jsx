import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./chat.styles.scss";


import InfoBar from "../../components/infobar/infobar.component";
import Input from "../../components/input/input.component";
import Messages from "../../components/messages/messages.component";

import io from "socket.io-client";

let socket;

const Chat = ({ joiningDetails }) => {
  const { name, roomName } = joiningDetails;
  const ENDPOINT = "https://react-redux-chat-appp.herokuapp.com/";

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit("join", { name, roomName }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, name, roomName]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <div className="outer">
      <InfoBar name={name} roomName={roomName} />

      <div className="inner">
      <div className="chat-container">
      <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
        
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  joiningDetails: state.join.joiningDetails,
});

export default connect(mapStateToProps)(Chat);

