import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '1f975373-0b21-436f-bd12-e9e6f63d529e'
    }
})

// Получим данные авторизации
export const authAPI = () => {
    return instance.get(`auth/me`,{withCredentials: true}).then((response) => {
        return response.data; 
    })
}

// Получим пользователей
export const getUsersAPI = (currentPage: number, pageSize: number) => {  
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
        return response.data.items; 
    })
}

// Получим число пользователей
export const getUsersCountAPI = () => {  
    return instance.get(`users`).then(response => {
        return response.data.totalCount; 
    })
}

// Получим профиль пользователя
export const getUserProfileAPI = (id: number) => {
    return instance.get(`profile/${id}`)
    .then(response => {
        return response.data;
    })
}

// Получим аватар авторизованного пользователя
export const getAuthAvaAPI = (id: number) => {
    return instance.get(`profile/${id}`)
    .then(response => {
        return response.data.photos.small
    })
}

// Подпишемся на пользователя
export const followAPI = (id: number) => {
    return instance.post(`follow/${id}`, {})
    .then(response => {
        return response.data.resultCode
    })
}

// Отпишемся пользователя
export const unFollowAPI = (id: number) => {
    return instance.delete(`follow/${id}`)
    .then(response => {
        return response.data.resultCode
    })
}