import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {

    lightMode: boolean;

    constructor() { 
        this.lightMode = false;
    }

    ngOnInit(): void {
    }

    toggleMode() {
        this.lightMode = ! this.lightMode;
    }

}
