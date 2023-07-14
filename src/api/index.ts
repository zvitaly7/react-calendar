import axios, {AxiosResponse} from "axios";
import {User} from "../store/reducers/auth";

export default class UserService {
    static async getUsers(): Promise<AxiosResponse<User[]>> {
        return await axios.get<User[]>('./users-mock.json')
    }
 }
