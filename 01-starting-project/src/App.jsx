//import compmentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js"; //Named object need currly braces

import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import Card from "./components/Card.jsx";
import TabButton from "./components/TabButton.jsx";

const CARD_DATA = [
  {
    name: "Anthony Blake",
    children:
      "Blake is a professor of Computer Science at the University of Illinois.",
    mail: "mailto:blake@example.com",
    description: "Email blake",
  },
  {
    name: "Maria Miles",
    children:
      "Maria is a professor of Computer Science at the University of Illinois.",
    mail: "mailto:blake@example.com",
    description: "Email Maria",
  },
];

function App() {
  function handleSelect() {
    console.log("Hello World - selected");
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        {/*
        <Card {...CARD_DATA[0]} />
        <Card {...CARD_DATA[1]} />
        */}
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
