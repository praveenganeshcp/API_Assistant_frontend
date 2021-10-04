import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './components/menubar/menubar.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [MenubarComponent, HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
