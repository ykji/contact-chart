import ContactForm from "../components/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { ContactDetails } from "../interfaces/contact";
import { ChangeEvent, FormEvent, useState } from "react";
import { addContact } from "../redux/actions/contactActions";
import { State } from "../redux/reducers/contactReducer";

const Contact = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const contacts = useSelector((state: State) => state.contacts);
  const [formData, setFormData] = useState<Omit<ContactDetails, "id">>({
    age: "24",
    name: "Yash",
    gender: "Male",
    status: "active",
    designation: "SDE",
    email: "yk@yash.in",
    mobile: "9027888638",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowForm(false);
    dispatch(addContact({ ...formData, id: new Date().getTime() }));
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center mt-8 px-10">
      {!showForm && (
        <>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 border border-white rounded-md"
          >
            Add new contact
          </button>
        </>
      )}
      {showForm && (
        <ContactForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Contact;
