import { Component } from '@angular/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent {
  message: string = "Welcome to Angular World";
  details:string ='Details';
  studentName:string ='';

  onStudentNameChange(event:Event):void{
    this.studentName = (event.target as HTMLInputElement).value;
  }
}
