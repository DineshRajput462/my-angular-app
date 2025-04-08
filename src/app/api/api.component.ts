import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { APIService } from '../services/api.service';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-api',
  imports: [FormsModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class APIComponent {
  users: User[] = [];
  selectedUser: User | undefined;

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.apiService.getAll().subscribe((response) => {
      this.users = response;
      console.log(response);
    });
  }

  edit(id: string) {
    this.apiService.get(id).subscribe((response) => {
      this.selectedUser = response;
      console.log(response);
    });
  }

  save(form: NgForm) {
    if (!form.valid)
      return;

    let user: User = form.value;

    if (this.selectedUser) {
      user = { ...user, id: this.selectedUser.id };
      let selectedUser = this.selectedUser;

      this.apiService.update(user).subscribe((response) => {
        if (response) {
          this.users.splice(this.users.indexOf(selectedUser), 1, response);
          this.selectedUser = undefined;
          console.log(response);
        }
      });
    } else {
      this.apiService.add(user).subscribe((response) => {
        if (response) {
          this.users.push(response);
          console.log(response);
        }
      });
    }

    form.reset();
  }

  remove(id: string) {
    this.apiService.delete(id).subscribe((response) => {
      if (response) {
        this.users.splice(this.users.indexOf(response), 1);
        console.log(response);
      }
    });
  }
}
