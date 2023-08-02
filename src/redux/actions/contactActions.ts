import { ContactDetails } from "../../interfaces/contact";

export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";

export const addContact = (contactData: ContactDetails) => {
  return {
    type: ADD_CONTACT,
    payload: contactData,
  };
};

export const deleteContact = (contactId: number) => {
  return {
    type: DELETE_CONTACT,
    payload: contactId,
  };
};

export const updateContact = (
  contactId: number,
  updatedData: ContactDetails
) => {
  return {
    type: UPDATE_CONTACT,
    payload: { contactId, updatedData },
  };
};
