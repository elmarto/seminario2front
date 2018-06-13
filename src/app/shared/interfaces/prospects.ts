import { Project } from './models';

export interface UserRegistration {
    userEmail: string;
    userPassword: string;
    roleID: number;
    firstName: string;
    lastName: string;
    birthdate: string;
    areaCode: string;
    phoneNumber: string;
}

export interface LoginRequest {
    userEmail: string;
    userPassword: string;
}

export interface LoginResponse {
    token: string;
    time: number;
}

export interface ProjectListRequest {
    filters: Array<string>;
}

export interface ProjectListResponse {
    projects: Project[];
}
