import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  response : any = {};
  angForm : FormGroup;
  constructor(private fb : FormBuilder, private us: EmployeeService) { 
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      title: ['', Validators.required],
      email: ['', Validators.required ],
      phone_number: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

  addEmployee() {
    this.us.addEmployee(this.angForm.value).subscribe(res => {
      this.response = res;
      if (this.response.status == 'success'){
        this.us.alert('Employee added successfully!','success');
        this.angForm.reset();
      } else {
        this.us.alert('Error saving employee!','error');
      }
    })
  }
}
