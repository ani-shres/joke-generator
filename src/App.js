import logo from "./logo.svg";
import "./App.css";
import useRandomJoke from "./useRandomJoke";
import { useRef, useState } from "react";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("Steve");
  const [lastName, setLastName] = useState("Jobs");

  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault(); // prevent refresh
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };
  //Custome Hook

  //const joke = useRandomJoke("Anisha","shrestha")

  return (
    <div className="App">
      <header className="App-header">
        <h1>Joke Generator</h1>
        <h2 className="App--joke">{joke}</h2>
        <form className="App--form">
          <input
            className="App--form--firstname"
            placeholder="first name"
            ref={firstNameRef}
            // value={firstName}
            // onChange={(e) => e.target.value}  //creates new request every single time
          />
          <input
            className="App--form--lastname"
            placeholder="last name"
            ref={lastNameRef}
            // value={lastName}
            // onChange={(e) => e.target.value}
          />
        </form>
        <button className="App--header--button" onClick={generateJoke}>
          generate joke
        </button>
      </header>
    </div>
  );
}

export default App;
