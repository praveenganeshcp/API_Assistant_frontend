import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './components/menubar/menubar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { JsonStringifierPipe } from './pipes/json-stringifier.pipe';
import { ThemedBtnDirective } from './directives/themed-button/themed-btn.directive';
@NgModule({
  declarations: [MenubarComponent, HeaderComponent, JsonStringifierPipe, ThemedBtnDirective],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  exports: [CommonModule, RouterModule, MenubarComponent, HeaderComponent, FormsModule, ReactiveFormsModule, HttpClientModule, JsonStringifierPipe, ThemedBtnDirective]
})
export class SharedModule { }
