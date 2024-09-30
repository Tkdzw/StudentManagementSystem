import { Component, OnInit } from '@angular/core';
import { StudentDto } from 'proxy/interfaces/student-dto';
import { StudentService } from 'proxy/services/student.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: StudentDto[] = []
  student: StudentDto = {} as StudentDto;

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() :void {
    console.log("Hey")
    this.studentService.getAll()
      .subscribe((res: any) => {
        this.students= res
        console.log(res)
        console.log(this.students)
      })
  }

}
