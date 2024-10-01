import { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
  banana,
}) {
  const [contact, setContact] = useState(null);
  console.log("Contacts:", contact);
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
        console.log(contact);
      } catch (e) {
        console.error(e);
      }
    }
    fetchContact();
  }, []);
  return <>{contact?.name};</>;
}
