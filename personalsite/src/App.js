import logo from './logo.svg';
import './App.css';
import React from 'react';

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
      <body>
        <h2 className="white-text" id = "pink-background">About me:</h2>
        <button id = "pink-background" onClick={buttonFunction}>Hello!</button>
        <p className="blue-text">My name is {name}. I am a '23 at Dartmouth College. I am studying computer science
            and economics.</p>
        <img src="./2A1D36DD-28EB-4403-979F-56BFC04582AE.jpg"/>
        <div>
        <h2 className="white-text" id = "pink-background">Some things I like:</h2>
          <ul>
            <li className="blue-text">Spending time with friends and family</li>
            <li className="blue-text">Skiing and running</li>
            <li className="blue-text">Exploring new places</li>
          </ul>
          <img src="personalsite/src/26D9A2E6-2AB7-4061-9AC9-FA172F1C2F1E.jpeg"/>
        </div>
        <h2 className="white-text" id = "pink-background">Family:</h2>
        <p className="blue-text">I have two brothers:.</p>
        <div>{siblingsMap}</div>
        <h2 className="white-text" id = "pink-background">My dog:</h2>
        <img src="./IMG_6189.jpg"/>
        <input type="text" onChange={onChangeFunction}/>
      </body>
    </div>
  );
}

export default App;
