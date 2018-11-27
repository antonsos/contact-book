import {Component, OnInit} from '@angular/core';
import {ContactsService} from './services/contacts.service';
import {ContactNfo} from './models/contactNfo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private contactsService: ContactsService,
  ) {}

  public contactsData: ContactNfo[] = [];

  ngOnInit(): void {
    let contactsJson = localStorage.getItem('contactsData');
    const contactsDataLocal = JSON.parse(contactsJson);

    if (!!contactsDataLocal) {
      this.contactsData = contactsDataLocal;
    } else {
      this.contactsService.getContacts().subscribe(res => {
        this.contactsData = res;

        contactsJson = JSON.stringify(this.contactsData);

        localStorage.setItem('contactsData', contactsJson);
      });
    }
  }

}
