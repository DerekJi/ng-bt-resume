import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProjectsComponent } from './my-projects.component';



@NgModule({
  declarations: [MyProjectsComponent],
  exports: [MyProjectsComponent],
  imports: [
    CommonModule
  ]
})
export class MyProjectsModule { }
