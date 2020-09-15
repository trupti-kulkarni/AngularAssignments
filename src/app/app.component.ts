
import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // @ViewChild('f',{static:false}) form :NgForm;
efficiency= ["Basic","Advanced","Pro"];
selectedOption="Advanced";



onSubmit(form){
  console.log(form.value);
  
  
}
}
