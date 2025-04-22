import "./App.css";
import Person from "./Person.jsx";
import React, { useState } from "react";

const info = [
  {
    id: 1,
    name: "Bertie Yates",
    age: 29,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
  },
  {
    id: 2,
    name: "Hester Hogan",
    age: 32,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
  },
  {
    id: 3,
    name: "Larry Little",
    age: 36,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    id: 4,
    name: "Sean Walsh",
    age: 34,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: 5,
    name: "Lola Gardner",
    age: 29,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
];

function App() {
  const [people, setPeople] = useState(info);
  return (
    <div className="App">
      <header className="app-container">
        <div class="container">
          <h2>{people.length} birthdays today</h2>

          <ul class="people-list">
            {people.map((person, i) => (
              <Person
                key={person.id}
                id={person.id}
                name={person.name}
                age={person.age}
                image={person.image}
                index={i}
                setPeople={setPeople}
              />
            ))}
          </ul>

          <button class="clear-btn" onClick={() => setPeople([])}>
            {/* <button class="clear-btn" onClick={() => setRender(false)}> */}
            {/* {rendered ? "Clear" : "Show"} All */}
            Clear All
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
