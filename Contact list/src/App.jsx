//Worked on project with Joy, Kristen, David, Bertha, and Blake

//https://app.netlify.com/sites/bespoke-cascaron-834b32/deploys/66f5fd653931c38791384724

import { useState } from "react";
import ContactList from "./Components/ContactList";
import SelectedContact from "./Components/SelectedContact";
import "./App.css";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          setSelectedContactId={setSelectedContactId}
          selectedContactId={selectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}
