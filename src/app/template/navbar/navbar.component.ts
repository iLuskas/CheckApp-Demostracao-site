import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toHome(){
    document.getElementById('home').scrollIntoView({behavior: 'smooth'});
  }

  toSobre(){
    document.getElementById('sobre').scrollIntoView({behavior: 'smooth'});
  }

  toFuncionalidade(){
    document.getElementById('funcionalidade').scrollIntoView({behavior: 'smooth'});
  }

  toContato(){
    document.getElementById('contato').scrollIntoView({behavior: 'smooth'});
  }

}
