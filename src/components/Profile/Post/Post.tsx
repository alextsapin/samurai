import React from 'react';
import css from './style.module.scss';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import ava from '../../../images/avatar.jpg';

import TextField from '@mui/material/TextField';

type PostPropsType = {
    id: string
    message: string
    deletePost: (id: string) => void
    editPost: (newText: string) => void
}

const Post = (props: PostPropsType) => {

    const [edit, setEdit] = React.useState(false);
    const [text, setText] = React.useState(props.message);

    function postDeleteHandler(id: string) {
        props.deletePost(id)
    }

    function postEditHandler() {
        setEdit(true)
    }

    const onChangeHandler = (e: any) => {
        setText(e.currentTarget.value)
    }

    const turnOffHandler = () => {
        props.editPost(text)
        setEdit(false)
    }

    return (
        <Paper className={css.post} elevation={3}>
            <img className={css.avatar} src={ava} alt="img"/>
            {
                edit 
                ?   <TextField 
                        className="mt-3" 
                        value={text} 
                        variant="outlined" 
                        label="Отредактируйте текст"
                        onBlur={turnOffHandler}
                        onChange={onChangeHandler}
                        autoFocus
                    />
                :   props.message 
            }

            <div className={css.panel}>
                <button onClick={postEditHandler} className={css.button}>
                    <EditIcon/>
                </button>

                <button onClick={() => postDeleteHandler(props.id)} className={css.button}>
                    <DeleteForeverIcon/>
                </button>
            </div>
        </Paper> 
        
    )
}

export default Post;