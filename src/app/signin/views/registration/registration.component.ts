import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SexType } from '../../../shared/interfaces/sex-type';
import { Role, StateProvince, City } from '../../../shared/interfaces/models';
import { AuthService, RolesService, RegistrationService } from '../../../shared';
import { SexTypesService } from '../../../shared/services/sex-types.service';
import { StateProvincesService } from '../../../shared/services/state-provinces.service';
import { CitiesService } from '../../../shared/services/cities.service';
import { TokenService } from '../../../shared/services/token.service';
import { UserRegistrationRequest,
  LoginRequest,
  UserInformationRequest,
  ClientLocationRequest,
  ProfessionalWorkplaceRequest } from '../../../shared/interfaces/prospects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @ViewChild('stepper') stepper;

  /* Roles */
  private rolesHome = new Map<number, string>();

  /* Form data */
  roles: Role[];
  sexTypes: SexType[];
  stateProvinces: StateProvince[];
  cities: City[];

  /* Flow Status */
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  registered: boolean;

  constructor(private rolesService: RolesService,
              private sexTypesService: SexTypesService,
              private stateProvincesService: StateProvincesService,
              private citiesService: CitiesService,
              private registrationService: RegistrationService,
              private authService: AuthService,
              private tokenService: TokenService,
              private formBuilder: FormBuilder,
              private router: Router) {

    /* Una home para cada rol */
    this.rolesHome.set(3, '/students/list-projects');
    this.rolesHome.set(4, '/professors/home');
  }

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

    this.thirdFormGroup = this.formBuilder.group({
      stateProvinceID: ['', Validators.required],
      cityID: ['', Validators.required],
      streetAddress: ['', Validators.required]
    });

    this.rolesService.findAll().subscribe(roles => this.roles = roles);
    this.sexTypesService.findAll().subscribe(sexTypes => this.sexTypes = sexTypes);
    this.stateProvincesService.findAll().subscribe(stateProvinces => {
      this.stateProvinces = stateProvinces;
      this.citiesService.findByStateProvince(this.stateProvinces[0].stateProvinceID).subscribe(cities => this.cities = cities);
    });
  }

  onChangeStateProvince(): void {
    this.citiesService.findByStateProvince(this.thirdFormGroup.get('stateProvinceID').value).subscribe(cities => this.cities = cities);
  }

  onSelectionChange(event: any): void {

    if (!this.registered && event.selectedIndex === 3) {

      const userRegistrationRequest: UserRegistrationRequest = {
        roleID: this.firstFormGroup.get('userRole').value,
        userEmail: this.firstFormGroup.get('userEmail').value,
        userPassword: this.firstFormGroup.get('userPassword').value
      };

      const userInformationRequest: UserInformationRequest = {
        firstName: this.secondFormGroup.get('firstName').value,
        lastName: this.secondFormGroup.get('lastName').value,
        birthdate: this.secondFormGroup.get('birthdate').value,
        sexID: this.secondFormGroup.get('sexID').value,
        areaCode: this.secondFormGroup.get('areaCode').value,
        phoneNumber: this.secondFormGroup.get('phoneNumber').value
      };

      const clientLocationRequest: ClientLocationRequest = {
        stateProvinceID: this.thirdFormGroup.get('stateProvinceID').value,
        cityID: this.thirdFormGroup.get('cityID').value,
        streetAddress: this.thirdFormGroup.get('streetAddress').value
      };

      const professionalWorkplaceRequest: ProfessionalWorkplaceRequest = {
        stateProvinceID: this.thirdFormGroup.get('stateProvinceID').value,
        cityID: this.thirdFormGroup.get('cityID').value
      };

      this.registrationService.registerUser(userRegistrationRequest).subscribe(userRegistrationResponse => {
        if (userRegistrationResponse.status.code === 200) {
          const loginRequest: LoginRequest = {
            userEmail: this.firstFormGroup.get('userEmail').value,
            userPassword: this.firstFormGroup.get('userPassword').value
          };
          this.authService.login(loginRequest).subscribe(loginResponse => {
            if (loginResponse.status.code === 200) {
              /* Guardo el token */
              this.tokenService.setToken(loginResponse.token);
              /* Obtengo un rol al azar */
              const tokenInformation = this.tokenService.getTokenInformation();
              /* Redirecciono a donde corresponda */
              const userRoleID = parseInt(tokenInformation.data.userRoles[0].roleID, 10);
              this.registrationService.registerUserInformation(userInformationRequest).subscribe(userInformationResponse => {
                if (userInformationResponse.status.code === 200) {
                  if (userRoleID === 3) {
                    this.registrationService.registerClientLocation(clientLocationRequest).subscribe(
                      clientLocationResponse => this.router.navigateByUrl(this.rolesHome.get(userRoleID))
                    );
                  } else if (userRoleID === 4) {
                    this.registrationService.registerProfessionalWorkplace(clientLocationRequest).subscribe(
                      clientLocationResponse => this.router.navigateByUrl(this.rolesHome.get(userRoleID))
                    );
                  }
                }
              });
            }
          });
        }
      });
    }
  }
}
