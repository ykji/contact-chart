export interface ContactDetails {
  id: number;
  age: string;
  name: string;
  email: string;
  mobile: string;
  gender: string;
  status: string;
  designation: string;
}

export const CONTACT_DETAILS_INITIAL_STATE: Omit<ContactDetails, "id"> = {
  age: "",
  name: "",
  gender: "",
  status: "active",
  designation: "",
  email: "",
  mobile: "",
};
