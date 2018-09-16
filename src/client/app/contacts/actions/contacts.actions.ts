import { Action } from '@ngrx/store';

export enum ContactsActionTypes {
  LoadContactss = '[Contacts] Load Contactss'
}

export class LoadContactss implements Action {
  readonly type = ContactsActionTypes.LoadContactss;
}

export type ContactsActions = LoadContactss;
