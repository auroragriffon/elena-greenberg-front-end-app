import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';


@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {

  model: any = {};

  constructor(private formDataService: FormDataService) { }

  ngOnInit(): void {
  }

  onSubmit(passedClientName, passedEmailAddress) {

    

    this.formDataService.setAForm(passedClientName, passedEmailAddress);
    
    alert('Form Successfully Submitted. Number of forms submitted: ' + this.formDataService.getNumberOfForms());
    this.model.clientName = '';
    this.model.emailAddress = '';

  }
      

}
