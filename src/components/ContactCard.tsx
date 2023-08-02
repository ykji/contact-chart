import { Link } from "react-router-dom";
import { ContactDetails } from "../interfaces/contact";
import userPlaceholder from "../assets/user-placeholder.webp";

interface Props {
  contact: ContactDetails;
  onDelete: () => void;
}

const ContactCard = (props: Props) => {
  const {
    contact: { name, id },
    onDelete,
  } = props;

  return (
    <Link
      to={`${id}`}
      className="flex flex-col justify-between items-center gap-3 px-5"
    >
      <div className="h-40 w-40">
        <img src={userPlaceholder} alt="placeholder" className="rounded-full" />
      </div>
      <p className="font-bold text-center">{name}</p>
      <div className="flex gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onDelete();
          }}
          className="px-4 py-2 rounded-md bg-red-600"
        >
          Delete
        </button>
      </div>
    </Link>
  );
};

export default ContactCard;
