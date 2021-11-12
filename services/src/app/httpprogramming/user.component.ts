import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/user.type';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  users!: Observable<User[]>
  user!: User;

  id!: number
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.findAll();
  }
  findById() {
    // this.userService.findById(+this.id)
    this.userService.findById(this.id).subscribe({
      next: (user: User) => {
        this.user = user;
      },
      complete: () => { },
      error: () => { }
    })

  }


}
