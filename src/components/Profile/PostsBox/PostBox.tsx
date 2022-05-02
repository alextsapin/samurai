import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';

import css from './style.module.scss'
import Post from './Post/Post';

import Button from '@material-ui/core/Button';

// ЕС
import {addPostTC, updatePostTC} from '../../../redux/reducers/profile/profile';

// SL
import {getNewPostTextSL, getPostBoxSL} from '../../../redux/selectors/profile/profile';

type PostBoxPropsType = {
    postBox: Array<postType>
}

type postType = {
    id: number
    text: string
}

const PostBox = (props: any) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const updatePost = () => {
        let text = newPostElement.current?.value;
        props.updatePostTC(newPostElement.current?.value)
    }

    const addPost = (e: any) => {
        e.preventDefault();
        props.addPostTC()
    }

    const postJSXElements = props.postBox.map((item: postType, index: number) => <Post key={index} message={item.text}/>)

    return (
        <div className="row">
            <div className="col-12">
                <h2 className="title title_first">Мои посты:</h2>

                {postJSXElements}

                <h2 className="title title_second">Добавить новый пост</h2>

                <form className="formPost">
                    <textarea ref={newPostElement} onChange={updatePost} value={props.newPostText} className={css.textarea} placeholder="Мой новый пост..."/>
                    <br/>
                    <Button variant="contained" color="primary" onClick={addPost} className="mt-2 float-right" type="submit">Добавить</Button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        newPostText: getNewPostTextSL(state),
        postBox: getPostBoxSL(state)
    }
}

export default compose(connect(mapStateToProps, {addPostTC, updatePostTC}))(PostBox);