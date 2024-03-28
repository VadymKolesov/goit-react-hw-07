import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contactsOps";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={css.card}>
      <div className={css.contact}>
        <div>
          <BsFillPersonFill size={18} />
          <p>{name}</p>
        </div>
        <div>
          <BsFillTelephoneFill size={18} />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.delete}
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
