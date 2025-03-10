import { Component } from '@angular/core';
import { UserDetailsService } from '../../services/UserDetailsS/user-details.service';
import { User } from '../../modules/User';
import { Observable, of, switchMap } from 'rxjs';
import { Course } from '../../modules/Course';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CapitalizePipe } from '../../Pipes/capitalize.pipe';
import { CoursesService } from '../../services/CoursesS/courses.service';

@Component({
  selector: 'app-courses-list',
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterLink, RouterOutlet,CapitalizePipe],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {
  myCourses$: Observable<Course[]> | undefined;
  user$: Partial<User> | undefined;
  constructor(private coursesService: CoursesService, private userDetailsService: UserDetailsService) {
    this.myCourses$ = this.userDetailsService.getUser().pipe(
      switchMap(user => {
        this.user$ = user;
        return user.userId ? this.coursesService.getCoursesByUserId(user.userId) : of([]);
      })
    )
  }
  leaveTheCourse(courseId: string) {
    this.userDetailsService.getUser().subscribe(user => {
      if (user.userId)
        this.coursesService.leaveCourse(courseId, user.userId).subscribe({
          next: () => {
            this.myCourses$ = user.userId ? this.coursesService.getCoursesByUserId(user.userId) : of([]);
          },
          error: () => {
            alert("can't leave course")
          }
        });
    });
  }
}
