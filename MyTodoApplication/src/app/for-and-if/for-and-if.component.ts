import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-and-if',
  templateUrl: './for-and-if.component.html',
  styleUrls: ['./for-and-if.component.css']
})
export class ForAndIfComponent implements OnInit {
  cities = ["America", "Australia", "bangalore", "pune", "chennai"]
  employees = [
    new Employee("Amani", 1, 100),
    new Employee("Anitha", 2, 200)
  ]
  employeCount : any;
  errorMessage = "less employees"
  constructor() { }


  ngOnInit() {
    this.employeCount=this.employees.length;
    
  }

}

export class Employee {
  constructor(public name: String, public id: number, public sal: number) {

  }
}
