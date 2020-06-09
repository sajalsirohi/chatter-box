import React from "react";
import "./input.styles.scss";

const Input = ({message, setMessage, sendMessage}) => (
    <form className="message-form">
        <input
        className="input-message"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={event => setMessage(event.target.value)}
        onKeyPress={event => event.key === 'Enter' && sendMessage(event)}
        />
        <button className="send-btn" onClick={event => sendMessage(event)}>send</button>
    </form>
)

export default Input;