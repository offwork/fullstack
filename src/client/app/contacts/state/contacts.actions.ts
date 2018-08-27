import { Action } from '@ngrx/store';
import { Contact } from '../../shared';

export enum ContactsActionTypes {
  ToggleContactAddress = '[Contact] Toggle Contact Address',
  SetCurrentContact = '[Contact] Set Current Contact',
  InitializeCurrentConntact = '[Contact] Initialize Current Contact',
}

export class ToggleContactAddress implements Action {
  readonly type = ContactsActionTypes.ToggleContactAddress;
  constructor(public payload: boolean) {}
}

export class SetCurrentContact implements Action {
  readonly type = ContactsActionTypes.SetCurrentContact;
  constructor(public payload: Contact) {}
}

export class InitializeCurrentConntact implements Action {
  readonly type = ContactsActionTypes.InitializeCurrentConntact;
}

export type ContactActions 
  = ToggleContactAddress
  | SetCurrentContact
  | InitializeCurrentConntact;