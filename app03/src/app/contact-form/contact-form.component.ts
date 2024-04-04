import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactForm:FormGroup;

  idFC:FormControl;
  fullNameFC:FormControl;
  mobileFC:FormControl;
  mailIdFC:FormControl;
  dateOfBirthFC:FormControl;

  isEditing!:boolean;

  constructor(
    private contactService:ContactService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ){

    this.idFC = new FormControl(null);
    this.fullNameFC=new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(20)]);
    this.mobileFC=new FormControl("",[Validators.required,Validators.pattern("[1-9][0-9]{9}")]);
    this.mailIdFC=new FormControl("",[Validators.required,Validators.email]);
    this.dateOfBirthFC=new FormControl("",[Validators.required]);

    this.contactForm=new FormGroup({
      id:this.idFC, fullName:this.fullNameFC,mobile:this.mobileFC,mailId:this.mailIdFC,dateOfBirth:this.dateOfBirthFC
    });
  }

  ngOnInit(){
    let cid = this.activatedRoute.snapshot.params["id"];
    
    if(cid){
      this.isEditing=true;
      let c = this.contactService.getById(Number(cid));
      this.contactForm.reset(c);
    }
  }

  formSubmitted(){
    let c = this.contactForm.value;

    if(this.isEditing){
      this.contactService.update(c);
    }else{
      this.contactService.add(c);
    }

    this.router.navigateByUrl("/list");
  }
}
