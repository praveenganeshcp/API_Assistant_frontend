import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './components/menubar/menubar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MenubarComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CommonModule, RouterModule, MenubarComponent, HeaderComponent]
})
export class SharedModule { }
