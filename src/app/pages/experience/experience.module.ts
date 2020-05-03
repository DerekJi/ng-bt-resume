import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from '../experience/experience.component';



@NgModule({
  declarations: [ExperienceComponent],
  exports: [ExperienceComponent],
  imports: [
    CommonModule
  ]
})
export class ExperienceModule { }
