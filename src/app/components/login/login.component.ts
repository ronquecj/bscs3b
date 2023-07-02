import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  name: string = 'Juan Dela Cruz';
  age: number = 20;
  isHidden: boolean = true;
  arrMovies: any = ['Harry Potter', 'MCU', 'DC', 'Frozen'];
  objMovies: any = [
    {
      title: 'Harry Potter',
      genre: 'Fantasy',
      vstyle: 'color: red',
    },
    {
      title: 'MCU',
      genre: 'Fantasy',
      vstyle: 'color: blue',
    },
    {
      title: 'DC',
      genre: 'Fantasy',
      vstyle: 'color: yellow',
    },
    {
      title: 'Frozen',
      genre: 'Fantasy',
      vstyle: 'color: orange',
    },
  ];

  btnLabel: string = 'Hide Table';
  myString!: string;

  toggleTable(): void {
    this.isHidden = !this.isHidden;
    this.btnLabel = this.isHidden ? 'Show Table' : 'Hide Table';
  }
}
