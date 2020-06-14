import {User} from "../models/User";
import axios from "axios";

export class UserService {
    private http;

    constructor(
    ) {
        this.http = axios
    }

    getUser(): User {
        return this.http.get('/user');
    }

    getName(): string {
        return '管理員';
    }
}
