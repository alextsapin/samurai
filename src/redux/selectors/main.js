import {createSelector} from 'reselect';

// Получим поисковую строку
export const getSearchStringSL = (state) => {
    return state.main.searchString;
}

// Получим состояние соединения
export const getIsConnectSL = (state) => {
    return state.main.isConnect;
}

// Получим репозитории
export const getRepositoryAllSL = (state) => {
    return state.main.repositoryArray;
}

// Получим количество репозиториев
export const getRepositoryTotalSL = (state) => {
    return state.main.repositoryTotal;
}

// Получим текущую страницу
export const getCurrentPageSL = (state) => {
    return state.main.currentPage;
}

// Получим число элементов на страницу
export const getCountItemPageSL = (state) => {
    return state.main.countPageItem;
}

// Получим общее число страниц
export const getPageTotalSL = (state) => {
    return Math.ceil(state.main.repositoryTotal / state.main.countPageItem);
}

// Получим массив страниц
export const getPageArraySL = createSelector(getPageTotalSL, (count) => {
    let pages = [];
    for(let i = 1; i <= count; i++) {
        pages.push(i);
    }
    return pages;
});

// Получим число страниц в секции
export const getCountPageSectionSL = (state) => {
    return state.main.countPageSection;
}

// Получим число секций
export const getPortionTotalSL = createSelector(getRepositoryTotalSL, getCountItemPageSL, getCountPageSectionSL, (total, items, size) => {
    return Math.ceil(total / items / size);
});

// Получим список используемых языков
export const getLanguageListSL = (state) => {
    return state.main.languageList;
}

export const getErrorSL = (state) => {
    return state.main.error;
}