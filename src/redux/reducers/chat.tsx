import {v1} from 'uuid';

const initialState = {
    chatBox: [
        {   
            id: v1(), 
            name: 'Chloe', 
            image: 'https://i.ibb.co/0qwWMJT/chloe.jpg', 
            message: 'Advertisements want to persuade us to buy particular products. How do they do it?'
        },
        { 
            id: v1(), 
            name: 'Won', 
            image: 'https://i.ibb.co/DRcDZ2p/won.jpg', 
            message: '저는 한국어를 배웁니다 커피를 마십니다 공원에 자주 가요 영화를 봅니다'
        },
        {   
            id: v1(), 
            name: 'Matt', 
            image: 'https://i.ibb.co/7kdCfVh/matt.jpg', 
            message: 'Mi perro se llama Tom. Tiene 3 años y es mi mejor amigo.'
        },
        {   
            id: v1(), 
            name: 'Жорик', 
            image: 'https://i.ibb.co/3pDsbL8/jora.jpg', 
            message: 'Может по пиву?'
        },
        { 
            id: v1(), 
            name: 'Метеоролог', 
            image: 'https://i.ibb.co/fH5cfFD/4522023f3e25467b5328d24596676806.jpg', 
            message: 'И в пятницу, и в выходные дни погода будет по-настоящему летняя. Причём это характеризуется не только дневной температурой в послеполуденные часы, а будет жарко — 26-29 градусов выше нуля, но и ночные температуры высокие. Вот в ночь на субботу и на воскресенье температура выше 15 градусов минимальная.'
        },
        {   
            id: v1(), 
            name: 'Тренер', 
            image: 'https://icdn.lenta.ru/images/2019/08/07/15/20190807152610185/square_320_3e8696683d5be27e75286bf5193406de.jpg', 
            message: 'Футболисты калининградской «Балтики» начали новый сезон с победы. На сборах в Химках наша команда в товарищеском матче обыграла астраханский «Волгарь».'
        }
    ]
}

const chatReducer = (state = initialState, action: any) => {
    switch(action.type) {
        default:
        return state
    }
}

export default chatReducer;