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

  private contacts$ = new Observable<ContactNfo[]>();

  getContacts(): Observable<ContactNfo[]> {
    this.contacts$ = this.httpClient.get<ContactNfo[]>(environment.contactsUrl);
    return this.contacts$;
  }

  get contacts(): Observable<ContactNfo[]> {
    return this.contacts$;
  }
}
