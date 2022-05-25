import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { enddatevalidate } from '../shared/enddatevalidate';
import { startdatevalidate } from '../shared/startdatevalidate';


@Component({
  selector: 'app-date-validate',
  templateUrl: './date-validate.component.html',
  styleUrls: ['./date-validate.component.css']
})
export class DateValidateComponent implements OnInit {

 
  
  dateval:boolean=false
  validated=false
  uppercasing=""  

  currentDate1: any = new Date();
  

  constructor(private fb: FormBuilder) { }
  
  datevalidate = this.fb.group({
    startdate: ['', Validators.required,startdatevalidate],
    enddate: ['', Validators.required,Validators.pattern('^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$')]
  })
  get f(): any {
    return this.datevalidate.controls
  }

  ngOnInit(): void {
    
  }

  sub(){
    if(this.datevalidate.valid){
      // console.log("entering")
      this.dateval=false;
      
    }
    else{
      this.dateval=true;
      alert("successful");
    } 
    console.log(this.datevalidate.value);
    // alert("Form submitted");
  }
 
  

}
