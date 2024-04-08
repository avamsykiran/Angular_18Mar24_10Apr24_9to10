import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {

  contacts!:Contact[];
  errMsg!:string|null;

  constructor(private contactService:ContactService){
  
  }

  ngOnInit(){
    this.refresh();
  }

  refresh(){
    this.contactService.getAll().subscribe({
      next: data => { this.contacts=data; this.errMsg=null; },
      error: err => { console.log(err); this.errMsg="Unable to load data! Please try again later!"; }
    });
  }

  remove(id:number){
    if(window.confirm(`Are you wure of deleting contact#${id}?`)){
      this.contactService.deleteById(id).subscribe({
        next: () => this.refresh() ,
        error: err => { console.log(err); this.errMsg="Unable to delete! Please try again later!"; }
      });
    }  
  }
}
