import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import Customer from '../Customer';

@Component({
	selector: 'app-getcustomer',
	templateUrl: './getcustomer.component.html',
	styleUrls: ['./getcustomer.component.css']
})
export class GetcustomerComponent implements OnInit {
	customers: Customer[];
	response : any = {};
	responseDelete : any = {};
	constructor(private us: CustomerService) { }

	ngOnInit() {
		this.getCustomers();
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

	deleteCustomer(id) {
		this.us.deleteCustomer(id).subscribe(res => {
			this.responseDelete = res;
			if (this.responseDelete.status == 'success'){
				this.us.alert('Customer deleted successfully!','success');
				this.getCustomers();
			} else {
				this.us.alert('Error deleting customer!','error');
			}
		});
	}
}
