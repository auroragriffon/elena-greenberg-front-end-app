import { Component, NgModule, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})


export class PageOneComponent implements OnInit {

  constructor(private foodService: FoodService, private formDataService: FormDataService) { }


  listOfFood = [];
  formContent = [];
  ngIfExampleVar: boolean = true;
  ngStyleExampleVar: string = 'black';
  ngStyleBtnLbl: string = 'click me';
  ngIfBtnLbl: string = 'click me';

  ngOnInit(): void {
    //console.dir(this.foodService.getFoodList()); //test code
    this.listOfFood = this.foodService.getFoodList();
    //console.dir(this.listOfFood); //test code

    this.formContent = this.formDataService.getAllForms();
  }
  


  // Example of ngIf
  public ngIfExampleFun(event): void {

    this.ngIfExampleVar = !this.ngIfExampleVar;
    if(this.ngIfExampleVar){
      this.ngIfBtnLbl = 'click me';
    } else{
      this.ngIfBtnLbl = 'click me again';
    }


 }
// Example of ngStyle
 public ngStyleExamplefun(event): void {
   if(this.ngStyleExampleVar === 'red'){
    this.ngStyleExampleVar = 'black';
      this.ngStyleBtnLbl = 'click me';

   } else {
     this.ngStyleExampleVar = 'red';
     this.ngStyleBtnLbl = 'put me back';
   }
}

//writeTest(event){

  //this.formDataService.setAForm("DOCTOR NAMEMAN", "acoolEmail@email.com");

//}

bindingExample: string = '';
 
  twoWayBinding(value: string) {
    this.bindingExample = value;
  }

}
