import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConnectableObservable } from 'rxjs';
import { SalesPerson } from '../sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  s1 : SalesPerson = new SalesPerson("Shamili","nayudu","shamili@gmail.com",22000,"400");

  salesPersonList : SalesPerson [] = [this.s1,new SalesPerson("udayasri","konkimalla",
  "udayasri@gmail.com",60000,"900"),
  new SalesPerson("Rafi","Mohmmed",
  "rafi@gmail.com",45000,"1000"),
  new SalesPerson("Sumanth","konkimalla",
  "sumanth@gmail.com",69000,"200")]

  formModel : SalesPerson = new SalesPerson("","","",0,"");
  constructor() { }

  ngOnInit(): void {
   // console.log(this.formModel)
    
   // this.salesPersonList.push(this.formModel);
  }

    onSubmit(form:NgForm){
    this.salesPersonList.push(form.value);
    }

}
