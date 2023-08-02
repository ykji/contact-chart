import produce from "immer";
import * as actionTypes from "../actions/contactActions";
import { ContactDetails } from "../../interfaces/contact";

export interface ContactState {
  contacts: ContactDetails[];
}

const initialState: ContactState = {
  contacts: [],
};

const contactReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case actionTypes.ADD_CONTACT:
      return produce(state, (draft) => {
        draft.contacts.push(action.payload);
      });

    case actionTypes.DELETE_CONTACT:
      return produce(state, (draft) => {
        draft.contacts = draft.contacts.filter(
          (contact) => contact.id !== action.payload
        );
      });

    case actionTypes.UPDATE_CONTACT:
      return produce(state, (draft) => {
        const { contactId, updatedData } = action.payload;
        const contactIndex = draft.contacts.findIndex(
          (contact) => contact.id === contactId
        );
        if (contactIndex !== -1) {
          draft.contacts[contactIndex] = {
            ...draft.contacts[contactIndex],
            ...updatedData,
          };
        }
      });

    default:
      return state;
  }
};

export default contactReducer;
