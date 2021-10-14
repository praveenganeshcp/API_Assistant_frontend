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
import { ThemedInpDirective } from './directives/themed-input/themed-inp.directive';
import { AppDetailShellComponent } from './components/app-detail-shell/app-detail-shell.component';
import { ResponseHandlerService } from './services/response-handler/response-handler.service';
@NgModule({
  declarations: [MenubarComponent, HeaderComponent, JsonStringifierPipe, ThemedBtnDirective, ThemedInpDirective, AppDetailShellComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ResponseHandlerService, multi: true },
  ],
  exports: [CommonModule, RouterModule, MenubarComponent, HeaderComponent, FormsModule, ReactiveFormsModule, HttpClientModule, JsonStringifierPipe, ThemedBtnDirective]
})
export class SharedModule { }
