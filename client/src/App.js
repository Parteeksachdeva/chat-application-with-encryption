import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import ChatRoomContainer from "./components/ChatRoom/ChatRoomContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<p>Hello Wo</p>} />
      <Route path="/:roomId" element={<ChatRoomContainer />} />
    </Routes>
  );
}

export default App;
