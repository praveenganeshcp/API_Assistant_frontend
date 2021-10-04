import { Component, OnInit } from '@angular/core';
import { IMenu } from './menu.model';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

    menuOptions: IMenu[];

    constructor() { 
        this.menuOptions = [
            { view: 'Database', link: '/database/client' },
            { view: 'Storage', link: '/storage/filesystem' },
            { view: 'Logs', link: '/logs/recent' },
        ]
    }

    ngOnInit(): void {
    }

}
