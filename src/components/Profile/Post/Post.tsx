import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Skeleton from '@mui/material/Skeleton';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../redux/store';
import {Img} from 'react-image';
import Grid from '@mui/material/Grid';
import css from './Post.module.scss';

export type PostType = {
    id: string
    message: string
}

export type propsType = {
    deletePost: (id: string) => void
    editPost: (newText: string) => void
}

const Post = (props: PostType & propsType) => {

    const ava = useSelector<AppStateType, null | string >(state => state.auth.avaLink)

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
        <Grid className={css.post} container spacing={0}>
            <Grid item lg={2}>
                {
                    ava === null
                    ? <Skeleton variant="circular" width={70} height={70}/>
                    : <Img className={css.avatar} src={ava} loader={<Skeleton variant="circular" width={70} height={70}/>} alt="img"/>
                }
            </Grid>
            
            <Grid item lg={9}>
                {
                    edit 
                    ? <textarea className={css.input} value={text} onBlur={turnOffHandler} onChange={onChangeHandler} autoFocus/>
                    : props.message 
                }
            </Grid>

            <Grid item lg={1}>
                <div className={css.panel}>
                    <button onClick={postEditHandler} className={css.button}>
                        <EditIcon/>
                    </button>

                    <button onClick={() => postDeleteHandler(props.id)} className={css.button}>
                        <DeleteForeverIcon/>
                    </button>
                </div>
            </Grid>
        </Grid> 
        
    )
}

export default Post;