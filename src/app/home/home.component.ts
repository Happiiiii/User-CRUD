import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   Details;
  constructor(public router: Router, public http: HttpClient) { }


  ngOnInit() {
    this.Details = new FormGroup({
      FirstName: new FormControl(),
      LastName: new FormControl(),
      Email: new FormControl()
    });
  }
  submitData() {
    this.http.post(`http://5d47b117992ea9001444c9af.mockapi.io/users`, this.Details.value)
      .toPromise()
      .then((response) => {
        this.Details = response;
      }, (error) => {
        console.log(error);
      });
  }

}
