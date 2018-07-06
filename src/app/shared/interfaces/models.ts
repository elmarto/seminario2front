export interface Project {
  projectID: number;
  projectStatus: number;
  projectName: string;
  projectDescription: string;
  registerDate: Date;
  budgets?: Budget[];
}

export interface Budget {
  budgetID: number;
  amount: string;
  budgetStatusID: string;
  comments: string;
  firstName: string;
  lastName: string;
  professionalID: string;
  projectID: string;
  requestDate: Date;
  sexCode: string;
  sexID: string;
  sexName: string;
  statusDescription: string;
  statusName: string;
}

export interface BudgetStatus {
  budgetStatusID: number;
  statusName: string;
  statusDescription: string;
}

// Student
export interface Client {
  clientID: number;
  user: User;
  areaCode: string;
  phoneNumber: string;
}

export interface User {
  userID: number;
  userStatus: UserStatus;
  emailAddress: string;
  registerDate: Date;
  userInformation?: UserInformation;
}

export interface ProjectStatus {
  projectStatusID: number;
  statusName: string;
  statusDescription: string;
}

export interface Professional {
  professionalID: number;
  professions: Profession[];
  user: User;
}

export interface Profession {
  professionID: number;
  professionName: string;
}

export interface City {
  cityID: number;
  stateProvince: StateProvince;
  cityName: string;
}

export interface StateProvince {
  stateProvinceID: number;
  stateProvinceName: string;
}

export interface UserStatus {
  userStatusID: number;
  statusName: string;
  statusDescription: string;
}

export interface UserInformation {
  firstName: string;
  lastName: string;
  birthdate: string;
  areaCode: string;
  phoneNumber: string;
}

export interface Role {
  roleID: number;
  roleName: string;
  roleDescription: string;
}

