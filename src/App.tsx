import { useState } from "react";
import "./App.css";
import Login from "./Componentes/login/Login";
import Chat from "./Componentes/chat/Chat";
function App() {
  const [user, setuser] = useState<any>(undefined);

  if (user === undefined) {
    return <Login />;
  } else {
    return <Chat />;
  }
}

export default App;
