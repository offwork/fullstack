import { Contact } from '../../shared';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContactActions, ContactsActionTypes } from './contacts.actions';

export interface State extends fromRoot.State {
  contacts: ContactState;
}

export interface ContactState {
  showContactAddress: boolean;
  currentContact: Contact;
  contacts: Contact[];
}

const initialState: ContactState = {
  showContactAddress: false,
  currentContact: null,
  contacts: []
}

const getContactFeatureState = createFeatureSelector<ContactState>('contact');

export const getShowContactAddress = createSelector(
  getContactFeatureState,
  state => state.showContactAddress
);

export const getCurrentContact = createSelector(
  getContactFeatureState,
  state => state.currentContact
);

export const getContacts = createSelector(
  getContactFeatureState,
  state => state.contacts
);

export function reducer(state = initialState, action: ContactActions): ContactState {
  switch (action.type) {
    case ContactsActionTypes.ToggleContactAddress:
      return {
        ...state,
        showContactAddress: action.payload
      };

    case ContactsActionTypes.SetCurrentContact:
      return {
        ...state,
        currentContact: { ...action.payload }
      };

    case ContactsActionTypes.InitializeCurrentConntact:
      return {
        ...state,
        currentContact: {
          name: '',
          address: '',
          phone: '',
          photoUrl: '',
        }
      };
  
    default:
      return state;
  }
}