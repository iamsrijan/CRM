import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';

@Injectable({
	providedIn: 'root'
})
export class EmployeeService {
	url = 'http://localhost:3000/employee';

	constructor(private http: HttpClient) { }

	addEmployee(employee) {
		return this.http.post(this.url+'/addemployee', employee);
	}

	getEmployee() {
		return this.http.get(this.url);
	}

	editEmployee(id) {
		return this.http.get(this.url+'/editemployee/'+id);
	}

	updateEmployee(id, employee) {
		return this.http.post(this.url+'/updateemployee/'+id, employee);
	}

	deleteEmployee(id) {
		return this.http.get(this.url+'/deleteemployee/'+id);
	}

	alert(mssg, status) {
		swal.fire(mssg, "", status);
	}
}
