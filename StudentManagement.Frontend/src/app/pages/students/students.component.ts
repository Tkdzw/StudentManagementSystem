import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
    private studentService: StudentService,
    public activeModal: NgbActiveModal
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

  close(){
    this.activeModal.close()
  }

}
