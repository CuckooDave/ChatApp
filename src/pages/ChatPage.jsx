import { useContext } from "react";
import { useState } from "react";
import { Message } from "../components/Message";
import { MessageForm } from "../components/MessageForm";
import { AppContext } from "../contexts/AppContext";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import "../styles/Chat.css";

export function ChatPage() {
    const [ messages, setMessages] = useState([]);
    const [ client, setClient ] = useState(null);
    const [ chatRoom, setChatRoom ] = useState(null);
    const [ ready, setReady ] = useState(false);
    const context = useContext(AppContext);

    function handleSubmit(message) {
        client.publish({
            room: 'algebra',
            message: message,
        });
    }

    function handleSignOut() {
        context.setUsername('');
    }
    

    const messageComponents = messages.map((message) => {
        return <Message
            key={message.id}
            avatarIndex={message.author.avatarIndex}
            author={message.author.username}
            text={message.text}
        />;
    });

    useEffect(() => {
        const drone = new window.Scaledrone('Dco8xZiS00SW2CSg');
        //nbuHcqqhgdYvrUEU
        drone.on('open', (error) => {
            if (error) {
                console.log(error);
            } else {
                const room = drone.subscribe('algebra');

                setClient(drone);
                setChatRoom(room);
            }
        });
    }, []);

    useEffect(() => {
        if (chatRoom !== null && !ready) {
            chatRoom.on('data', (data) => {
                setMessages((messages) => {
                    return [ ...messages, data ];
                });
            });
            setReady(true);
        }
    }, [chatRoom, ready]);

    if (!context.isSignedIn) {
        return <Navigate to="/" replace />;
    }

    return (
        <div>
            <h1 className="chat-headline">Chat page</h1>
            <button className="sign-out" type="button" onClick={handleSignOut}>Sign out</button>
            <div id="mlist" className="message-list">
                {messageComponents}
            </div>
            <div className="message2">
            <MessageForm onSubmit={handleSubmit}
                username={context.username}
                avatarIndex={context.avatarIndex}
            />
            </div>
        </div>
    );
};
