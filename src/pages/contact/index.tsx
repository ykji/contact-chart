import { RootState } from "../../redux/store";
import ContactForm from "../../components/ContactForm";
import ContactCard from "../../components/ContactCard";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, FormEvent, useState } from "react";
import { addContact, deleteContact } from "../../redux/actions/contactActions";
import {
  CONTACT_DETAILS_INITIAL_STATE,
  ContactDetails,
} from "../../interfaces/contact";

const Contact = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const [formData, setFormData] = useState<Omit<ContactDetails, "id">>(
    CONTACT_DETAILS_INITIAL_STATE
  );

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
    setFormData(CONTACT_DETAILS_INITIAL_STATE);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="flex flex-col items-center py-28 px-10 min-h-screen">
      {!showForm && (
        <>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 border border-white rounded-md"
          >
            Add new contact
          </button>
          {contacts.length ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10 gap-16">
              {contacts.map((contact) => (
                <ContactCard
                  key={contact.id}
                  contact={contact}
                  onDelete={() => handleDelete(contact.id)}
                />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-center">
              You have no contacts as of now. Please add your contacts.
            </p>
          )}
        </>
      )}
      {showForm && (
        <ContactForm
          formData={formData}
          submitButtonText="Create"
          title="Please fill out the details."
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Contact;
