// root.jsx
import React, { useState } from "react";
import Template from "./component/Template";

export default function App() {
  const [userName, setUserName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleButtonClick = async () => {
    try {
      const response = await fetch(`/sayHello?name=${userName}`);
      const data = await response.json();
      setGreeting(data.greeting);
    } catch (error) {
      console.error("Error calling sayHello API:", error);
    }
  };

  return (
    <Template title="Hello App">
      <h1>Hello world234!</h1>

      {/* Input and Button for user name */}
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleButtonClick}>Say Hello</button>

      {/* Display greeting */}
      {greeting && <p>{greeting}</p>}
    </Template>
  );
}
