import { Component, OnInit } from '@angular/core';
import { ServicesTestService } from 'src/app/services/services-test.service';
import { Tutorial } from 'src/app/models/tutorial.model';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  tutorial: Tutorial = {
    username: '',
    password: '',
    name: '',
    department: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: ServicesTestService) { }
  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      username: this.tutorial.username,
      password: this.tutorial.password,
      name: this.tutorial.name,
      department: this.tutorial.department
    };

    this.tutorialService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      username: '',
      password: '',
      name: '',
      department: '',
      published: false
    };
  }

}
