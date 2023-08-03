import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import ContactForm from "../../components/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useState, ChangeEvent, FormEvent } from "react";
import userPlaceholder from "../../assets/user-placeholder.webp";
import { updateContact } from "../../redux/actions/contactActions";

const ContactDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false);
  const [contact, setContact] = useState(
    useSelector((state: RootState) =>
      state.contacts.contacts.find((contact) => contact.id === parseInt(id!))
    )!
  );

  if (!contact) {
    return <div className="mt-10 text-center">Contact not found</div>;
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowEditForm(false);
    dispatch(updateContact(parseInt(id!), contact));
    console.log(contact);
  };

  const { name, status, gender, mobile, designation, age, email } = contact;

  return (
    <div className="flex flex-col px-5 md:mx-24 py-10 items-center gap-10 md:gap-16">
      {!showEditForm && (
        <>
          <h1 className="text-2xl">Details</h1>
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
            <img
              src={userPlaceholder}
              alt="placeholder"
              className="rounded-full w-2/5 flex-1"
            />
            <div className="flex flex-1 flex-col gap-4 px-10">
              <p>{`Name: ${name}`}</p>
              <p>{`Email: ${email}`}</p>
              <p>{`Designation: ${designation}`}</p>
              <p>{`MOB: ${mobile}`}</p>
              <p className="capitalize">{`Status: ${status}`}</p>
              <p>{`Gender: ${gender}`}</p>
              <p>{`Age: ${age}`}</p>
            </div>
          </div>
          <button
            className="px-4 py-2 rounded-md bg-blue-600"
            onClick={() => setShowEditForm(true)}
          >
            Edit
          </button>
        </>
      )}
      {showEditForm && (
        <ContactForm
          formData={contact}
          title="Edit details"
          submitButtonText="Save changes"
          handleChange={handleChange}
          handleSubmit={handleUpdate}
        />
      )}
    </div>
  );
};

export default ContactDetails;
