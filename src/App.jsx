import "./App.css";
import ContactForm from "./components/contactform/ContactForm";
import SearchBox from "./components/searchbox/SearchBox";
import ContactList from "./components/contactlist/ContactList";
import { Toaster } from "react-hot-toast";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/loader/Loader";
import { fetchContacts } from "./redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phone Book</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
      {loading && (<Loader />)}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
