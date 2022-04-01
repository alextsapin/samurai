import css from './css.module.scss';
import DialogItem from './DialogItem/DialogItem';

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div >
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <DialogItem id={1} name="Dimych"/>
                    <DialogItem id={2} name="Jora"/>
                    <DialogItem id={3} name="Borya"/>
                </div>

                <div className="col-md-6">
                    <Message message="Hi"/>
                    <Message message="Hi Hi Hi"/>
                    <Message message="$$$$"/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;