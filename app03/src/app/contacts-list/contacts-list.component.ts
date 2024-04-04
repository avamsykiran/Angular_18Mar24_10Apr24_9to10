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
    this.contacts = this.contactService.getAll();
    this.errMsg=null;
  }

  remove(id:number){
    if(window.confirm(`Are you wure of deleting contact#${id}?`)){
      try{
        this.contactService.deleteById(id);
        this.refresh();
      }catch(e){
        if(typeof e ==='string'){
          this.errMsg = e;
        }else{
          this.errMsg="Unable to delete!"
          console.log(e);
        }
      }
    }
  }
}
