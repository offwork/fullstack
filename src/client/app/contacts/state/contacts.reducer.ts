import { Contact } from '../../shared';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
  contacts: ContactState;
}

export interface ContactState {
  showContactAddress: boolean;
  currentContact: Contact;
  contacts: Contact[];
}

const initialState: ContactState = {
  showContactAddress: true,
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

export function reducer(state = initialState, action): ContactState {
  switch (action.type) {
    case 'TOGGLE_CONTACT_ADDRESS':
      return {
        ...state,
        showContactAddress: action.payload
      };
  
    default:
      return state;
  }
}