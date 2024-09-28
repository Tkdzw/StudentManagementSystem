import { Component, OnInit } from '@angular/core';
import { StudentService } from 'proxy/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    console.log("Hey")
    // this.studentService.getAll()
    //   .subscribe((res: any) => {
    //     console.log(res)
    //   })
  }

}
