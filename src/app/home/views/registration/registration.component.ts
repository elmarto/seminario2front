import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../../../shared/services/registration.service';
import { RolesService } from '../../../shared/services/roles.service';
import { Role } from '../../../shared/interfaces/role';
import { UserRegistration } from '../../../shared/interfaces/user-registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @ViewChild('stepper') stepper;

  /* Form data */
  roles: Role[];

  /* Flow Status */
  firstFormGroup: FormGroup;

  registered: boolean;

  constructor(private rolesService: RolesService,
              private registrationService: RegistrationService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.firstFormGroup = this.formBuilder.group({
      userRole: ['', Validators.required],
      userEmail: ['', Validators.required],
      userPassword: ['', Validators.required],
    });

    this.rolesService.findVisible().subscribe(roles => this.roles = roles);
  }

  onSelectionChange(event: any): void {

    if (event.selectedIndex === 1 && !this.registered) {

      const userRegistration: UserRegistration = {
        roleID: this.firstFormGroup.get('userRole').value,
        userEmail: this.firstFormGroup.get('userEmail').value,
        userPassword: this.firstFormGroup.get('userPassword').value
      };

      this.registrationService.registerUser(userRegistration).subscribe(response => {
        this.registered = true;
      });
    }
  }
}
