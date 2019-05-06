import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-complaint-form",
  templateUrl: "./complaint-form.page.html",
  styleUrls: ["./complaint-form.page.scss"]
})
export class ComplaintFormPage implements OnInit {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      image: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  registration() {}
}
