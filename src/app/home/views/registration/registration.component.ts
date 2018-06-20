import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../../../shared/services/registration.service';
import { SexTypesService } from '../../../shared/services/sex-types.service';
import { RolesService } from '../../../shared/services/roles.service';
import { SexType } from '../../../shared/interfaces/sex-type';
import { Role } from '../../../shared/interfaces/models';
import { UserRegistrationRequest } from '../../../shared/interfaces/prospects';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @ViewChild('stepper') stepper;

  /* Form data */
  roles: Role[];
  sexTypes: SexType[];

  /* Flow Status */
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  registered: boolean;

  constructor(private rolesService: RolesService,
              private sexTypesService: SexTypesService,
              private registrationService: RegistrationService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.firstFormGroup = this.formBuilder.group({
      userRole: ['', Validators.required],
      userEmail: ['', Validators.required],
      userPassword: ['', Validators.required],
    });

    this.secondFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthdate: ['', Validators.required],
      sexID: ['', Validators.required],
      areaCode: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });

    this.rolesService.findAll().subscribe(roles => this.roles = roles);
    this.sexTypesService.findAll().subscribe(sexTypes => this.sexTypes = sexTypes);
  }

  onSelectionChange(event: any): void {

    console.log(event);

    if (event.selectedIndex === 2 && !this.registered) {

      const userRegistration: UserRegistrationRequest = {
        roleID: this.firstFormGroup.get('userRole').value,
        userEmail: this.firstFormGroup.get('userEmail').value,
        userPassword: this.firstFormGroup.get('userPassword').value,
        firstName: this.secondFormGroup.get('firstName').value,
        lastName: this.secondFormGroup.get('lastName').value,
        birthdate: this.secondFormGroup.get('birthdate').value,
        sexID: this.secondFormGroup.get('sexID').value,
        areaCode: this.secondFormGroup.get('areaCode').value,
        phoneNumber: this.secondFormGroup.get('phoneNumber').value,
      };

      this.registrationService.registerUser(userRegistration).subscribe(response => {
        this.registered = true;
      });
    }
  }
}
