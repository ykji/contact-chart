import { ContactDetails } from "../interfaces/contact";
import { ChangeEvent, FormEvent } from "react";

interface Props {
  formData: Omit<ContactDetails, "id">;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ContactForm = (props: Props) => {
  const { formData, handleChange, handleSubmit } = props;

  return (
    <form
      className="flex flex-col mt-8 gap-4 items-end"
      onSubmit={handleSubmit}
    >
      <p className="self-center text-center font-bold">Please fill out the details.</p>
      <div className="flex gap-4 items-center mt-2">
        <label htmlFor="name">Name:</label>
        <input
          required
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-2 border border-white rounded-md bg-transparent"
        />
      </div>
      <div className="flex gap-4 items-center">
        <label htmlFor="mobile">Mobile:</label>
        <input
          required
          id="mobile"
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="px-4 py-2 border border-white rounded-md bg-transparent"
        />
      </div>
      <div className="flex gap-4 items-center">
        <label htmlFor="gender">Gender:</label>
        <input
          required
          type="text"
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="px-4 py-2 border border-white rounded-md bg-transparent"
        />
      </div>
      <div className="flex gap-4 items-center">
        <label htmlFor="designation">Designation:</label>
        <input
          required
          type="text"
          id="designation"
          name="designation"
          onChange={handleChange}
          value={formData.designation}
          className="px-4 py-2 border border-white rounded-md bg-transparent"
        />
      </div>
      <div className="flex gap-4 items-center">
        <label htmlFor="email">Email:</label>
        <input
          required
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-2 border border-white rounded-md bg-transparent"
        />
      </div>
      <div className="flex gap-4 items-center">
        <label htmlFor="age">Age:</label>
        <input
          required
          id="age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          className="px-4 py-2 border border-white rounded-md bg-transparent"
        />
      </div>
      <div className="flex gap-4 items-center self-center mt-4">
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
        className="self-center px-4 py-2 border border-white rounded-md mt-4"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
