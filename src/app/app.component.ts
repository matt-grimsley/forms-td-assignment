import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f", { static: false }) signupForm: NgForm;
  defaultSub = 'advanced';
  submitted = false;
  user = {
    email: "",
    subscription: "",
    password: "",
  };

  onSubmit() {
    this.submitted = true;
    this.user.email = this.signupForm.value.userData.email;
    this.user.password = this.signupForm.value.userData.password;
    this.user.subscription = this.signupForm.value.userData.subscription;

    this.submitted = true;

    console.log(this.user)
  }
}
