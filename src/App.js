import "./App.css";
import React from "react";
import { useState } from "react";

import HeaderBanner from "./components/Header";
import FooterBanner from "./components/Footer";
import Poster from "./components/Poster";
import Counter from "./components/Counter";
import Person from "./components/Person";
import Form from "./components/Form";

// IMPORT ALL PICTURES AS OBJECTS
import fate from "./Images/fate.jpeg";
import outsidewire from "./Images/outsidewire.jpeg";
import queenGambit from "./Images/queenGambit.jpeg";
import starTrek from "./Images/starTrek.jpeg";
import witcher from "./Images/witcher.jpeg";

function App() {
  // Persons - why here?
  const [persons, setPersons] = useState([
    { name: "Tracy", age: "21" },
    { name: "Kat", age: "38" },
  ]);
  const handleClick = (index) => {
    let storedPeople = [...persons];
    storedPeople.splice(index, 1);
    setPersons(storedPeople);
    console.log("button was clicked");
  };
  // Form why here
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setPersons([...persons, { name: nameInput, age: parseInt(ageInput) }]);
    setNameInput("");
    setAgeInput("");
  };
  // Now the App
  return (
    <div className="App">
      {/* Header */}
      <div className="header">
        <HeaderBanner
          name="Katherine Ayers"
          masters="38"
          description="Code Nation Master 38 Week 5 reactjs."
        />
      </div>
      {/* Body */}
      <div className="content">
        <div>
          <h4>Netflix Images</h4>
          Recreate Netflix. Break the images into the components and then put
          your components together to match the image.
          {/* create a div section - flex row */}
          <div className="posterRow">
            {/* add each poster */}
            <Poster filePath={fate} altText={"Fate"} />
            <Poster filePath={outsidewire} altText={"Outside wire"} />
            <Poster filePath={queenGambit} altText={"Queens Gambit"} />
            <Poster filePath={starTrek} altText={"StarTrek"} />
            <Poster filePath={witcher} altText={"Witcher"} />
          </div>
        </div>
        <div>
          <h4>Counter</h4>
          Create a counter using useState, click events and functions. The
          counter should include a H1 element as well as two button elements.
          <div>
            <Counter />
          </div>
        </div>
        <div>
          <h4>Lists and Forms</h4>
          {persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={index}
                // annoymous function not HOF
                handleClick={() => handleClick(index)}
              />
            );
          })}
          <Form
            handleSubmit={handleSubmit}
            nameInput={nameInput}
            setNameInput={setNameInput}
            ageInput={ageInput}
            setAgeInput={setAgeInput}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <FooterBanner name="Katherine Ayers" github="Indykatz" />
      </div>
      {/* End of App div */}
    </div>
  );
}

export default App;
