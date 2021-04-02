import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./components/Message";
import db from "./components/firebase";

function App() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([
    { username: "", message: "" },
    
  ]);
  const [username, setUsername] = useState("");

  useEffect(()=>{
	  db.collection('messages').onSnapshot(snapshot=>{
		setMessage(snapshot.docs.map(doc=>doc.data()))
	  })
  },[])

  useEffect(() => {
    setUsername(prompt("Please Enter Your Name"));
	
  }, []);


  const sendMessage = (event) => {
    // all the logic to send a message goes
    event.preventDefault();
    setMessage([...message, { username: username, message: input }]);
    setInput("");
  };



  return (
    <div className="App">
      <h1>Hello clever programmer</h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button
            variant="contained"
            disabled={!input}
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            send message
          </Button>
        </FormControl>
      </form>

      {message.map((message, index) => {
        return <Message username={username} message={message} />;
      })}
    </div>
  );
}

export default App;
