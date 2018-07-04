import { Project, Client, Profession, ProjectStatus } from './models';
import { ResponseStatus } from './response-status';

export interface UserRegistrationRequest {
    userEmail: string;
    userPassword: string;
    roleID: number;
    firstName: string;
    lastName: string;
    birthdate: Date;
    sexID: number;
    areaCode: string;
    phoneNumber: string;
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
