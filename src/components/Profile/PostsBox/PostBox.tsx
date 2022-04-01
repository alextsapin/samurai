import React from 'react';
import css from './style.module.scss'
import Post from './Post/Post';

const PostBox = () => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        let text = newPostElement.current?.value;
        text = '';
    }

    return (
        <div className="mt-5">
            <div>
                <div className="form-floating">
                    <textarea ref={newPostElement} className={'form-control ' + css.textarea}></textarea>
                </div>
                <button onClick={addPost} className="btn btn-success mt-2">Add</button>
            </div>

            <Post message="Hello!"/>
            <Post message="React super!"/>
        </div>
    )
}

export default PostBox;