import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { IMenu } from './menu.model';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

    menuOptions: IMenu[];
    private appId: string;

    constructor(private route: ActivatedRoute) { 
        this.appId = this.route.snapshot.params['app_id'];
        this.menuOptions = [
            { view: 'Database', icon: 'storage', link: `/applications/${this.appId}/database/client` },
            { view: 'Storage', icon: 'folder', link: `/applications/${this.appId}/storage/filesystem`},
            { view: 'Documentation', icon: 'description', link: `/applications/${this.appId}/docs/home`},
        ]
    }

    ngOnInit(): void { 
    }

}
