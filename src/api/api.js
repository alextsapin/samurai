import * as axios from 'axios';

const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://api.github.com/',
    headers: {}
});

// Получим репозитории
export const getRepositoriesAPI = (name, size, page) => {  
    if(name === '') {
        return instance.get(`search/repositories?q=stars:>1&sort=stars&per_page=${size}&page=${page}`).then(response => {
            console.log(response.data)
            return response.data;
        }).catch(err => {
            console.log(err.documentation_url)
            console.log(err.message)
            return null;
        })
    } else {
        return instance.get(`search/repositories?q=${name}&sort=stars&order=desc&per_page=${size}&page=${page}`).then(response => {
            return response.data; 
        }).catch(err => {
            console.log(err.documentation_url)
            console.log(err.message)
            return err;
        })
    }
}

// Получим разработчиков
export const getContributorsAPI = (autor, repository) => {  
    return instance.get(`repos/${autor}/${repository}/contributors`).then(response => {
        console.log(response.data);
        return response.data; 
    })
}

// Получим используемые языки
export const getLanguageListAPI = (autor, repository) => {  
    return instance.get(`repos/${autor}/${repository}/languages`).then(response => {
        return response.data; 
    })
}