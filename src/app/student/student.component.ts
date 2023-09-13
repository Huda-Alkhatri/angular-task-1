import { Component, OnInit } from '@angular/core';

interface Student {
  Name: string;
  Email: string;
  Marks: number;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent{
Marks: number=0;

  students: any[] = [
    { Name: 'Huda ALKhatri', Email: 'Hudas@gmail.com', Marks: 55 },
    { Name: 'Samah Alsumri', Email: 'Samah@gmail.com', Marks: 30 },
    { Name: 'Lamia ALkalbani', Email: 'Lamia@gmail.com', Marks: 60 },
    { Name: 'Maryam ALbalushi', Email: 'Maryam@gmail.com', Marks: 20 },
    { Name: 'Auhod ALsabari', Email: 'Auhod@gmail.com', Marks: 75 },
    { Name: 'Amira ALryami', Email: 'Amira@gmail.com', Marks: 88 },
    { Name: 'Beyyena ALhinaai', Email: 'Beyyena@gmail.com', Marks: 45 },
    { Name: 'Sara ALhinaai', Email: 'Sara@gmail.com', Marks: 65 },
    
    
  ];

  

  getMarkColor(Marks: number): string{
return Marks < 50 ? 'red-text': 'green-text';
  }

  getPassFailStatus(Marks: number): string{
    return Marks > 50 ? 'PASS' : 'FAIL';
  }

  getRowStyles(student: Student): any {
    return {
      'background-color': student.Marks < 50 ? 'rgb(255, 51, 51)' : 'rgb(204, 255, 102'
    };
  }

}


