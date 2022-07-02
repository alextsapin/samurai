import axios, {AxiosResponse} from 'axios';

const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '1f975373-0b21-436f-bd12-e9e6f63d529e'
    }
});

export const getAllUsersAPI = (currentPage: number, pageSize: number) => {  
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
        return response.data.items; 
    })
}

export const getUsersCountAPI = () => {  
    return instance.get(`users`).then(response => {
        return response.data.totalCount; 
    })
}