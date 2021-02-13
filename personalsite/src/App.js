import Navbar from "./components/Navbar/Navbar";
import poemAPI from "./components/poemAPI/poemAPI";
import './App.css';
import React from 'react';
import beach from './beach.jpeg'
import coco from './coco.jpg'
import me from './me.jpg'


function App() {
  const name = "Isabelle";

  const buttonFunction = () => {
    console.log("the button was clicked");
  } 

  const onChangeFunction = (event) => {
    console.log(event.target.value);
  } 

  const siblingsList = ["Billy", "Read"];
  const siblingsMap = siblingsList.map((sibling) => {
    return(
      <p className="blue-text">One is {sibling}</p>
    )
  });

  return (
    <div className="App">
      <head>
        <title>Isabelle Kitchel</title>
      </head>
      <Navbar />
      <body>
        <h2 className="white-text" id = "pink-background">About me:</h2>
        <button id = "pink-background" onClick={buttonFunction}>Hello!</button>
        <p className="blue-text">My name is {name}. I am a '23 at Dartmouth College. I am studying computer science
            and economics.</p>
        <img src={me} height={500} width={375}/>
        <div>
        <h2 className="white-text" id = "pink-background">Some things I like:</h2>
          <ul>
            <li className="blue-text">Spending time with friends and family</li>
            <li className="blue-text">Skiing and running</li>
            <li className="blue-text">Exploring new places</li>
          </ul>
          <img src={beach} height={500} width={700}/>
        </div>
        <h2 className="white-text" id = "pink-background">Family:</h2>
        <p className="blue-text">I have two brothers:.</p>
        <div>{siblingsMap}</div>
        <h2 className="white-text" id = "pink-background">My dog:</h2>
        <img src={coco} height={500} width={400}/>
        <h2 className="white-text" id = "pink-background"> </h2>
        <input type="text" onChange={onChangeFunction}/>
        <poemAPI />
      </body>
    </div>
  );
}

export default App;
