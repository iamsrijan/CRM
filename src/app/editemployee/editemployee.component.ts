import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  employee: any = {};
	angForm: FormGroup;
	response: any = {};
	constructor(private route: ActivatedRoute, 
		private fb: FormBuilder,
		private router: Router, 
		private us: EmployeeService) {
		this.angForm = this.fb.group({
			name: ['', Validators.required ],
      title: ['', Validators.required ],
			email: ['', Validators.required ],
			phone_number: ['', Validators.required ]
		});
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.us.editEmployee(params['id']).subscribe(res => {
				this.employee = res;
				this.employee = this.employee.employee;
			});
		});
	}

	updateEmployee() {
		this.route.params.subscribe(params => {
			this.us.updateEmployee(params['id'], this.angForm.value).subscribe(res => {
				this.response = res;
				if (this.response.status == 'success'){
					this.us.alert('Employee updated successfully!','success');
					this.router.navigate(['employee']);
				} else {
					this.us.alert('Error updating employee!','error');
				}
			});
		});
	}
}
