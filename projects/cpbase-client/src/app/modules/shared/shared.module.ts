import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './components/menubar/menubar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [MenubarComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [CommonModule, RouterModule, MenubarComponent, HeaderComponent, FormsModule, ReactiveFormsModule, HttpClientModule]
})
export class SharedModule { }
