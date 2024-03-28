import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import { fetchContacts } from "../../redux/contactsOps";

function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isError && <p>Something went wrong. Please, try again.</p>}
        {isLoading ? <p>Loading contacts...</p> : <ContactList />}
      </div>
    </>
  );
}

export default App;
