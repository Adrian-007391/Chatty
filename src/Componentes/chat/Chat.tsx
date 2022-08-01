import React from "react";

function Chat(props) {
  const name = props.user.displayName;
  const photourl = props.user.photoURL;
  const email = props.user.email;
  return (
    <div>
      <h1>chat component</h1>
      <h2>hello {props.user.displayName}</h2>
      <h3>{email}</h3>
      <img src={props.user.photoURL} />
      <button onClick={props.logout}>log out</button>
    </div>
  );
}

export default Chat;
