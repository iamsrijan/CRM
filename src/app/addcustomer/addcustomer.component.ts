import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  response : any = {};
  angForm : FormGroup;
  constructor(private fb : FormBuilder, private us: CustomerService) { 
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      phone_number: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

  addCustomer() {
    this.us.addCustomer(this.angForm.value).subscribe(res => {
      this.response = res;
      if (this.response.status == 'success'){
        this.us.alert('Customer added successfully!','success');
        this.angForm.reset();
      } else {
        this.us.alert('Error saving customer!','error');
      }
    })
  }
}
