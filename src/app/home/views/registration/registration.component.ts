import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../../shared/services/users.service';
import { RolesService } from '../../../shared/services/roles.service';
import { UserCreation } from '../../../shared/interfaces/user-creation';
import { Role } from '../../../shared/interfaces/role';

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

  constructor(private rolesService: RolesService,
              private usersService: UsersService,
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
    if (event.selectedIndex === 1) {
      this.createUser();
    }
  }

  createUser(): void {

    const userCreation: UserCreation = {
      roleID: this.firstFormGroup.get('userRole').value,
      userEmail: this.firstFormGroup.get('userEmail').value,
      userPassword: this.firstFormGroup.get('userPassword').value
    };

    this.usersService.create(userCreation).subscribe(response => { });
  }
}
