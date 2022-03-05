import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import Employee from '../Employee';

@Component({
  selector: 'app-getemployee',
  templateUrl: './getemployee.component.html',
  styleUrls: ['./getemployee.component.css']
})
export class GetemployeeComponent implements OnInit {
	employees: Employee[];
	response : any = {};
	responseDelete : any = {};
	constructor(private us: EmployeeService) { }

	ngOnInit() {
		this.getEmployees();
	}

	getEmployees() {
		this.us.getEmployee().subscribe((res) => {
			console.log(res);
			this.response = res;
			if (this.response.status == 'success'){
				this.employees = this.response.employees;
			} else {
			}
		});
	}

	deleteEmployee(id) {
		this.us.deleteEmployee(id).subscribe(res => {
			this.responseDelete = res;
			if (this.responseDelete.status == 'success'){
				this.us.alert('Employee deleted successfully!','success');
				this.getEmployees();
			} else {
				this.us.alert('Error deleting employee!','error');
			}
		});
	}
}
