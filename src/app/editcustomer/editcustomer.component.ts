import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
	selector: 'app-editcustomer',
	templateUrl: './editcustomer.component.html',
	styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
	customer: any = {};
	angForm: FormGroup;
	response: any = {};
	constructor(private route: ActivatedRoute, 
		private fb: FormBuilder,
		private router: Router, 
		private us: CustomerService) {
		this.angForm = this.fb.group({
			name: ['', Validators.required ],
			email: ['', Validators.required ],
			phone_number: ['', Validators.required ]
		});
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.us.editCustomer(params['id']).subscribe(res => {
				this.customer = res;
				this.customer = this.customer.customer;
			});
		});
	}

	updateCustomer() {
		this.route.params.subscribe(params => {
			this.us.updateCustomer(params['id'], this.angForm.value).subscribe(res => {
				this.response = res;
				if (this.response.status == 'success'){
					this.us.alert('Customer updated successfully!','success');
					this.router.navigate(['customer']);
				} else {
					this.us.alert('Error updating customer!','error');
				}
			});
		});
	}
}
