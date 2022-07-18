import React from "react";

export default function ChatRoomComponent({
  handleOnChange,
  onMessageSend,
  chatArray,
  messageInput,
}) {
  return (
    <section className="flex flex-col justify-center m-10">
      <div className="flex flex-col">
        {chatArray.map((chat, index) => (
          <div key={index}>
            <p className="p-3">{chat?.message}</p>
          </div>
        ))}
      </div>

      <input
        className="border-2"
        onChange={handleOnChange}
        value={messageInput}
      />
      <button onClick={onMessageSend}>Send</button>
    </section>
  );
}
