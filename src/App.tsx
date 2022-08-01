import { useState } from "react";
import "./App.css";
import Login from "./Componentes/login/Login";
import Chat from "./Componentes/chat/Chat";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
function App() {
  const [user, setuser] = useState<any>(undefined);
  const auth = getAuth();
  let provider: any = undefined;
  const login = (prov: string) => {
    if (prov == "google") {
      provider = new GoogleAuthProvider();
    } else if (prov == "github") {
      provider = new GithubAuthProvider();
    }
    signInWithPopup(auth, provider).then((result) => {
      setuser(result.user);
      console.log(result);
    });
  };
  const logout = () => {
    signOut(auth).then(() => setuser(undefined));
  };
  if (user === undefined) {
    return <Login login={login} />;
  } else {
    return <Chat user={user} logout={logout} />;
  }
}

export default App;
