import {Component, OnInit} from '@angular/core';
import {ContactsService} from './services/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private contactsService: ContactsService,
  ) {}

  ngOnInit(): void {
    let contactsJson = localStorage.getItem('contactsData');
    const contactsDataLocal = JSON.parse(contactsJson);

    if (!contactsDataLocal) {
      this.contactsService.getContactsData().subscribe(res => {
        contactsJson = JSON.stringify(res);

        localStorage.setItem('contactsData', contactsJson);
      });
    }
  }
}
