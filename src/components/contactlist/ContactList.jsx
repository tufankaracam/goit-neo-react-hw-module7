import { useDispatch, useSelector } from "react-redux";
import Contact from "../contact/Contact";
import styles from "./contactlist.module.css";
import {
  selectContacts,
  selectFilteredContacts,
} from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { deleteContact, fetchContacts } from "../../redux/contactsOps";
import { useEffect } from "react";

export default function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.container}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact?.id}
          data={contact}
          deleteContact={handleDeleteContact}
        />
      ))}
    </div>
  );
}
