import React from 'react';
import css from './style.module.scss'

type PostPropsType = {
    message: string
}

const Post = (props: PostPropsType) => {
    return (
        <div className={css.post}>
            <img className={css.avatar} src="https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg" alt="img"/>
            {props.message}
        </div>
    )
}

export default Post;