import { ContactDetails } from "../interfaces/contact";
import { ChangeEvent, FormEvent } from "react";

interface Props {
  title: string;
  submitButtonText: string;
  formData: Omit<ContactDetails, "id">;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ContactForm = (props: Props) => {
  const { title, submitButtonText, formData, handleChange, handleSubmit } =
    props;

  const inputStyle = `px-4 py-2 border border-white rounded-md bg-transparent w-full outline-none -z-10`;

  return (
    <div className="w-full flex flex-col gap-6">
      <p className="self-center text-center font-bold mb-2">{title}</p>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div className="mx-auto">
          <input
            required
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name} 
            className={inputStyle}
            onChange={handleChange}
          />
        </div>
        <div className="mx-auto">
          <input
            required
            id="mobile"
            type="text"
            name="mobile"
            placeholder="Mobile"
            className={inputStyle}
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div className="mx-auto">
          <input
            required
            type="text"
            id="gender"
            name="gender"
            placeholder="Gender"
            className={inputStyle}
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
        <div className="mx-auto">
          <input
            required
            type="text"
            id="designation"
            name="designation"
            className={inputStyle}
            onChange={handleChange}
            placeholder="Designation"
            value={formData.designation}
          />
        </div>
        <div className="mx-auto">
          <input
            required
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            className={inputStyle}
            onChange={handleChange}
          />
        </div>
        <div className="mx-auto">
          <input
            required
            id="age"
            name="age"
            type="number"
            placeholder="Age"
            value={formData.age}
            className={inputStyle}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-4 items-center self-center">
          <div className="flex gap-1">
            <input
              required
              type="radio"
              id="status"
              name="status"
              value="active"
              checked={formData.status === "active"}
              onChange={handleChange}
            />
            <label htmlFor="male">Active</label>
          </div>
          <div className="flex gap-1">
            <input
              required
              type="radio"
              id="status"
              name="status"
              value="inactive"
              checked={formData.status === "inactive"}
              onChange={handleChange}
            />
            <label htmlFor="male">Inactive</label>
          </div>
        </div>
        <button
          className="self-center px-4 py-2 bg-green-600 rounded-md mt-4"
          type="submit"
        >
          {submitButtonText}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
