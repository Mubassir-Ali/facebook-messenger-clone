import React, { useState,useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './components/Message'

function App() {
	const [ input, setInput ] = useState('');
	const [ message, setMessage ] = useState([{user:"Mubassir",text:"hello whats up"},{user:"Ali",text:"hi how are you"} ]);
  const [username,setUsername]=useState('')

useEffect(()=>{
setUsername(prompt('Please Enter Your Name'))
},[])
	const sendMessage = (event) => {
		// all the logic to send a message goes
		event.preventDefault();
		setMessage([ ...message, input ]);
		setInput('');
	};

	// console.log(input);
	console.log(message);
	return (
		<div className="App">
			<h1>Hello clever programmer</h1>
      <h2>Welcome {username}</h2>
			<form>
				<FormControl>
					<InputLabel>Enter a message...</InputLabel>
					<Input value={input} onChange={(e) => setInput(e.target.value)} />
					<Button variant="contained" disabled={!input} color="primary" type="submit" onClick={sendMessage}>
						send message
					</Button>
				</FormControl>
        
			</form>

			{message.map((msg, index) => {
				return  <Message user={msg.user} text={msg.text} user={username}/>;
			})}
     
		</div>
	);
}

export default App;
