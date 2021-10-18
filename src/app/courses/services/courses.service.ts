import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CoursesComponent } from '../courses/courses.component';
import { Course } from '../models/course';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/CoursesComponent.json';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      tap(courses => console.log(courses))
    );
  }
}

