import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import Customer from '../Customer';
import { EmployeeService } from '../employee.service';
import Employee from '../Employee';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
	customers: Customer[];
  employees: Employee[];
	response : any = {};
  count=0
	responseDelete : any = {};
	constructor(private us: CustomerService, private us1: EmployeeService) { }

	ngOnInit() {
		this.getCustomers();
    this.getEmployees();
	}

	getCustomers() {
		this.us.getCustomer().subscribe((res) => {
			console.log(res);
			this.response = res;
			if (this.response.status == 'success'){
				this.customers = this.response.customers;
			} else {
			}
		});
	}

	getEmployees() {
		this.us1.getEmployee().subscribe((res) => {
			console.log(res);
			this.response = res;
			if (this.response.status == 'success'){
				this.employees = this.response.employees;
			} else {
			}
		});
	}


}
