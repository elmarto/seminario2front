import { Project, Client, Profession, ProjectStatus } from './models';
import { ResponseStatus } from './response-status';

export interface UserRegistrationRequest {
    userEmail: string;
    userPassword: string;
    roleID: number;
}

export interface UserInformationRequest {
    firstName: string;
    lastName: string;
    birthdate: Date;
    sexID: number;
    areaCode: string;
    phoneNumber: string;
}

export interface ClientLocationRequest {
    stateProvinceID: number;
    cityID: number;
    streetAddress: string;
}

export interface ProfessionalLocationRequest {
    stateProvinceID: number;
    cityID: number;
    streetAddress: string;
}

export interface LoginRequest {
    userEmail: string;
    userPassword: string;
}

export interface LoginResponse {
    status: ResponseStatus;
    token: string;
}

export interface ProjectListRequest {
    filters: Array<string>;
}

export interface ProjectListResponse {
    values: Project[];
}

export interface ProjectCreateRequest {
    projectName: string;
    professionID: number;
    projectDescription: string;
}

export interface ProjectCreateResponse {
    projectID: number;
    registerDate: Date;
    client: Client;
    profession: Profession;
    projectStatus: ProjectStatus;
    projectName: string;
    projectDescription: string;
}

export interface BudgetCreateRequest {
    projectID: number;
    amount: string;
    comments: string;
}

export interface BudgetUpdateRequest {
    budgetID: number;
    budgetStatusID: string;
}

export interface ProfessionalProfessionCreateRequest {
    professionID: number;
}

export interface ProfessionalProfessionDeleteRequest {
    professionID: number;
}

export interface ScoreRequest {
    scoreID: {1, 2, 3};
    comments: string;
}
