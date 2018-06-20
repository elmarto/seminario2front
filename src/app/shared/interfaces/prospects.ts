import { Project } from './models';
import { ResponseStatus } from 'app/shared/interfaces';

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
    projects: Project[];
}
