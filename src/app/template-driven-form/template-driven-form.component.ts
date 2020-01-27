import { Component, OnInit } from '@angular/core';


interface Client {
  firtsName: string;
  lastName: string;
  birth: Date;
  gender: string;
  street: string;
  cyti: string;
  state: string;
  phone1: string;
  phone2: string;


}
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  client: Client = {
    firtsName: "", lastName:"",birth: new Date, gender:"", street:"",cyti:"",state:"",phone1:"",phone2:""
  };
  states= ["SP","RJ","BA","MG","RS"]
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.client);
  }

}
