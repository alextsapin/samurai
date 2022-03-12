import React from 'react';
import css from './style.module.scss'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className="mt-5">
            <form>
                <div className="form-floating">
                    <textarea className={'form-control ' + css.textarea}></textarea>
                </div>
                <button className="btn btn-success mt-2">Add</button>
            </form>

            <Post message="Hello!"/>
            <Post message="React super!"/>
        </div>
    )
}

export default MyPosts;