import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ContactNfo} from '../models/contactNfo.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getContactsData(): Observable<ContactNfo[]> {
    return this.httpClient.get<ContactNfo[]>(environment.contactsUrl);
  }

  getContacts(): ContactNfo[] {
    const contactsJson = localStorage.getItem('contactsData');
    return JSON.parse(contactsJson);
  }

  getContact(id: string): ContactNfo {
    const contactsJson = localStorage.getItem('contactsData');
    const contactDataLocal = JSON.parse(contactsJson);
    return contactDataLocal.find(item => item.id === id);
  }

  updateContact(contact: ContactNfo): ContactNfo {
    let contactsJson = localStorage.getItem('contactsData');
    const contactsDataLocal = JSON.parse(contactsJson);
    const contactLocal = contactsDataLocal.find(item => item.id === contact.id);
    const index = contactsDataLocal.indexOf(contactLocal);
    contactsDataLocal.splist(index, 1, contact);

    contactsJson = JSON.stringify(contactsDataLocal);

    localStorage.setItem('contactsData', contactsJson);
    return contact;
  }
}
