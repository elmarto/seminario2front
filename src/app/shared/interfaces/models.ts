export interface Project {
  projectName: string;
  projectDescription: string;
  projectStatusID: string;
  registerDate: Date;
  projectID?: string;
  clientID?: string;
  professionID?: string;
  professionName?: string;
  statusName?: string;
  firstName?: string;
  lastName?: string;
  cityName?: string;
  stateProvinceName?: string;
  lat?: string;
  lng?: string;
  budgets?: Budget[];
}

export interface Budget {
  budgetID: number;
  amount: string;
  budgetStatusID: string;
  comments: string;
  firstName?: string;
  lastName?: string;
  professionalID?: string;
  projectID?: string;
  requestDate?: Date;
  sexCode?: string;
  sexID?: string;
  sexName?: string;
  statusDescription?: string;
  statusName?: string;
  negativos?: string;
  neutros?: string;
  positivos?: string;
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
