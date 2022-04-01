import {NavLink} from 'react-router-dom';
import css from './css.module.scss';

type DialogItemType = {
    id: number
    name: string
}

const DialogItem = (props: DialogItemType) => {
    return (
        <div className="dialog">
            <NavLink to={'dialog/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;