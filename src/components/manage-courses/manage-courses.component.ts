import { Component } from '@angular/core';
import { Course } from '../../modules/Course';
import { Observable } from 'rxjs';
import { User } from '../../modules/User';
import { Lesson } from '../../modules/Lesson';
import { CoursesService } from '../../services/CoursesS/courses.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/UserS/user.service';
import { LessonsService } from '../../services/LessonS/lessons.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';


@Component({
  selector: 'app-manage-courses',
  imports: [CommonModule,MatCardModule,MatDivider ],
  templateUrl: './manage-courses.component.html',
  styleUrl: './manage-courses.component.css'
})
export class ManageCoursesComponent {
  course?: Course;
  teacher$!: Observable<User>;
  lessons$!: Observable<Lesson[]>;


  constructor(private coursesService: CoursesService, private activatedRoute: ActivatedRoute, private userService: UserService,private lessonSevice: LessonsService) { 
      this.activatedRoute.paramMap.subscribe(params => {
        const id = params.get('id');
        if (id) {
            this.coursesService.getCourseById(id).subscribe(course => {
              this.course = course;
              if (this.course?.teacherId) {
                this.teacher$ = this.userService.GetUserById(this.course.teacherId);
              }
              if (this.course.id) {
                this.lessons$ = this.lessonSevice.getLessons(this.course.id);
              }
            })
        }
      })
  }
}
