import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { resolve } from 'dns';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
   reactiveForm: FormGroup;
 
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      'projectName': new FormControl(null,[Validators.required,this.validProjectName],this.asynValidProjectName ),
      'mail' : new FormControl(null, [Validators.required,Validators.email]),
      'status':new FormControl('Critical')
  
    });
  }

  onSubmit(){
    console.log(this.reactiveForm.value);
  }

   validProjectName(formControl: FormControl) : {}{
     if(formControl.value =='Test'){
       return {'invalidProjectName': true};
     }
     return null;
   }
   asynValidProjectName(formControl :FormControl) : Promise <any> | Observable<any> {
     const promise = new Promise((resolve, reject)=>{
         setTimeout(()=>{
           if(formControl.value === "test"){
             resolve({'invalidProjectName':true});
           }
           else{
             resolve(null);
           }
         },2000);
     })
     return promise;
   }
}
