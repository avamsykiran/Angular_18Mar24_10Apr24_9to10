import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts:Contact[];
  private nextId:number;

  constructor() {
    this.contacts=[
      {id:1,fullName:"Vamsy Kiran",mobile:"9052224753",mailId:"vamsy@gmail.com",dateOfBirth:"1985-06-11"},
      {id:2,fullName:"Suseela",mobile:"9052444753",mailId:"suseela@gmail.com",dateOfBirth:"1986-10-12"},
      {id:3,fullName:"Sagar",mobile:"9948016004",mailId:"sagar@gmail.com",dateOfBirth:"1987-04-02"}
    ];
    this.nextId=4;
  }

  getAll() : Contact[]{
    return [...this.contacts];
  }

  getById(id:number):Contact | undefined{
    return this.contacts.find(c => c.id===id);
  }

  add(c:Contact) : Contact {
    c.id=this.nextId++;
    this.contacts.push(c);
    return c;
  }

  update(c:Contact):Contact{
    let index = this.contacts.findIndex(contact => contact.id===c.id);
  
    if(index===-1){
      throw new Error("No Such Contact Found!");
    }

    this.contacts[index]=c;
    
    return c;
  }

  deleteById(id:number):void{
    let index = this.contacts.findIndex(contact => contact.id===id);
  
    if(index===-1){
      throw new Error("No Such Contact Found!");
    }

    this.contacts.splice(index,1);
  }
}
