import { avatarImages2 } from "../library/avatar";

import "../styles/Chat.css";

export function Message(props) {
    return (
        <div className="message">
            <img className="chat-image" src={avatarImages2[props.avatarIndex]} alt={props.author} width={100} height={100} />
            <div className="message-author">{props.author}</div>
            <div className="message-text">{props.text}</div>
        </div>
    );
}