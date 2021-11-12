import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorHandlingService } from './errorhandling.service';

@Component({
  selector: 'app-errorhandling',
  templateUrl: './errorhandling.component.html',
  styles: [
  ]
})
export class ErrorhandlingComponent implements OnInit {

  stream$: Array<number> = [];

  constructor(private obsService: ErrorHandlingService) { }

  ngOnInit(): void {
    this.obsService.handleError().subscribe({
      next: (data: number) => {
        console.log(data)
        this.stream$.push(data);
      },
      complete: () => { },
      error: (err) => { 
        console.log('error',err);
      }
    })
  }

}
