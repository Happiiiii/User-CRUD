import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
Details;
  constructor(public  activatedRoute: ActivatedRoute, public http: HttpClient, public router: Router ) {
    this.Details = new FormGroup(
      {
         FirstName  : new FormControl(),
         LastName  : new FormControl(),
         Email  : new FormControl()
      }
    );
   }

  ngOnInit() {
    this.http.get(`http://5d47b117992ea9001444c9af.mockapi.io/users/${this.activatedRoute.snapshot.paramMap.get('id')}`)
    .toPromise()
    .then((response: any) => {
      this.Details.setValue(
        {
          FirstName : response.FirstName,
          LastName : response.LastName,
          Email : response.Email
        }
      );
    }, (error) => {
      console.log(error);
    }
    );
 }

 updateData() {
   this.http.put(`http://5d47b117992ea9001444c9af.mockapi.io/users/${this.activatedRoute.snapshot.paramMap.get('id')}`, this.Details.value)
   .toPromise()
   .then((response) => {
     this.router.navigate(['viewblog']);
   }, (error) => {
     console.log(error);
   });
 }

}
