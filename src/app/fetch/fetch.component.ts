import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';

@Component({
  selector: 'fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {

  title = 'Fetch Employee';

  constructor(private rs : RestService){}

  columns = ["Employee Id", "Name", "Age", "Salary", "Designation"];

  index = ["_id", "name", "age", "salary", "designation"];

  employees : Employee[] = [];

  ngOnInit(): void {
    this.rs.getEmployees().subscribe
    (
      (response)=>
      {
        this.employees = response;
        console.log(this.employees);
      },

      (error)=>
      {
        console.log("Error Occured : "+error);
      }
    )
  }


}
