import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';

@Injectable({
	providedIn: 'root'
})
export class CustomerService {
	url = 'http://localhost:3000/customer';

	constructor(private http: HttpClient) { }

	addCustomer(customer) {
		return this.http.post(this.url+'/addcustomer', customer);
	}

	getCustomer() {
		return this.http.get(this.url);
	}

	editCustomer(id) {
		return this.http.get(this.url+'/editcustomer/'+id);
	}

	updateCustomer(id, customer) {
		return this.http.post(this.url+'/updatecustomer/'+id, customer);
	}

	deleteCustomer(id) {
		return this.http.get(this.url+'/deletecustomer/'+id);
	}

	alert(mssg, status) {
		swal.fire(mssg, "", status);
	}
}
