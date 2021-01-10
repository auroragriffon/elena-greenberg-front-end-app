import { Injectable } from '@angular/core';


interface submittedForm {

  clientName: string,
  emailAddress: string

};


@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  allForms: submittedForm[] = [];
  formCounter: number = 0;

  //ngStyleExampleVar: string = 'black'; //test code
  
  getAllForms(){

    return this.allForms;
  

  };

  getNumberOfForms(){
    return this.formCounter;
  };


  setAForm(passedClientName, passedEmailAddress) {
    
    this.allForms.push({
    
      clientName: passedClientName, 
      emailAddress: passedEmailAddress
  
    });

    this.formCounter = this.allForms.length;


  };

}
