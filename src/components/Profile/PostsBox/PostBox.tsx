import React from 'react';
import {connect} from 'react-redux';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import css from './style.module.scss'
import Post from './Post/Post';

import Button from '@material-ui/core/Button';

// ЕС
import {addPostTC, updatePostTC, deletePostTC, editPostTC} from '../../../redux/reducers/profile';

// SL
import {getNewPostTextSL, getPostBoxSL} from '../../../redux/selectors/profile';

type PostBoxPropsType = {
    postBox: Array<postType>
}

type postType = {
    id: string
    text: string
}

const PostBox = (props: any) => {    
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const updatePost = () => {
        props.updatePostTC(newPostElement.current?.value)
    }

    const addPost = (e: any) => {
        e.preventDefault();
        props.addPostTC()
    }

    const editPostHandler = (id: string, newText: string) => {
        props.editPostTC(id, newText)
    }

    const postJSXElements = props.postBox.map((item: postType, index: number) => (
        <Post 
            key={index}
            id={item.id} 
            message={item.text} 
            deletePost={() => props.deletePostTC(item.id)} 
            editPost={(newText: string) => editPostHandler(item.id, newText)}
        />
    ))

    return (
        <Container fixed>
            <Grid container>
                <Grid item lg={8}>
                    {postJSXElements}
            
                    <form className="formPost">
                        <textarea 
                            ref={newPostElement} 
                            onChange={updatePost} 
                            value={props.newPostText} 
                            className={'form-control ' + css.textarea} 
                            placeholder="Мой новый пост..." 
                        />
                        <br/>
                        <Button variant="contained" color="primary" onClick={addPost} className="mt-2 float-right" type="submit">Добавить</Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state: any) => {
    return {
        newPostText: getNewPostTextSL(state),
        postBox: getPostBoxSL(state)
    }
}

export default connect(mapStateToProps, {addPostTC, updatePostTC, deletePostTC, editPostTC})(PostBox);