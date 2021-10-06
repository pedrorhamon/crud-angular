import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CoursesComponent } from './../../courses/courses/courses.component';



@NgModule({

  exports:[
    MatCardModule,
    MatTableModule,
    MatToolbarModule
  ],
})
export class AppMaterialModule { }
