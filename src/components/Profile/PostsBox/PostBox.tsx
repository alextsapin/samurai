import React from 'react';
import {connect} from 'react-redux';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@material-ui/core/Button';
import Post from '../Post/Post';
import {PostType} from '../Post/Post';
import css from './PostBox.module.scss';

// TС
import {addPostTC, updatePostTC, deletePostTC, editPostTC} from '../../../redux/reducers/profile';

// SL
import {getNewPostTextSL, getPostBoxSL} from '../../../redux/selectors/profile';

type PostBoxType = {
    postBox: Array<PostType>
    newPostText: string
    updatePostTC: (text: string) => void
    addPostTC: () => void
    editPostTC: (id: string, newText: string) => void
    deletePostTC: (id: string) => void
}

const PostBox = (props: PostBoxType) => {    
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const updatePost = () => {
        if(newPostElement.current) {
            props.updatePostTC(newPostElement.current.value)
        }
    }

    const addPost = (e: any) => {
        e.preventDefault();
        props.addPostTC()
    }

    const editPostHandler = (id: string, newText: string) => {
        props.editPostTC(id, newText)
    }

    const postJSXElements = props.postBox.map((item: PostType, index: number) => (
        <Post 
            key={index}
            id={item.id} 
            message={item.message} 
            deletePost={() => props.deletePostTC(item.id)} 
            editPost={(newText: string) => editPostHandler(item.id, newText)}
        />
    ))

    return (
            <div>
                {postJSXElements}
                <form className="formPost">
                    <textarea 
                        ref={newPostElement} 
                        onChange={updatePost} 
                        value={props.newPostText} 
                        className={css.textarea} 
                        placeholder="Мой новый пост..." 
                    />
                    <br/>
                    <Button variant="contained" color="primary" onClick={addPost} className="mt-2 float-right" type="submit">Добавить</Button>
                </form>
            </div>
        )
}

const mapStateToProps = (state: any) => {
    return {
        newPostText: getNewPostTextSL(state),
        postBox: getPostBoxSL(state)
    }
}

export default connect(mapStateToProps, {addPostTC, updatePostTC, deletePostTC, editPostTC})(PostBox);