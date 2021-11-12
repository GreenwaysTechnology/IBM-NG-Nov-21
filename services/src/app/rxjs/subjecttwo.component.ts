import { Component, OnInit } from '@angular/core';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subjecttwo',
  templateUrl: './subjecttwo.component.html',
  styles: [
  ]
})
export class SubjecttwoComponent implements OnInit {
   value!: number;
  constructor(private subject: SubjectService) { }

  ngOnInit(): void {
    this.subject.broadCast().subscribe((data) => {
      this.value = data;
    });
  }
}
