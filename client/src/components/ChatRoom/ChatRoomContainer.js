import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";

import ChatRoomComponent from "./ChatRoomComponent";

export default function ChatRoomContainer() {
  const { roomId } = useParams();

  const [socket, setSocket] = useState(null);
  const [messageInput, setMessageInput] = useState("");
  const [chatArray, setChatArray] = useState([]);

  const handleOnChange = (event) => {
    setMessageInput(event.target.value);
  };

  const onMessageSend = () => {
    socket.emit("room.message", messageInput, roomId);
    setMessageInput("");
  };

  useEffect(() => {
    const socket = io("http://localhost:5000");
    socket.on("connect", () => {
      console.log(`Socket connected with id:${socket.id}`);
      setSocket(socket);
    });
    socket.emit("room.join", roomId);
    socket.on("chat-message", (data) => {
      setChatArray((chat) => {
        const _chat = [...chat];
        _chat.push({
          message: data,
        });
        return _chat;
      });
    });
    return () => socket.disconnect();
  }, []);

  return (
    <ChatRoomComponent
      {...{ handleOnChange, onMessageSend, chatArray, messageInput }}
    />
  );
}
