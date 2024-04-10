import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { maxAge } from '../services/CustomVAlidators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactForm: FormGroup;

  idFC: FormControl;
  fullNameFC: FormControl;
  mobileFC: FormControl;
  mailIdFC: FormControl;
  dateOfBirthFC: FormControl;

  isEditing!: boolean;

  errMsg!: string;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.idFC = new FormControl(null);
    this.fullNameFC = new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]);
    this.mobileFC = new FormControl("", [Validators.required, Validators.pattern("[1-9][0-9]{9}")]);
    this.mailIdFC = new FormControl("", [Validators.required, Validators.email]);
    this.dateOfBirthFC = new FormControl("", [Validators.required,maxAge(18)]);

    this.contactForm = new FormGroup({
      id: this.idFC, fullName: this.fullNameFC, mobile: this.mobileFC, mailId: this.mailIdFC, dateOfBirth: this.dateOfBirthFC
    });
  }

  ngOnInit() {
    let cid = this.activatedRoute.snapshot.params["id"];

    if (cid) {
      this.contactService.getById(Number(cid)).subscribe({
        next: c => { this.contactForm.reset(c); this.isEditing = true; },
        error: err => { console.log(err); this.errMsg = "Unable to load data!Please try again later!"; }
      });
    }
  }

  formSubmitted() {
    let c = this.contactForm.value;

    (this.isEditing ? this.contactService.update(c) : this.contactService.add(c)).subscribe({
      next: c => this.router.navigateByUrl("/list"),
      error: err => { console.log(err); this.errMsg = "Unable to save data!Please try again later!"; }
    });

  }

}
