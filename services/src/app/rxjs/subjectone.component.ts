import { Component, OnInit } from '@angular/core';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subjectone',
  templateUrl: './subjectone.component.html',
  styles: [
  ]
})
export class SubjectoneComponent implements OnInit {
  
  value!: number;
  constructor(private subject: SubjectService) { }

  ngOnInit(): void {
    this.subject.broadCast().subscribe((data) => {
      this.value = data;
    });
  }
  public emitValue() {
    this.subject.broadCast().next(400)
  }

}
